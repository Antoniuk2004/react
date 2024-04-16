import axios from "axios";

export const citiesRequest = async (country: string) => {
    const url = "https://countriesnow.space/api/v0.1/countries/cities";

    try {
        const response = await axios.post(url, {
            country
        });
        return response.data.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}