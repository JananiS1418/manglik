export const getLocation = async (
    country: string,
    city: string
) => {
    const baseUrl = process.env.LOCATION_API_URL;
    if (!baseUrl) {
        throw new Error("LOCATION_API_URL not configured");
    }
    const url =
        `${baseUrl}/` +
        `${encodeURIComponent(country)}/` +
        `${encodeURIComponent(city)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Location API failed");
    }

    const data = await response.json();

    return data;
};  