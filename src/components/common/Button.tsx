import React from 'react';
import Button from '@material-ui/core/Button';

export default function DisableElevation({text = 'Enter', handleOnClick}) {
  return (
    <Button
      variant="contained"
      onClick={handleOnClick}
      color="primary"
      disableElevation
      fullWidth={true}
    >
      {text}
    </Button>
  );
}
