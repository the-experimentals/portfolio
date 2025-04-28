import { FC } from 'react';
import styles from './SkillsPage.module.scss';
import { Box, Card, Divider, Grid, Tooltip, Typography } from '@mui/material';
import { PORTFOLIO_DATA } from '../../data/PortfolioData';

export const SkillsPage: FC = () => (
  <Grid size={12} container className={styles.SkillsPage} data-testid="SkillsPage">
    <header>
      <Typography variant="h2" className={styles.title} fontWeight={400}>
        Skills - Fullstack
      </Typography>
      <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
        Skills and technologies I have worked with.
      </Typography>
      </header>

      <Grid size={12} container sx={{marginTop:'3rem', justifyContent:'center', alignItems:'center'}} gap={4}>

        {
          PORTFOLIO_DATA.skills.map((skillCategory) => (
            <Grid size={4} className={styles.skillCategory}>
              <Card sx={{padding:'1rem'}}>
              <Typography variant="h4" className={styles.skillTitle}>
                {skillCategory.title}
              </Typography>    
              <Divider />
              {skillCategory.skills.map((tech) => (
                <Box className={`${styles.skillBox}`}>
                  <Tooltip title={tech.tooltip} arrow>
                    <img src={tech.icon} />
                  </Tooltip>
                </Box>
              ))}
              </Card>
            </Grid>
            
          ))
        }
      </Grid>
  </Grid>
);
