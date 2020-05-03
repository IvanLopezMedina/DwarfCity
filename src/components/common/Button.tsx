import React from 'react';
import Button from '@material-ui/core/Button';

export default function DisableElevation({text = 'Enter'}) {
  return (
    <Button variant="contained" color="primary" disableElevation fullWidth={true}>
      {text}
    </Button>
  );
}
