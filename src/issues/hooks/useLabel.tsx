import { useQuery } from "@tanstack/react-query";
import { githubAPI } from "../api/githubApi";
import { Labels } from "../interfaces/responseLabels";
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Labels[]> => {
    await sleep(3);
    const { data } = await githubAPI.get<Labels[]>("/labels");
    return data;
}

export const useLabels = () => {
    const labelQuery = useQuery(['labels'], getLabels, {
        //refetchOnWindowFocus:true,
        staleTime:1000 * 60 * 60,
        //placeholderData:[],
        placeholderData: [
            {
                id: 588833528,
                node_id: "MDU6TGFiZWw1ODg4MzM1Mjg=",
                url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium",
                name: "Difficulty: medium",
                color: "fbca04",
                default: false,                
            },
            {
                id: 717031390,
                node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
                url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
                name: "good first issue",
                color: "6ce26a",
                default: true
            }]
    })
    return {
        labelQuery
    }

};