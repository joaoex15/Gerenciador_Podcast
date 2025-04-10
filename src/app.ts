import * as http from "http";
import { getfilterEPISODES, getListEpisodes } from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app=
async(req: http.IncomingMessage,res: http.ServerResponse)=>{


    const[baseUrl,quryStrings]=req.url?.split("?")??[""]
    
    console.log(baseUrl)
    console.log(quryStrings)
    if(req.method===HttpMethod.GET&& baseUrl===Routes.LIST){
    
        await getListEpisodes(req,res);
    
    }
    if (req.method === HttpMethod.GET && baseUrl?.startsWith(Routes.ESPISODE)) {
        await getfilterEPISODES(req, res);
    }
    
    
    }