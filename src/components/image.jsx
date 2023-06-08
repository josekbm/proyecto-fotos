import { ImageListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { addPhoto } from "../features/favorites/favoritesSlice";
import { useState,useEffect } from 'react'; 
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useSelector } from "react-redux";
import { selectFavorites } from '../features/favorites/favoritesSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Image(props){
    const item = props.item
    const dispatch = useDispatch();
    const handleSave = photo => {
        dispatch(addPhoto(photo))
    }
    const photosFavs = useSelector(selectFavorites);
    //cambia el icono cuando se pulsa
    const [icon, setIcon] = useState('')
    
    useEffect(() => {
      const selectedPhoto = photosFavs.find((photo) => photo.id === item.id) 
      if(selectedPhoto){
          setIcon(<FavoriteIcon/>)
      } else {
          setIcon(<FavoriteBorderIcon/>)
      }
    },[photosFavs,item])
    

    return(
    <ImageListItem  >
    <img
      src={`${item.urls.thumb}?w=248&fit=crop&auto=format&h=500`}
      alt={item.alt_description}
      loading="lazy"
    />
  <ImageListItemBar
    sx={{height: 50}}
      title={item.description < 1 ? "Untitled" : item.description}
      actionIcon={

          <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${item.title}`}
          onClick={()=> handleSave(item)}
          >
            {icon}
          </IconButton> }
      
  />
  </ImageListItem>
  )
} 