import React, { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context'
import { SearchResults } from './SearchResults'

export const SearchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>()
    const {searchPlaceByTerm} = useContext(PlacesContext)

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current)
            clearTimeout(debounceRef.current);
        
        debounceRef.current = setTimeout(() => {
            searchPlaceByTerm(event.target.value)
        }, 350)
    }

  return (
    <div className='search-container'>
        <input
            type='text'
            className='form-control'
            placeholder='Buscar lugar...'
            onChange={ onQueryChange }
        />
        <SearchResults/>
    </div>
  )
}
