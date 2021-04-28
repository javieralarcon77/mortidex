import { useEffect, useState } from 'react';
import { Character, Episode } from '../interfaces/appInterfaces';
import { mortyApi } from '../api/mortyApi';

function useCharacterEpisodies(character:Character) {

    const [isLoading, setIsLoading] = useState(true);

    const [episodes, setEpisodes] = useState<Episode[]>([]);

    const loadEpisodes = async () => {

        let promises = character.episode.map( 
            (episode) => {
                return mortyApi.get<Episode>(episode)
            }
        )
        
        const resp = await Promise.all(promises);
        let episodesArray = resp.map( ({ data })=> data );

        setEpisodes( episodesArray );
        setIsLoading(false);

    }

    useEffect(() => {
        loadEpisodes();
    }, [ character ])


    return {
        isLoading,
        episodes
    }
}

export default useCharacterEpisodies
