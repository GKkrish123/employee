import { CancelOutlined, Edit } from '@mui/icons-material';
import { Button, Card, CardMedia, Fab, Grid, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeByID() {
  const { employeeid } = useParams();
  const navigate = useNavigate()
  const [employeeDetails, setemployeeDetails] = useState({})
  const [Name, setName] = useState("");
  const [avatarURL, setavatarURL] = useState("");
  const [githubURL, setgithubURL] = useState("");
  const [orgURL, setorgURL] = useState("");
  const [isEditable, setisEditable] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem("token") == null){
      navigate("/login")
    }
    JSON.parse(localStorage.getItem("employeeList") || "[]").filter(employee => String(employee.id) === String(employeeid)).map(employee => setemployeeDetails(employee));
  }, [])

  const onnameChange = (event) => {
    setName(event.target.value);
  }

  const onavatarURLChange = (event) => {
      setavatarURL(event.target.value);
  }

  const ongithubURLChange = (event) => {
      setgithubURL(event.target.value);
  }

  const onorgURLChange = (event) => {
      setorgURL(event.target.value);
  }

const onSubmit = () => {
    const updatedEmployeeDetails = {
        ...employeeDetails,
        login: Name || employeeDetails.login,
        avatar_url: avatarURL || employeeDetails.avatar_url,
        url: githubURL || employeeDetails.url,
        organizations_url: orgURL || employeeDetails.organizations_url
    }
    
    const employeeList = (JSON.parse(localStorage.getItem("employeeList")) || []).filter((employee) => String(employeeDetails.id) !== String(employee.id))
    employeeList.unshift(updatedEmployeeDetails)
    localStorage.setItem(
        "employeeList",
        JSON.stringify(employeeList)
    )
    navigate("/employee")
}
  
  return (
    <React.Fragment>
      {Object.keys(employeeDetails).length === 0 ?
      <Card>
         <CardMedia> NO DATA FOUND FOR THE EMPLOYEE ID </CardMedia>
      </Card>
      :
      <Card justify={'center'}>
        <Paper elevation={12} justify={'center'}>
            <Grid
            container
            spacing={8}
            direction={'column'}
            >
            <Grid item xs={12}/>
            <Grid item xs={12}>
                <TextField label="Name" value={Name || employeeDetails.login || ""} onChange={onnameChange} disabled={!isEditable} fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Avatar URL" value={avatarURL || employeeDetails.avatar_url || ""} onChange={onavatarURLChange} disabled={!isEditable} fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Github URL" value={githubURL || employeeDetails.url || ""} onChange={ongithubURLChange} disabled={!isEditable} fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Organization URL" value={orgURL || employeeDetails.organizations_url || ""} onChange={onorgURLChange} disabled={!isEditable} fullWidth></TextField>
            </Grid>
            {isEditable && <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}> Submit </Button>
            </Grid>}
            <Grid item xs={12}/>
            </Grid>
          <Fab 
            style = {{
              margin: 0,
              top: 'auto',
              right: 20,
              bottom: 600,
              left: 'auto',
              position: 'fixed',
            }}
            size="large"
            color="secondary"
            aria-label="update"
            onClick={() => setisEditable(!isEditable)}
          >
            {!isEditable ? <Edit /> : <CancelOutlined />}
          </Fab>
        </Paper>
      </Card>}
    </React.Fragment>
  );
}

export default EmployeeByID;