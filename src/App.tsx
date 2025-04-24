import { Grid, Typography } from "@mui/material"
import styles from './App.module.scss'
import { WorkExperiencePage, CoverPage, ProjectsPage } from "./components"
import SkillsPage from "./components/SkillsPage/SkillsPage"
import ContactsPage from "./components/ContactsPage/ContactsPage"

const App = () => {
  return(
    <Grid container className={`max-supported-width ${styles.portfolio}`}>
      <CoverPage/>
      <WorkExperiencePage/>      
      <ProjectsPage/>
      <SkillsPage/>
      <ContactsPage/>
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
