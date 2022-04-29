import axios from "axios";

const api_key = "0ccca053096b78aeb501b706e51dece9"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/4/",
    headers:{
        "Content-type":"application/json;charset=utf-8"
    }
})

export const movieApi = {
    getItems() {
        return instance.get(`list/8200670?page=1&api_key=${api_key}`).then(response => response.data.results)
    }
}