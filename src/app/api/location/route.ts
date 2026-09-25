import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
    const headersList = await headers();

    const countryCode = headersList.get('cf-ipcountry') || '';
    const city = headersList.get('cf-ipcity') || '';
    const region = headersList.get('cf-region-code') || '';
    const continent = headersList.get('cf-ipcontinent') || '';
    const timezone = headersList.get('cf-timezone') || '';
    const latitude = headersList.get('cf-iplatitude') || '';
    const longitude = headersList.get('cf-iplongitude') || '';

    return NextResponse.json({
        success: true,
        countryCode,
        city,
        region,
        continent,
        timezone,
        latitude,
        longitude
    });
}
