import axios from 'axios'

export const getHomeScreenPodcast = async (collectionId) => {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=278981407,863897795,1191775648,582272991,1200361736,1322200189,1379959217,998568017,1081244497,1334878780,316045799,480486345,265307784,1057255460,1077418457,268213039,1258635512&country=US&media=podcast&entity=podcastEpisode&limit=0`)
    return response.data
}