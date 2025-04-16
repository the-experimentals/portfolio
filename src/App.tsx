import { Grid, Typography } from "@mui/material"
import styles from './App.module.scss'
import { WorkExperiencePage, CoverPage } from "./components"

const App = () => {
  return(
    <Grid container className={`max-supported-width ${styles.portfolio}`}>
      <CoverPage/>
      <WorkExperiencePage/>      
      <Grid size={12} sx={{padding:'20px 30px'}}>
        <Typography variant="subtitle2" component="h1" sx={{textAlign:'center'}}>
          &copy; {new Date().getFullYear()}  - All rights reserved.
        </Typography>
        <Typography variant="subtitle2" component="h1" sx={{textAlign:'center'}}>
          Designed with React and Material UI (MUI).
        </Typography>
      </Grid>
    </Grid>
  )
}

export default App
