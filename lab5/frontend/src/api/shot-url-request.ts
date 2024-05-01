import axios from "axios";

export const shotUrlRequest = async (urlToShortened: string) => {
    try {
        const apiUrl = 'http://localhost:8080/api/v1/shortUrl';
        const response = await axios.post(apiUrl, {
            url: urlToShortened
        });

        console.log(response.data.result_url);

        return response.data.result_url;
    } catch (e) {
        return null;
    }
}