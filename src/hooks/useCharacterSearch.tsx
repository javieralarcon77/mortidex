import { useEffect, useRef, useState } from "react";
import { mortyApi } from "../api/mortyApi";
import { CharacterPaginatedResponse, Character } from '../interfaces/appInterfaces';

export const useCharacterSearch = (search:string) => {

    const isMounted = useRef(true);

    const [isLoading, setIsLoading] = useState( false );

    const [characters, setCharacters] = useState<Character[]>([]);
    
    const nextPageUrl = useRef('');

    const searchCharacters = () => {
        setCharacters([]);
        if(search === '') return;

        nextPageUrl.current = 'https://rickandmortyapi.com/api/character/?name=' + search;
        loadCharacters();
    }
    
    const loadCharacters = async () => {
        if(nextPageUrl.current === null)
            return;

        setIsLoading(true);
        try{
            const resp = await mortyApi.get<CharacterPaginatedResponse>(nextPageUrl.current);

            const data = resp.data;
            nextPageUrl.current = data.info.next;
            if(isMounted.current){
                setCharacters( [ ...characters, ...data.results ] );
            }
        }catch(e){

        }
        
        setIsLoading(false);
    }

    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }
    },[])

    useEffect(()=>{
        searchCharacters();
    },[ search ]);

    return {
        isLoading,
        characters,
        loadCharacters,
    }
}
