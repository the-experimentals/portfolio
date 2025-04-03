'use client';

import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import profileImage from '../../assets/profile-image.jpeg';
import SideBar from './SideBar/SideBar';
import { useAtom } from 'jotai';
import { sideBarAtom } from './SideBar/atoms/SideBarAtom';
import WorkExperience from './WorkExperience/WorkExperience';

const ContentPage: FC = () => {
  
  const [sideBar] = useAtom(sideBarAtom);

  return (
    <Grid sx={{ height:'100%', width:'100%'}} container direction="column">
      <Grid sx={{padding:'20px 30px'}} container gap={2}>
          <Grid>
              <img src={profileImage.src} alt='profile image' style={{height:'70px', borderRadius:'50%', boxShadow:'5px 5px 10px var(--foreground)'}} />
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
      <Grid size="grow" container>
        <SideBar />
        <Grid sx={{border:'1px solid red'}} size='grow'>
          {
            sideBar.workExperience && 
            <WorkExperience />
          }
        </Grid>
      </Grid>
    </Grid>
  )
};

export default ContentPage;
