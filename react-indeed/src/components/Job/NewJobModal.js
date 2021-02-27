import React , {useState} from 'react';
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogActions, DialogContent, makeStyles, Typography, Button, IconButton } from '@material-ui/core';
import {Close as CloseIcon} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    skillsChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff",
        },
    },
    included: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    }
}));

export default (props) => {
    const [jobDetails, setJobDetails] = useState({
        title: "UI Developer",
        type: "Full time",
        companyName: "",
        companyURL: "",
        location: "Remote",
        link: "",
        description: "",
        skills: [],
    });

    const handleChange = e => {
        e.persist();
        setJobDetails((oldState) => ({ ...oldState, [e.target.name]: e.target.value, }));
    };

    const addRemoveSkill = (skill) => 
      jobDetails.skills.includes(skill)
        ? setJobDetails((oldState => ({
              ...oldState, 
              skills: oldState.skills.filter((s) => s !== skill),
          })),
        : setJobDetails(oldState => ({
            ...oldState,
            skills: oldState.skills.concat(skill),
          }));
    const handleSubmit = async () => {
        await props.postJob(jobDetails);
    }

    const classes = useStyles();
    const skills = ["React","Python","DjangoORM","Node", "NoSql", "Sql", "AWS", "Vue","Git"];
    console.log(jobDetails);
    return(
        <Dialog open={true} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-betwwen" alignItems="center">
                    Post Job
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FilledInput onChange={handleChange} name="title" value={jobDetails.title} autoComplete="off" placeholder="Job title*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} fullWidth name="type" value={jobDetails.type} disableUnderline variant="filled" defaultValue="">
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Work from home">Contract</MenuItem>
                        </Select>
                    </Grid> 
                    <Grid item xs={6}>
                      <FilledInput onChange={handleChange} autoComplete="off" name="companyName" value={jobDetails.companyName} placeholder="Company name*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput onChange={handleChange} autoComplete="off" name="companyURL" value={jobDetails.companyURL} placeholder="Company URL*" disableUnderline fullWidth />
                    </Grid>  
                    <Grid item xs={6}>
                        <Select onChange={handleChange} fullWidth  name="location" value={jobDetails.location} disableUnderline variant="filled" defaultValue="">
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-Office</MenuItem>
                        </Select>
                    </Grid> 
                    <Grid item xs={6}>
                      <FilledInput onChange={handleChange} name="link" value={jobDetails.link} placeholder="Job link" disableUnderline fullWidth />
                    </Grid> 
                    <Grid item xs={12}>
                      <FilledInput  onChange={handleChange} name="description" value={jobDetails.description} placeholder="Job description*" disableUnderline fullWidth multiline rows={5}/>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills:</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (
                            <Box onClick={() => addRemoveSkill(skill)} className={`${classes.skillsChip} ${jobDetails.skills.includes(skill) && classes.included}`} key={skill}>{skill}</Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" alignItems="center" display="flex" width="100%" justifyContent="space-between">
                    <Typography variant="caption">*Required fields</Typography>
                    <Button onClick={handleSubmit} variant="contained" disableElevation color="primary">Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
};