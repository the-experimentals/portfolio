import { Grid } from "@mui/material"
import CoverPage from "./components/CoverPage/CoverPage"
import styles from './App.module.scss'
import WorkExperiencePage from "./components/WorkExperiencePage/WorkExperiencePage"

const App = () => {
  return(
    <Grid container className={`max-supported-width ${styles.portfolio}`}>
      <CoverPage/>
      <WorkExperiencePage/>
    </Grid>
  )
}

export default App
