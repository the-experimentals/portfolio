import { FC } from 'react';
import styles from './MockupsGallary.module.scss';
import { Grid, Typography, useTheme } from '@mui/material';

export const MockupsGallary: FC = () => {

  const theme = useTheme();

  return (
    <Grid size={12} container className={styles.MockupsGallary} data-testid="MockupsGallary" sx={{
      "--background-color": theme.palette.background.default,
    }}>
      <header>
        <Typography variant="h2" className={styles.title} fontWeight={400}>
          Mockups Gallary
        </Typography>
        <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
          Sone of mockups on which I worked.
        </Typography>
      </header>

      <Grid size={12} className={styles.gallaryFrameCover}>
        <iframe src='https://mockups.itsbibeksaini.com/#/' className={`${styles.gallaryFrame}`} />
      </Grid>
    </Grid>
  )
}

