import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';

function Home() {
    const chars = useSelector((state) => state.character.items);
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(fetchCharacters());
    }, [dispatch])

  return (
   <div>
    <h1>characters</h1>
     {Array.from(chars).map((character) => (
      <div key={character.id}>

      </div>
     ))
   

     }
   </div>
     
    
  )
}

export default Home