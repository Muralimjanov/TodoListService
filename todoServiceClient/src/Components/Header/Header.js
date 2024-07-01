import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Header.module.css';

export default function ButtonAppBar() {
  return (
    <Box classes={{root: styles.root}} sx={{ flexGrow: 1 }}>
      <AppBar classes={{root: styles.nav}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Exit</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
