import { useEffect, useRef, useState } from "react";
import { mortyApi } from "../api/mortyApi";
import { CharacterPaginatedResponse, Character } from '../interfaces/appInterfaces';

export const useCharacterSearch = (search:string) => {

    const [isLoading, setIsLoading] = useState(true);

    const [characters, setCharacters] = useState<Character[]>([]);
    
    const nextPageUrl = useRef('');

    const searchCharacters = () => {
        nextPageUrl.current = 'https://rickandmortyapi.com/api/character/?name=' + search;
        loadCharacters();
    }
    
    const loadCharacters = async () => {
        if(nextPageUrl.current === null)
            return;

        setIsLoading(true);
        const resp = await mortyApi.get<CharacterPaginatedResponse>(nextPageUrl.current);

        const data = resp.data;
        nextPageUrl.current = data.info.next;
        
        setCharacters( [ ...characters, ...data.results ] );
        setIsLoading(false);
    }

    useEffect(()=>{
        searchCharacters();
    },[]);

    return {
        isLoading,
        characters,
        loadCharacters,
    }
}
