import axios from "axios";

export const getCharacters = (url: string) => {
    return axios.get(url)
        .then(response => {
            return response.data
        })
}
