import { useEffect, useState } from 'react'

const useDebounceValue = ( input:string = '', time:number = 500 ) => {

    const [debounceValue, setDebounceValue] = useState(input);

    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setDebounceValue( input );
        }, time );
        
        return () => {
            clearTimeout( timeOut );
        }
    }, [input])

    return {
        debounceValue
    }
}

export default useDebounceValue
