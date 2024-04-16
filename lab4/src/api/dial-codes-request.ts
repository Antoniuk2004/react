import axios from 'axios';

export const dialCodesRequest = async () => {
    const url = 'https://countriesnow.space/api/v0.1/countries/codes';
    try {
        const response = await axios.get(url);

        const set = new Set(response.data.data.map((country: any) => country.dial_code));
        return [...set] as string[];
    } catch (error) {
        console.error(error);
        return null;
    }
}