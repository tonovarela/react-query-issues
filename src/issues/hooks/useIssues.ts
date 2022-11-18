import { githubAPI } from "../api/githubApi";
import { Issue } from "../interfaces";
import { useQuery } from '@tanstack/react-query';


 const getIssues =async():Promise<Issue[]>=>{
    const {data}= await githubAPI.get('/issues',{headers:{
        Authorization:null
    }});
    return data;
}


export const useIssues = ()=>{
    const issuesQuery = useQuery(['issues'],getIssues);    
    return {
        issuesQuery
    }

}