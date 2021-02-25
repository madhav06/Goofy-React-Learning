import React from 'react';
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';


export default (props) => {
    return(
        <Dialog open={true} fullWidth>
            <DialogTitle>Post Job</DialogTitle>
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
            </DialogContent>
        </Dialog>
    );
};