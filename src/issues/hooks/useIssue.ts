import { useQuery } from "@tanstack/react-query"
import { Issue } from '../interfaces/responseIssues';
import { githubAPI } from '../api/githubApi';

const getIssue = async(numberIssue:number):Promise<Issue>=> {
    const { data } = await githubAPI.get(`/issues/${numberIssue}`);
    console.log(data);
    return data ;    

}
export const useIssue = (issueNumber:number) => {
   const issueQuery = useQuery(['issue',issueNumber],()=>{ getIssue(issueNumber)});
return {issueQuery};
}
