import { Fab, Grid, Typography } from "@mui/material";
import styles from './page.module.scss'
import data from './data/portfolio-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faBars, faBriefcase, faFile, faGears, faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import CoverPage from "./components/CoverPage/CoverPage";

export default function Home() {
  return (
    <Grid container className={styles.pages}>
      <Grid size={12}  className={styles.page}>
        <CoverPage />
      </Grid>
    </Grid>
  );
}
