import { Add, Delete } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Checkbox, Fab, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Employee() {
  const navigate = useNavigate()
  const [employeeList, setemployeeList] = useState(JSON.parse(localStorage.getItem("employeeList")) || [])
  const [selectedEmployee, setselectedEmployee] = useState([])

  useEffect(() => {
    if(localStorage.getItem("token") == null){
        navigate("/login");
    }
    if(employeeList.length === 0){
      fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("employeeList", JSON.stringify(json));
        setemployeeList(json);
      })
    }
  }, [])

  const onCheck = (event) => {
    if(event.target.checked){
      setselectedEmployee([...selectedEmployee, event.target.value]);
    }
    else{
      const tempSelectedEmployee = selectedEmployee.filter(id => id !== event.target.value)
      setselectedEmployee(tempSelectedEmployee);
    }
  }

  const onDelete = () => {
    const filteredEmployeeList = employeeList.filter((employee) => !selectedEmployee.includes(String(employee.id)))
    localStorage.setItem("employeeList",JSON.stringify(filteredEmployeeList))
    setemployeeList(filteredEmployeeList);
  }

  return (
    <React.Fragment>
      <Card>
        <Grid 
          container
          spacing={4}
          direction="row"
          justify="centre"
          alignItems="center"
        >
          {employeeList.map(employee => {
            return (
              <Grid item xs={3} key={employee.id}>
                <Card sx={{ minWidth: 275 }} onClick={() => navigate("/employee/"+ String(employee.id))}>
                  <CardActionArea>
                    <CardHeader />
                    <CardMedia justify="centre">
                      <img alt={employee.login} src={employee.avatar_url} height="400" width="400"/>
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h4" color="inherit" >
                          {employee.login}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <FormControlLabel
                  label = "Select to remove"
                  control = {
                  <Checkbox
                    key={employee.id}
                    value={employee.id}
                    onChange={onCheck}
                    inputProps={{ 'aria-label': 'controlled' }}>
                  </Checkbox>}
                >
                </FormControlLabel>
              </Grid>
            );
          })}
        </Grid>
        {selectedEmployee.length > 0 && <Fab 
          style = {{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
          }}
          size="large"
          color="secondary"
          aria-label="delete"
          onClick={onDelete}
        >
          <Delete />
        </Fab>}
        <Fab 
          style = {{
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 100,
            left: 'auto',
            position: 'fixed',
          }}
          size="large"
          color="secondary"
          aria-label="delete"
          onClick={() => navigate("/employeeadd")}
          >
          <Add />
        </Fab>
    </Card>
    </React.Fragment>
  );
}

export default Employee;