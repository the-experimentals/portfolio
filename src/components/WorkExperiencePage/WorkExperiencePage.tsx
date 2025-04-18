import { FC } from 'react';
import styles from './WorkExperiencePage.module.scss';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PORTFOLIO_DATA } from '../../data/PortfolioData'

export const WorkExperiencePage: FC = () => {

  const theme = useTheme()

  return(
  <Grid size={12} className={styles.WorkExperiencePage} data-testid="WorkExperiencePage" sx={{
    '--background-color': theme.palette.background.default,    
    ['--primary-color']: theme.palette.primary.main,
  }}>
    <header>
      <Typography variant="h2"  fontWeight={400}>
        Work Experience 
      </Typography>
      </header>

      <ul className={`${styles.timeline}`}>
        {
          PORTFOLIO_DATA.workExperience.map((work, index) => {
            return (
              <li className={`${styles.event}`} key={index}>
                <div className={`${styles.eventIcon}`}>
                  <FontAwesomeIcon icon={work.icon} />
                </div>

                <Grid container className={`${styles.eventBanner}`}>
                  <Grid>
                    <Typography variant="h4">{work.company}</Typography>
                    <Typography variant="subtitle1">{work.position}</Typography>
                  </Grid>      

                  <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
                    <Box className={`vertical-center`} sx={{right:'0'}}>
                      <Typography variant="body1">{work.startDate} - {work.endDate}</Typography>
                      <Typography variant="body1">{work.mode}</Typography>
                    </Box>
                  </Grid>            
                </Grid>

                <ul className={`${styles.eventList}`}>
                  {
                    work.description.map((desc, index) => {
                      return (
                        <li key={index}>{desc}</li>
                      )
                    })
                  }
                </ul>      
              </li>      
            )
          })
        }        
      </ul>
  </Grid>
  )
}
