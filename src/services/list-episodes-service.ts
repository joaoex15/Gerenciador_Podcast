import { PodcastTransferModel } from "../models/PodcastTransferModel";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { statusCode } from "../utils/status-code";

export const serviceListEpisodes=async ():Promise<PodcastTransferModel>=>{


  let reponseFormat:PodcastTransferModel ={
    statusCode: 0,
    body:[],
};


    const data= await repositoryPodcast()
    reponseFormat.statusCode=data.length!==0? statusCode.OK :statusCode.NoContent

    reponseFormat.body=data
    return reponseFormat;
};