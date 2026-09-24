import { NextResponse } from "next/server";

export async function GET() {
    try {
        const countryUrl = process.env.COUNTRY_API_URL;
        if (!countryUrl) throw new Error("COUNTRY_API_URL not configured");
        
        const response = await fetch(countryUrl);
        if (!response.ok) throw new Error("Failed to fetch countries");
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Countries API Error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
