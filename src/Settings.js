import { Button, Card, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FIRSTNAME, IMAGE_URL, LASTNAME } from './Constants';

function Settings() {
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem("token")){
        navigate("/login");
    }
  }, [])

  const onLogout = () => {
    localStorage.removeItem("token")
    navigate("/login");
  }

  return (
    <React.Fragment>
      <Card justify={'center'}>
      <Paper elevation={12} justify={'center'}>
        <Grid
          container
          spacing={5}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}/>
          <Grid item xs={12}>
              <img alt={"sample"} src={IMAGE_URL} />
          </Grid>
          <Grid item xs={12}>
              <Typography variant="body1" color="inherit">
                Firstname : {FIRSTNAME}
              </Typography>
          </Grid>
          <Grid item xs={12}>
              <Typography variant="body1" color="inherit">
                Lastname : {LASTNAME}
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onLogout}> Logout </Button>
          </Grid>
          <Grid item xs={12}/>
       </Grid>
      </Paper>
      </Card>
    </React.Fragment>
  );
}

export default Settings;