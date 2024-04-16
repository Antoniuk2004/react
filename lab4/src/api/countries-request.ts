import axios from "axios";

export const countriesRequest = async () => {
    const url = "https://countriesnow.space/api/v0.1/countries/info?returns=name";

    try {
        const response = await axios.get(url);
        return response.data.data.map((country: any) => country.name);
    } catch (error) {
        console.error(error);
        return null;
    }
}