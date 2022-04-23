import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form'
import uuid from 'react-native-uuid';

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

export default function ModalAdd({handleAdd}) {
 

  const [value,setValue]=useState({ id:uuid.v4(),
    title: "",
    category: "",
    des: ""})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
function handleAddbtn(index){ 
  handleAdd(index)
}

  return (
    <div>
      <Button onClick={handleOpen} sx={{color:'black', fontSize:'1.5rem'}}>+</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           Create a New Skill
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Please fill out the form below.
          </Typography>
            <Form value={value} setValue={setValue} hanadleBtnForm={handleAddbtn} nameBtn='Add'/>  
        </Box>
      </Modal>
    </div>
  );
}
