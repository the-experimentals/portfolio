import { Grid } from "@mui/material";
import styles from './page.module.scss'
import CoverPage from "./components/CoverPage/CoverPage";
import ContentPage from "./components/ContentPage/ContentPage";

export default function Home() {
  return (
    <Grid container className={styles.pages}>
      <Grid size={12}  className={styles.page}>
        <CoverPage />
      </Grid>
      <Grid size={12} className={styles.page}>
        <ContentPage />
      </Grid>
    </Grid>
  );
}
