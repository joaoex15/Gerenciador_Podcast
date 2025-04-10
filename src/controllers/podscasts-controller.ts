import { IncomingMessage, ServerResponse } from "http";
import { PodcastTransferModel } from "../models/PodcastTransferModel";
import { serviceFilterEpisodes } from '../services/filter-episodes-services';
import { serviceListEpisodes } from '../services/list-episodes-service';
export  const getListEpisodes=async (req:IncomingMessage,res:ServerResponse)=>{
    const content:PodcastTransferModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, {"content-type":"application/json"});
    res.write(JSON.stringify (content.body))
    res.end()
};



export const getfilterEPISODES = async (req: IncomingMessage, res: ServerResponse) => {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const podcastName = url.searchParams.get("p") || "";

    console.log("🔍 Nome do podcast recebido:", podcastName); // debug!

    const content:PodcastTransferModel = await serviceFilterEpisodes(podcastName);

    res.writeHead(content.statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content.body));
};
