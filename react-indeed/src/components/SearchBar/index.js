import React from 'react';
import {Box, Button, Select, MenuItem, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        border: '1px solid red',
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
});

export default props => {

    const classes = useStyles()
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}> 
            <Select disableUnderline variant="filled" defaultValue="Full time">
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Work from home">Work from home</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" defaultValue="Remote">
                <MenuItem value="Remote">Bangalore</MenuItem>
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                <MenuItem value="Calcutta">Calcutta</MenuItem>
                <MenuItem value="Calicut">Chandigarh</MenuItem>
                <MenuItem value="Jaipur">Coimbatore</MenuItem>
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
                <MenuItem value="Jaipur">Gurgaon</MenuItem>
                <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                <MenuItem value="Jaipur">Indore</MenuItem>
                <MenuItem value="Jaipur">Jaipur</MenuItem>
                <MenuItem value="Jaipur">Kolkata</MenuItem>
                <MenuItem value="Jaipur">Kochi</MenuItem>
                <MenuItem value="Jaipur">Mumbai</MenuItem>
                <MenuItem value="Jaipur">Noida</MenuItem>
                <MenuItem value="Jaipur">Pune</MenuItem>
                <MenuItem value="Jaipur">Remote</MenuItem>
                
            </Select>
            <Button variant="contained" color="primary" disableElevation> Search </Button>
        </Box>
    )
}