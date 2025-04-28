import { FC } from 'react';
import styles from './CoverPage.module.scss';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import profileImage from '../../assets/profile-image.jpeg';

export const CoverPage: FC = () => {
  
  const theme = useTheme()

  return(
    <Grid container className={`${styles.CoverPage}`} sx={{
      "--primary-color": theme.palette.primary.main,
    }}
    data-testid='CoverPage'>
      <Grid container className={`centralize ${styles.coverPageRow}`}>
        {/* Profile Image */}
        <Grid className={`${styles.profileImageCover} centralize`}>
          <img src={profileImage} alt="Profile" className={`${styles.profileImage}`} data-testid="profile-image" />
        </Grid>

        {/* Profile Summary */}
        <Grid className={`${styles.profileSummaryCover}`}>
          <Grid className={`${styles.profileSummary}`}>
          <Typography variant='h6'>Hi, my name is</Typography>
              <Typography variant='h3'>Bibek Saini</Typography>
              <Typography variant='body1' sx={{mt:1.5}}>I am a passionate software engineer who love to learn, experiment and build something that
              creates value.</Typography>
              <Typography variant='body1' sx={{mt:1.5}}>I specialise in designing architecture, developing seamless user experiences, and handling end-to-
end deployment. Passionate about solving complex problems, I work across the front-end and
back-end technologies — Java, .NET, Kotlin, Angular, React, Spring Boot, Docker, Kubernetes, and
Azure, to name just a few. Whether it's a single line of clean code or performance optimisation, my
ultimate aim is always to build trusted systems with real value.</Typography>
              <Typography variant='body1' sx={{mt:1.5}}>I am a strong advocate of agile methodologies and DevOps practices, and I am always looking for
              opportunities to learn new technologies and improve my skills.</Typography>
          </Grid>
        </Grid>        
      </Grid>
    </Grid>
  )
};
