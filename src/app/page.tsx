import { Grid2, Typography } from "@mui/material";
import styles from './page.module.scss'
import data from './data/portfolio-data'

export default function Home() {
  return (
    <Grid2 container>
      <Grid2 sx={{ width: '950px', margin: 'auto'}} container className="centralize">
        <Grid2 size={6} sx={{padding:'1rem'}}>
          <div className={styles.imageWrapper}>
          </div>
        </Grid2>
        <Grid2 size={6} sx={{ padding:'1rem'}} className={styles.floatAnimate}>
          <Typography variant="h2">{data.name}</Typography>
          <Typography variant="subtitle2">{data.role}</Typography>

          <div style={{marginTop: '1rem'}}>
            <Typography sx={{lineHeight:'1.8'}}>{data.about[0]}</Typography>
          </div>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
