import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button,
  Alert,
  Card
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@mui/icons-material';
import { PASSWORD, USERNAME } from './Constants';

function Login() {
  const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [LoginError, setLoginError] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
        navigate("/employee");
    }
  }, [])

  const onusernameChange = (event) => {
    setusername(event.target.value);
  }

  const onpasswordChange = (event) => {
    setpassword(event.target.value);
  }

  const onSubmit = () => {
    if(username === USERNAME && password === PASSWORD){
        localStorage.setItem("token", JSON.stringify({
            username: username,
            password: password
        }));
        navigate("/employee")
    }
    setLoginError(true);
  }
  
  return (
    <React.Fragment>
      <Card justify={'center'}>
      <Paper elevation={12} justify={'center'}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}/>
          <Grid item xs={12}>
            <TextField label="Username" onChange={onusernameChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={onpasswordChange}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={onSubmit} startIcon={<LoginOutlined />}> Login </Button>
          </Grid>
          <Grid item xs={12}>
            {LoginError &&<Alert severity="error">Invalid Credentials — check it out!</Alert>}
          </Grid>
          <Grid item xs={12}/>
        </Grid>
      </Paper>
      </Card>
    </React.Fragment>
  );
}

export default Login;