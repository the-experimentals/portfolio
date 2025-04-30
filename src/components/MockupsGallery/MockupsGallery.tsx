import { FC } from 'react';
import styles from './MockupsGallery.module.scss';
import { Grid, Typography, useTheme } from '@mui/material';

export const MockupsGallery: FC = () => {

  const theme = useTheme();

  return (
    <Grid size={12} container className={styles.MockupsGallery} data-testid="MockupsGallery" sx={{
      "--background-color": theme.palette.background.default,
    }}>
      <header>
        <Typography variant="h2" className={styles.title} fontWeight={400}>
          Mockups Gallery
        </Typography>
        <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
          Some of mockups on which I worked.
        </Typography>
      </header>

      <Grid size={12} className={styles.galleryFrameCover}>
        <iframe src='https://mockups.itsbibeksaini.com/#/' className={`${styles.galleryFrame}`} />
      </Grid>
    </Grid>
  )
}

