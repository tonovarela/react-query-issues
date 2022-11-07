import { useQuery } from "@tanstack/react-query";
import { githubAPI } from "../../api/githubApi";
import { Labels } from "../../interfaces/responseLabels";
import { sleep } from '../../../helpers/sleep';

const getLabels = async():Promise<Labels[]>=>{
    await sleep(3);
      const {data} = await githubAPI.get<Labels[]>("/labels");            
      return data;
    }    

export const useLabels = ()=>{
    const labelQuery = useQuery(['labels'],getLabels,{refetchOnWindowFocus:true})
    return {
        labelQuery
    }

};