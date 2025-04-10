import fs from 'fs';
import path from "path";
import { PodcastModel } from '../models/podcast-model';

const pathData=path.join(__dirname,"../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawedata = fs.readFileSync(pathData, "utf-8");
    const parsedData = JSON.parse(rawedata);

    // Transforma em array se for um único objeto
    let jsonFile: PodcastModel[] = Array.isArray(parsedData) ? parsedData : [parsedData];

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
};
