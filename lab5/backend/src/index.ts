import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/v1/shortUrl', async (req, res) => {
    try {
        const apiURL = 'https://cleanuri.com/api/v1/shorten';
        const response = await axios.post(apiURL, {
            url: req.body.url
        });

        res.send(response.data);
    } catch (e) {
        res.status(500).send(e);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
