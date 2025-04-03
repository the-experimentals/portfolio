import React, { FC } from 'react';
import styles from './SideBar.module.scss';
import { Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptopCode, faGears, faAddressBook, faFile } from '@fortawesome/free-solid-svg-icons';
import { useAtom } from 'jotai';
import { defaultSideBarAtom, sideBarAtom } from './atoms/SideBarAtom';

const SideBar: FC = () => {

  const [sideBar, setSideBar] = useAtom(sideBarAtom);

  const selectPage = (page: string) => {
    setSideBar({
      ...defaultSideBarAtom,
      [page]: true      
    });
  }

  return (
    <Grid className={`${styles.sidebar}`} >
      <ul className="centralize">
        <li className={sideBar.workExperience ? `${styles.selected}` : ''} onClick= {() => selectPage('workExperience')} >
          <Grid container gap={4}>
            <Grid sx={{position:'relative'}}>
              <FontAwesomeIcon icon={faBriefcase} style={{fontSize:'2rem'}} className="centralize" />                
            </Grid>
            <Grid>
              <Typography variant="h4">Work Experience</Typography>
            </Grid>
          </Grid>
        </li>
        <li className={sideBar.projects ? `${styles.selected}` : ''}  onClick= {() => selectPage('projects')} >
        <Grid container gap={4}>
            <Grid sx={{position:'relative'}}>
              <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'2rem'}} className="centralize" />                
            </Grid>
            <Grid>
              <Typography variant="h4">Projects</Typography>
            </Grid>
          </Grid>
        </li>
        <li className={sideBar.skills ? `${styles.selected}` : ''} onClick= {() => selectPage('skills')} >
        <Grid container gap={4}>
            <Grid sx={{position:'relative'}}>
              <FontAwesomeIcon icon={faGears} style={{fontSize:'2rem'}} className="centralize" />                
            </Grid>
            <Grid>
              <Typography variant="h4">Skills</Typography>
            </Grid>
          </Grid>
        </li>
        <li className={sideBar.contact ? `${styles.selected}` : ''} onClick= {() => selectPage('contact')} >
        <Grid container gap={4}>
            <Grid sx={{position:'relative'}}>
              <FontAwesomeIcon icon={faAddressBook} style={{fontSize:'2rem'}} className="centralize" />                
            </Grid>
            <Grid>
              <Typography variant="h4">Contact</Typography>
            </Grid>
          </Grid>
        </li>
        <li className={sideBar.resume ? `${styles.selected}` : ''} onClick= {() => selectPage('resume')} >
        <Grid container gap={4} >
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
  )
};

export default SideBar;
