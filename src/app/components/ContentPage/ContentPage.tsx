import React, { FC } from 'react';
import styles from './ContentPage.module.scss';
import { Grid, Typography } from '@mui/material';
import  profileImage  from '../../assets/profile-image.jpeg';

interface ContentPageProps {}

const ContentPage: FC<ContentPageProps> = () => (
  <Grid sx={{ height:'100%', width:'100%'}} container direction="column">
    <Grid sx={{padding:'20px 30px'}} container gap={2}>
        <Grid>
            <img src={profileImage.src} style={{height:'70px', borderRadius:'50%', boxShadow:'5px 5px 10px var(--foreground)'}} />
        </Grid>
        <Grid>
          <Typography variant="h4" fontWeight={600}>
            Bibek Saini
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            Senior Full Stack Software Engineer
          </Typography>
        </Grid>
    </Grid>
    <Grid sx={{}} size="grow">

    </Grid>
  </Grid>
);

export default ContentPage;
