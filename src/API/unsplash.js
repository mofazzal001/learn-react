import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 39tVSe9zwOowZGbwSnru_9zqwmjgaa9OHpfvJuXmQ08',
    },
});
