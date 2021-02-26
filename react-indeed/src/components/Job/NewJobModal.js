import React from 'react';
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
}));

export default (props) => {
    const classes = useStyles();
    const skills = ["React","Python","DjangoORM","Node", "NoSql", "Sql", "AWS", "Vue","Git"];
    return(
        <Dialog open={false} fullWidth>
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
                      <FilledInput placeholder="Job title*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Full time">
                            <MenuItem value="Full time">Full time</MenuItem>
                            <MenuItem value="Part time">Part time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Work from home">Contract</MenuItem>
                        </Select>
                    </Grid> 
                    <Grid item xs={6}>
                      <FilledInput placeholder="Company name*" disableUnderline fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <FilledInput placeholder="Company URL*" disableUnderline fullWidth />
                    </Grid>  
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline variant="filled" defaultValue="Remote">
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In-office">In-Office</MenuItem>
                        </Select>
                    </Grid> 
                    <Grid item xs={6}>
                      <FilledInput placeholder="Job link" disableUnderline fullWidth />
                    </Grid> 
                    <Grid item xs={12}>
                      <FilledInput placeholder="Job description*" disableUnderline fullWidth multiline rows={5}/>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills:</Typography>
                    <Box display="flex">
                        {skills.map((skill) => (
                            <Box className={classes.skillsChip} key={skill}>{skill}</Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" alignItems="center" display="flex" width="100%" justifyContent="space-between">
                    <Typography variant="caption">*Required fields</Typography>
                    <Button variant="contained" disableElevation color="primary">Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
};