import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async ({query, currentPage}) => {
    const baseUrl = 'https://api.unsplash.com/'
    const apiKey = 'QIxKKFvwU6HuxBdDzElcBSGEvH8k8i1g8wDiTIbBO5Y'
    const photoPerPage = '28';
    let url;
   
    if(query&&query.length){
      url = `${baseUrl}search/photos?query=${query}&page=${currentPage}&client_id=${apiKey}&per_page=${photoPerPage}`
      const response = await fetch(url);
      const json = await response.json();

      return [...json.results,Math.ceil(response.headers.get('X-Total')/photoPerPage)];
    } else {
        url = `${baseUrl}photos/random?client_id=${apiKey}&count=${photoPerPage}`
        const response = await fetch(url);
        const json = await response.json();
        return [...json, Math.ceil(response.headers.get('X-Total')/photoPerPage)]
    }
   
  })

  const searchSlice = createSlice({
    name: 'photos',
    initialState:{
        results:[],
        isLoading: false,
        hasError: false,
        totalPages: 1
    },
    reducers: {
      
    },
    extraReducers(builder) {
      builder
        .addCase(fetchPhotos.pending, (state) => {
          state.isLaoding = true
          state.hasError = false
        })
        .addCase(fetchPhotos.fulfilled, (state, action) => {
          state.isLoading = false
          state.hasError = false
          state.results = action.payload.slice(0,action.payload.length-1)
          state.totalPages=action.payload[action.payload.length-1]?state.totalPages=action.payload[action.payload.length-1]:10
        })
        .addCase(fetchPhotos.rejected, (state) => {
          state.isLoading = false
          state.hasError = true
        })
    }
  })
  
  export default searchSlice.reducer;
  export const selectPhotos = (state) => state.photos.results;
  export const selectPages = (state) => state.photos.totalPages;