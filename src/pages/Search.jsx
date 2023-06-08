import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import { fetchPhotos, selectPages } from "../features/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos } from "../features/search/searchSlice";
import Image from "../components/image";
import { Box, Pagination, TextField, ThemeProvider } from "@mui/material";
import { paletaPagination } from "../styles/paletaPagination";
import { darkTheme } from "../styles/darkTheme";
import {TopBar} from '../components/TopBar';
import { SearchStyle } from "./SearchStyle";
import useMediaQuery from '@mui/material/useMediaQuery';



export function Search() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const photosRes = useSelector(selectPhotos);
  let totalPages = useSelector(selectPages);

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
    dispatch(fetchPhotos({ query: query, currentPage: currentPage }));
  };
  const handleWhileSearching = (e) => {
    setCurrentPage(1);
    setQuery(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchPhotos({ query: query, currentPage: 1 }));
  }, [query, dispatch]);

  const small = useMediaQuery('(min-width:300px)');
  const medium = useMediaQuery('(min-width: 600px');
  const large = useMediaQuery('(min-width: 1000px');

  let size = ImageList.cols
    if(small === true){
      size = 1
    }
    if(medium === true){
      size = 3
    }
    if(large === true){
      size = 4
    }
  
  



  return (
    <>
      <TopBar />
      <ThemeProvider theme={darkTheme}>
        <Box width="94%" display="block" sx={{ marginBottom: "30px" }}>
          <Box justifyContent="right" display="flex">
            <TextField
              id="standard-basic"
              onChange={handleWhileSearching}
              label="search your images"
              size="small"
            />
          </Box>
        </Box>
      </ThemeProvider>
      
      <ImageList sx={SearchStyle} cols={size} gap={16}>
        {photosRes &&
          photosRes.length &&
          photosRes.map((item, i) => <Image key={i} item={item} />)}
      </ImageList>
     
      <ThemeProvider theme={paletaPagination}>
        <Pagination
          count={totalPages}
          page={parseInt(currentPage)}
          onChange={(e, value) => handlePageChange(e, value)}
          variant="outlined"
          color="primary"
          sx={{ width: "fit-content", margin: "0 auto 5px auto"}}
        />
      </ThemeProvider>
    </>
  );
}