import { useState } from 'react'; 
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download'
import ChildrenModal from './childrenModal';

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

export default function TransitionsModal(props) {
  const [open2, setOpen2] = useState(false);
   const handleClose2 = () => setOpen2(false);
   const handleOpen2 = () => {
        setOpen2(true)
    };
    const downloadImage = () => {
        fetch(props.data.urls.full)
          .then(response => response.blob())
          .then(blobObject => {
            const blob = window.URL.createObjectURL(blobObject)
            const anchor = document.createElement('a')
            anchor.style.display = 'none'
            anchor.href = blob
            anchor.download = `${props.data.id}.png`
            document.body.appendChild(anchor)
            anchor.click()
            window.URL.revokeObjectURL(blob)
          })
          .catch(() => console.log("The image couldn't be downloaded."))
      }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Información: 

            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Descripción: {props.data.description}
                <IconButton sx={{ color: '#2B4865' }}>
                    <EditIcon onClick={handleOpen2}/>
                </IconButton> 
                <br/>
                Width: {props.data.width}<br/>
                Height: {props.data.height}<br/>
                Likes: {props.data.likes}<br/>
                Date saved: {new Date(props.data.dateImported).toLocaleDateString('en-US')}<br/>
                
            
            </Typography>
            Download here 
            <IconButton
                        sx={{ color: '#2B4865' }}
                        onClick={downloadImage}
                        >
                        
                    <DownloadIcon />
                </IconButton>
            
          </Box>
        </Fade>
      </Modal>
      <ChildrenModal open2={open2} handleClose1={props.handleClose} handleClose2={handleClose2} data={props.data} />
    </div>
    )
    
}