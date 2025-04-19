import{ FC } from 'react';
import styles from './ProjectsPage.module.scss';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, Tooltip, Typography } from '@mui/material';
import { PORTFOLIO_DATA } from '../../data/PortfolioData';

export const ProjectsPage: FC = () => {
  
  return(
    <Grid size={12} container className={`${styles.ProjectsPage}`} data-testid='ProjectsPage'>
      <header>
      <Typography variant="h2" className={styles.title} fontWeight={400}>
        Projects
      </Typography>
      <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
        From architecture to implementation, here&apos;s what I&apos;ve worked on.
      </Typography>
      </header>

      <Grid size={12} container sx={{marginTop:'3rem'}}>

      {
        PORTFOLIO_DATA.projects.map((project, index) => {
          return(
            <Grid size={4} sx={{ padding:'1rem'}} key={index}>
              <Card className={`${styles.projectCard}`}>
                <CardHeader title={project.title} subheader={project.subtitle} avatar={
                  <Avatar>{project.avatar}</Avatar>
                }/>    
                <CardContent>
                  <Typography variant='body2'>
                    {project.description}
                  </Typography>  

                  <Box className={styles.techBox}>
                    <Typography variant='body1'>
                      Technologies used:
                    </Typography>
                    {
                      project.technologies.map((tech, index) => {
                        return(
                          <Tooltip title={tech.tooltip} arrow>
                            <Box key={index} className={styles.techIcon}>
                              <img src={tech.icon}/>
                            </Box>      
                          </Tooltip>    
                        )    
                      })
                    }                    
                  </Box>
                </CardContent>      
              </Card>              
            </Grid>    
          )
        })
      }
      </Grid>
    </Grid>
  )
}
