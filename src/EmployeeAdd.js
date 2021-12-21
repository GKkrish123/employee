import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button,
    Card
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SampleValues = {
    "node_id": "MDQ6VXNlcjE=",
    "gravatar_id": "",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "site_admin": false
}


function EmployeeAdd() {
    const navigate = useNavigate()
    const [Name, setName] = useState("");
    const [avatarURL, setavatarURL] = useState("");
    const [githubURL, setgithubURL] = useState("");
    const [orgURL, setorgURL] = useState("");

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
    
    const onAdd = () => {
        const employeeDetails = {
            ...SampleValues,
            id: Math.random(), // FOR SAMPLE PURPOSE
            login: Name,
            avatar_url: avatarURL,
            url: githubURL,
            organizations_url: orgURL
        }
        const employeeList = JSON.parse(localStorage.getItem("employeeList")) || []
        employeeList.unshift(employeeDetails)
        localStorage.setItem(
            "employeeList",
            JSON.stringify(employeeList)
        )
        navigate("/employee")
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
                        <TextField label="Name" onChange={onnameChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Avatar URL" onChange={onavatarURLChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Github URL" onChange={ongithubURLChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Organization URL" onChange={onorgURLChange}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={onAdd}> Submit </Button>
                    </Grid>
                    <Grid item xs={12}/>
                    </Grid>
                </Paper>
            </Card>
        </React.Fragment>
    )
}

export default EmployeeAdd
