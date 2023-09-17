import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice';
import Masonry from 'react-masonry-css'
import '../Home/styles.css'
import { Link } from 'react-router-dom';
function Home() {
    const chars = useSelector((state) => state.characters.items);
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(fetchCharacters());
    }, [dispatch])
   
  return (
   <div>
    <h1>characters</h1>
    
     <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
    {React.Children.toArray(
      chars.map((character) => (
        <div>
          <Link to={`/char/${character.char_id}`}>
          <img 
            src={character.img.split("").slice(43).join("").toString()} 
            alt={character.name}
            className='character-img'
          />
          <div className='char_name'>{character.name}</div>
          </Link>
        </div>
      ))
    )

    }
</Masonry>

   </div>
     
    
  
     )
   
}

export default Home