import axios from "axios";

export const githubAPI = axios.create({
    baseURL:"https://api.github.com/repos/facebook/react",
    headers:{
        Authorization:null
        //"Bearer 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"
    }
});