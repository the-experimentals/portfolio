import { FC } from 'react';
import styles from './ContactsPage.module.scss';
import {  Box, Card, CardContent, Grid, IconButton, Typography, useTheme } from '@mui/material';
import contactmeCover from '../../assets/contact-me.svg';
import profileImage from '../../assets/profile-image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pdfIcon from '../../assets/pdf.svg';
import wordIcon from '../../assets/word.svg';

const ContactsPage: FC = () => {

  const theme = useTheme();

  return(
    <Grid size={12} container className={styles.ContactsPage} data-testid="ContactsPage" sx={{
      "--background-color": theme.palette.background.default,
    }}>
      <header>
      <Typography variant="h2" className={styles.title} fontWeight={400}>
        Contact me
      </Typography>
      <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </Typography>
      </header>

      <Grid size={12} className={styles.contactCover}>
        <img src={contactmeCover} style={{width:'900px'}} />
        <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
          Have some questions or just want to say hi? You can either text me or send me an e-mail,
        </Typography>
        <Typography variant="h6" className={styles.subTitle} fontWeight={400}>
          I'll try my best to get back to you.
        </Typography>
        <Typography variant="h6" className={styles.subTitle} fontWeight={400} sx={{ marginTop: '20px'}}>
          Looking forward to hear from you!
        </Typography>        
      </Grid>

      <Grid size={12} container className={styles.profileCardCover}>
        <Grid className={styles.profileCard}>
          <Card sx={{ borderBottom:'5px solid' }}>
            <CardContent sx={{textAlign:'center'}}>
              <Box className={styles.profileImageCover}>
                <img src={profileImage} style={{width:'100%', borderRadius:'50%'}} />
              </Box>

              <Typography variant="h3" fontWeight={400} sx={{ marginTop: '20px'}}>
                Bibek Saini
              </Typography>
              <Typography variant="h6" fontWeight={400}>
                Senior Full Stack Software Engineer
              </Typography>

              <Typography variant="body1" sx={{marginTop:'1rem'}} fontWeight={400}>
                Passionate software engineer who love to learn, experiment and build something that creates value.
              </Typography>

              <Grid container size={12} gap={1} className={styles.contactCapsule}>
                <Grid size={5.5} className={`${styles.capsule} ${styles.capsuleLeft}`}>                  
                  <Typography variant="body1" fontWeight={400}>
                    +1 (416) 559-9209
                  </Typography>
                </Grid>

                <Grid size={5.5} className={`${styles.capsule} ${styles.capsuleRight}`}>                  
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    itsbibeksaini@gmail.com
                  </Typography>
                </Grid>
              </Grid>

              <Grid container gap={3} className={`${styles.resumeOptions}`}>
                <Grid size={12}>
                  <Typography variant="h5" className={styles.subTitle} fontWeight={400}>
                    Download my Resume
                  </Typography>
                </Grid>
                <Grid size={3} className={styles.option}>
                  <img src={pdfIcon} style={{width:'100%'}}/>
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    PDF
                  </Typography>
                </Grid>
                <Grid size={3} className={styles.option}>
                  <img src={wordIcon} style={{width:'100%'}}/>
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    Word
                  </Typography>
                </Grid>
              </Grid>

              <Grid container gap={3} className={`${styles.socialIcons}`}>
                <Grid>
                  <IconButton>
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>    
                <Grid>
                  <IconButton>
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>
                <Grid>
                  <IconButton>
                    <FontAwesomeIcon icon={faFacebook} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>    
                <Grid>
                  <IconButton>
                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:'2.5rem'}}/>
                    </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactsPage;
