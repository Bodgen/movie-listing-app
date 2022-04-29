import axios from "axios";

const api_key = "0ccca053096b78aeb501b706e51dece9"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/",
    headers:{
        "Content-type":"application/json;charset=utf-8"
    }
})

export const movieApi = {
    getItems() {
        return instance.get(`4/list/8200670?page=1&api_key=${api_key}`).then(response => response.data.results)
    },
    getItemDetails(mediaType,movieId){
        return instance(`3/${mediaType}/${movieId}?api_key=0ccca053096b78aeb501b706e51dece9&language=en-US`).then(response=>response.data)
    }
}