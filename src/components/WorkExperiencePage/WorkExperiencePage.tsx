import { FC } from 'react';
import styles from './WorkExperiencePage.module.scss';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PORTFOLIO_DATA } from '../../data/PortfolioData'

export const WorkExperiencePage: FC = () => {

  const theme = useTheme()

  const periodCalculator = (startStr: string, endStr: string): string =>{
    const [startMonth, startYear] = startStr.split("/").map(Number);
  const startDate = new Date(startYear, startMonth - 1, 1);

  // Parse end date -> Use current date if "present"
  let endDate: Date;
  if (endStr.toLowerCase() === "present") {
    endDate = new Date(); // Right now: September 2026
  } else {
    const [endMonth, endYear] = endStr.split("/").map(Number);
    endDate = new Date(endYear, endMonth - 1, 1);
  }

  if (startDate > endDate) {
    return "0 months";
  }

  // Calculate difference in total months
  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths += endDate.getMonth() - startDate.getMonth();

  // Apply the 3-month rounding-up rule
  const remainderMonths = totalMonths % 12;
  
  if (remainderMonths >= 9) {
    // Round up to the next full year
    totalMonths += (12 - remainderMonths);
  }

  // Return formatted string based on your rule
  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    return `${years} ${years === 1 ? "year" : "years"}`;
  } else {
    return `${totalMonths} ${totalMonths === 1 ? "month" : "months"}`;
  }
  }

  return(
  <Grid size={12} className={styles.WorkExperiencePage} data-testid="WorkExperiencePage" sx={{
    '--background-color': theme.palette.background.default,    
    ['--primary-color']: theme.palette.primary.main
  }}>
    <header className={`${styles.workExpHeader}`}>
      <Typography variant="h2"  fontWeight={400}>
        Work Experience 
      </Typography>
      <Typography variant='h6'>From Architecture to Execution</Typography>
      </header>

      <ul className={`${styles.timeline}`}>
        {
          PORTFOLIO_DATA.workExperience.map((workExp, index) => {
            return(
              <li key={index}>
                <Box className={`${styles.eventDates}`}>
                  <Typography variant='subtitle2'>{workExp.startDate}</Typography>
                  <Typography>—</Typography>
                  <Typography variant='subtitle2' sx={{marginTop:'0.25rem'}}>{workExp.endDate}</Typography>

                  <Typography sx={{width: '85px', mt:0.75}} className={`${styles.tag}`} variant='subtitle2'>{periodCalculator(workExp.startDate, workExp.endDate)}</Typography>
                </Box>

              <div className={`${styles.eventIcon}`}>
                <FontAwesomeIcon icon={workExp.icon} />
              </div>
                <Box className = {`${styles.event}`}>
                  <Box>
                    <Grid container>
                      <Grid sx={{p:1}}>
                        <Box className={`${styles.companyIconWrapper}`}>
                          <img src={workExp.companyLogo}/>
                        </Box>
                      </Grid>
                      <Grid size="grow">
                        <Typography sx={{fontSize:'clamp(1.75rem, 5vw, 2.5rem)'}}>{workExp.company}</Typography>
                        <Typography variant='subtitle1' className={`${styles.tag}`}>{workExp.position}</Typography>
                        <Typography variant='subtitle2' sx={{mt:0.75}}>{workExp.location}</Typography>
                      </Grid>
                    </Grid>
                    <Divider sx={{margin:'0.5rem 0'}}/>
                    <Box>
                      <Typography variant='body2'>{workExp.description}</Typography>
                      <Grid sx={{ margin:'0.5rem 0', padding:'10px 0'}} container gap={1} justifyContent="center" alignItems="center">
                        {
                          workExp.techSkills.map((skill, index) => {
                            return(
                              <Grid key={index} className={`${styles.tag}`}>
                                <Typography sx={{display:'inline-block'}}>{skill}</Typography>
                              </Grid>
                            )
                          })
                        }
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </li>
            )
          })
        }
        
      </ul>
  </Grid>
  )
}
