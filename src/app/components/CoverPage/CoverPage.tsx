import React, { FC } from 'react';
import styles from './CoverPage.module.scss';
import { Grid, Typography } from '@mui/material';
import data from '../../data/portfolio-data'

const CoverPage: FC = () => (
  <Grid sx={{ width: '950px', margin: 'auto'}} container className={`centralize`}>
    <Grid size={6} sx={{padding:'1rem'}}>
      <div className={styles.imageWrapper}>
      </div>
    </Grid>
    <Grid size={6} sx={{ padding:'1rem'}} className={styles.floatAnimate}>
      <Typography variant="h2">{data.name}</Typography>
        <Typography variant="subtitle2">{data.role}</Typography>
          <div style={{marginTop: '1rem'}}>
            <Typography sx={{lineHeight:'1.8'}}>{data.about[0]}</Typography>
          </div>
    </Grid>
  </Grid>
);

export default CoverPage;
