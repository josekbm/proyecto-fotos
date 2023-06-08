import { useEffect, useState } from 'react'; 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editPhoto } from '../features/favorites/favoritesSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChildrenModal(props) {
    const [edit, setEdit] = useState(false)
    const [descriptionPhoto, setDescriptionPhoto] = useState('')
    const dispatch = useDispatch()

    const handleClickSaveDescription = () => {
         dispatch(editPhoto({ id: props.data.id, descriptionPhoto }));
         setEdit(false);
         props.handleClose2();
         props.handleClose1();
       };

    useEffect(()=>{
        setDescriptionPhoto(props.data.description)
    },[props.data])

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open2}
          onClose={props.handleClose2}
          closeAfterTransition
          
        >
          <Fade in={props.open2}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                  Edit description: 
  
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>

              <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              style={{ width: 400 }}
              value={descriptionPhoto}
              onChange={(e) => setDescriptionPhoto(e.target.value)}
            ></TextareaAutosize>
            <Button
              sx={{
                backgroundColor: "#2B4865",
                color: "white",
                marginTop: "20px",
                ":hover": {
                  backgroundColor: "#256D85",
                  transition: "0.2s ease",
                },
              }}
              onClick={handleClickSaveDescription}
            >
              Click to save
            </Button>
               
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
      )
      
  }