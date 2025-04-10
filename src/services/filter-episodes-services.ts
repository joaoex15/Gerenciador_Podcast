import { PodcastTransferModel } from "../models/PodcastTransferModel";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<PodcastTransferModel> => {
    // Garante que não passe "null" pro filtro
    const safeName = podcastName ?? "";
    let reponseFormat:PodcastTransferModel ={
        statusCode: 0,
        body:[],
    };
    const queryString=podcastName?.split("?p=")[1] ||"";
    const data = await repositoryPodcast(safeName);
    
reponseFormat.statusCode=data.length!==0? statusCode.OK :statusCode.NoContent
  
reponseFormat.body=data
    return reponseFormat;
};
