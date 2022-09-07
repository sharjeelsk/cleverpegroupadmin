import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar(props) {

  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={3000}
        onClose={()=>props.setOpen(false)}
        message={props.message}
      />
    </div>
  );
}