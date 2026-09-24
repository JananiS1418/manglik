import { NextResponse } from "next/server";
import { getLocation } from "./location";

export const POST = async (request: Request) => {
    try {
        const body = await request.json();

        // 1. Get location data
        const actualCityName = body.city.split(',')[0].trim();
        const locationData = await getLocation(
            body.country,
            actualCityName
        );

        if (!locationData || locationData.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Location not found",
                },
                {
                    status: 404,
                }
            );
        }

        // 2. Take first matching location
        const location = locationData[0];

        const latitude = location.Latitude;
        const longitude = location.Longitude;
        const timezone = location.TimeZone;


        // 3. Convert 12-hour time to 24-hour format
        let hour = Number(body.hour);

        if (body.ampm === "AM" && hour === 12) {
            hour = 0;
        }

        if (body.ampm === "PM" && hour !== 12) {
            hour += 12;
        }

        const hour24 = String(hour).padStart(2, "0");

        // 4. Build birth datetime
        const birthDateTime =
            `${body.year}-${body.month}-${body.day}` +
            `T${hour24}:${body.minute}:${body.second}`;


        // 5. Encode timezone in Base64
        let finalTimezone = timezone;
        if (timezone === "Asia/Kolkata") {
            finalTimezone = "Asia/Calcutta";
        }

        const encodedTimezone = Buffer
            .from(finalTimezone)
            .toString("base64");


        // 6. Build Manglik service URL
        const manglikApiBase = process.env.MANGLIK_API_URL;
        if (!manglikApiBase) {
            throw new Error("MANGLIK_API_URL not configured");
        }
        const manglikUrl =
            `${manglikApiBase}/` +
            `${encodedTimezone}/` +
            `${latitude}/` +
            `${longitude}/` +
            `${birthDateTime}/en`;


        // 7. Call Manglik service
        const manglikResponse = await fetch(manglikUrl);

        if (!manglikResponse.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Manglik service failed",
                },
                {
                    status: 502,
                }
            );
        }

        const manglikData = await manglikResponse.json();


        // 8. Handle empty result
        if (
            !manglikData.result ||
            manglikData.result.length === 0
        ) {
            // Fallback to Non-Manglik if the Astroved API returns an empty result
            return NextResponse.json({
                success: true,
                location: {
                    latitude,
                    longitude,
                    timezone,
                },
                birthDateTime,
                data: {
                    manglikStatus: "Non-Manglik",
                    moonSign: manglikData.MoonSign || "",
                    birthStar: manglikData.Star || "",
                    marsCombination: "",
                    prediction: "",
                    remedies: "",
                },
            });
        }

        // 9. First result
        const result = manglikData.result[0];

        // 10. Return clean response
        return NextResponse.json({
            success: true,

            location: {
                latitude,
                longitude,
                timezone,
            },

            birthDateTime,

            data: {
                manglikStatus: result.Manglik,
                moonSign: manglikData.MoonSign || result.MoonSign || "",
                birthStar: manglikData.Star || result.Star || "",
                marsCombination: result.MarsInCombination,
                prediction: result.Prediction,
                remedies: result.Remedies,
            },
        });

    } catch (error) {
        console.error("Manglik Route Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
};