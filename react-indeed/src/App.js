import React, {useState, useEffect} from 'react';
import {Box, Grid, ThemeProvider, Typography, CircularProgress} from "@material-ui/core";
import theme from './theme/theme';
import Header from "./components/Header/";
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import {firestore, app} from './firebase/config';


export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async() => {
    const req = await firestore.collection('jobs').orderBy('postedDate', 'desc').get();
    const tempJobs = req.docs.map((job) => ({...job.data(), id: job.id,}));
    console.log(tempJobs);
    setJobs(tempJobs);
    setLoading(false);
  };

  const postJob = async jobDetails => {
    await firestore.collection('jobs').add({ ...jobDetails, postedDate: app.firestore.FieldValue.serverTimestamp()})
  }


  useEffect(() => {
    fetchJobs();

  }, []);

  return <ThemeProvider theme={theme}>
    <Header />
    <NewJobModal postJob={postJob}/>
    <Grid container justify="center"> 
      <Grid item xs={10}>
        <NewJobModal />
        <SearchBar />
        {loading ? (<Box display="flex" justifyContent="center" ><CircularProgress />  </Box>): (jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        )))}
      </Grid>
    </Grid>
  </ThemeProvider>
};
