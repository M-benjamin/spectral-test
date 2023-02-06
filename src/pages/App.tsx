import React, { FC, ReactElement } from 'react';
import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import Home from './Home';
import Logo from '../assets/images/logo.svg';
import dayjs from 'dayjs';

// #353547 grey
// #46b2f6 blue
// #1e1d1e black

const App: FC = (): ReactElement => {
  return (
    <div>
      <AppBar position="static" style={{ background: '#46b2f6' }}>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item md={4} xs={12}>
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 100,
                  }}
                  alt="logo"
                  src={Logo}
                />
              </Box>
            </Grid>
            <Grid item md={4} xs={12} mt={4}>
              <div>
                <b>Heure Paris </b>:
                {dayjs().locale('fr').format('dddd, MMMM D, YYYY h:mm A')}
              </div>
            </Grid>
            <Grid item md={4} xs={12} mt={4}>
              <div>
                <b>Heure Shangai </b>:
                {/* {dayjs().locale('cn').format('dddd, MMMM D, YYYY h:mm A')} */}
                {dayjs()
                  .tz('Asia/Shanghai')
                  .format('dddd, MMMM D, YYYY h:mm A')}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Home />
    </div>
  );
};

export default App;
