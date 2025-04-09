import { Grid } from "@mui/material"
import CoverPage from "./components/CoverPage/CoverPage"
import styles from './App.module.scss'

const App = () => {
  return(
    <Grid container className={`max-supported-width ${styles.portfolio}`}>
      <CoverPage/>
    </Grid>
  )
}

export default App
