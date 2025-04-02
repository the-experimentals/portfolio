import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptopCode, faGears, faAddressBook, faFile } from '@fortawesome/free-solid-svg-icons';

const SideBar: FC = () => (
  <Grid className={`${styles.sidebar}`} >
    <ul className="centralize">
      <li className={`${styles.selected}`}>
        <Grid container gap={4}>
          <Grid sx={{position:'relative'}}>
            <FontAwesomeIcon icon={faBriefcase} style={{fontSize:'2rem'}} className="centralize" />                
          </Grid>
          <Grid>
            <Typography variant="h4">Work Experience</Typography>
          </Grid>
        </Grid>
      </li>
      <li>
      <Grid container gap={4}>
          <Grid sx={{position:'relative'}}>
            <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'2rem'}} className="centralize" />                
          </Grid>
          <Grid>
            <Typography variant="h4">Projects</Typography>
          </Grid>
        </Grid>
      </li>
      <li>
      <Grid container gap={4}>
          <Grid sx={{position:'relative'}}>
            <FontAwesomeIcon icon={faGears} style={{fontSize:'2rem'}} className="centralize" />                
          </Grid>
          <Grid>
            <Typography variant="h4">Skills</Typography>
          </Grid>
        </Grid>
      </li>
      <li>
      <Grid container gap={4}>
          <Grid sx={{position:'relative'}}>
            <FontAwesomeIcon icon={faAddressBook} style={{fontSize:'2rem'}} className="centralize" />                
          </Grid>
          <Grid>
            <Typography variant="h4">Contact</Typography>
          </Grid>
        </Grid>
      </li>
      <li>
      <Grid container gap={4}>
          <Grid sx={{position:'relative'}}>
            <FontAwesomeIcon icon={faFile} style={{fontSize:'2rem'}} className="centralize" />                
          </Grid>
          <Grid>
            <Typography variant="h4">Resume</Typography>
          </Grid>
        </Grid>
      </li>
    </ul>
  </Grid>
);

export default SideBar;
