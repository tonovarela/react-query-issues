import { useQuery } from "@tanstack/react-query"
import { Issue } from '../interfaces/responseIssues';
import { githubAPI } from '../api/githubApi';
import { sleep } from '../../helpers/sleep';


const getIssueInfo = async (issueNumber:number): Promise<Issue> => {
    await sleep(2);
    const { data } = await githubAPI.get<Issue>(`/issues/${issueNumber}`);        
    return data ;
}

const getIssueComments = async (issueNumber:number): Promise<Issue[]> => {
    await sleep(2);
    const { data } = await githubAPI.get<Issue[]>(`/issues/${issueNumber}/comments`);        
    return data ;
}
export const useIssue = (issueNumber: number) => {
           
    const issueQuery = useQuery(
        ["issue", issueNumber ],
        () => getIssueInfo( issueNumber ),
    );
    const issueCommentsQuery = useQuery(
        ["issue", issueNumber ,'comments'],
        () => getIssueComments( issueQuery.data!.number ),{enabled:issueQuery.data!==undefined}
    );


    
     return {issueQuery,issueCommentsQuery};
}
