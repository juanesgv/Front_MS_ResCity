import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars({type, message,alerTitle,show}) {
  const [open, setOpen] = React.useState(show);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'right'}}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          <AlertTitle>{alerTitle}</AlertTitle>
              {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

