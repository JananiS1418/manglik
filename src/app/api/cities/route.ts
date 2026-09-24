import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const country = searchParams.get("country");
        const city = searchParams.get("city");

        if (!country || !city) {
            return NextResponse.json({ success: false, message: "Missing params" }, { status: 400 });
        }

        const cityBaseUrl = process.env.LOCATION_API_URL;
        if (!cityBaseUrl) throw new Error("LOCATION_API_URL not configured");

        const url = `${cityBaseUrl}/${encodeURIComponent(country)}/${encodeURIComponent(city)}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch cities");
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Cities API Error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
