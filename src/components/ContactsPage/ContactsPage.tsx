import { FC } from 'react';
import styles from './ContactsPage.module.scss';
import {  Box, Card, CardContent, Grid, IconButton, Typography, useTheme } from '@mui/material';
import contactmeCover from '../../assets/contact-me.svg';
import profileImage from '../../assets/profile-image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import pdfIcon from '../../assets/pdf.svg';
// import wordIcon from '../../assets/word.svg';

const ContactsPage: FC = () => {

  const theme = useTheme();

  const openExternalLink = (evt: React.MouseEvent<HTMLButtonElement>, linkType:string) => {
    evt.preventDefault();

    let URL = '';

    if (linkType === 'github') {
      URL = 'https://github.com/itsbibeksaini/';
    }
    else if (linkType === 'linkedin') {
      URL = 'https://www.linkedin.com/in/itsbibeksaini/';
    }
    else if (linkType === 'facebook') {
      URL = 'https://www.facebook.com/itsbibeksaini/';
    }
    else if (linkType === 'instagram') {
      URL = 'https://www.instagram.com/itsbibeksaini/';
    }
    
    if(URL === '')
      return;

    window.open(URL, '_blank', 'noopener,noreferrer');

  }

  // const openResume = (evt: React.MouseEvent<HTMLElement>, resumeType:string) => {

  //   evt.preventDefault();
  //   let URL = '';
  //   if (resumeType === 'pdf') {
  //     URL = '/src/assets/resume-pdf.pdf';
  //   }
  //   else if (resumeType === 'docx') {
  //     URL = '/src/assets/resume-word.docx';
  //   }

  //   if(URL === '')
  //     return;

  //   const aTag = document.createElement('a');
  //   aTag.href = URL;
  //   aTag.download = `Bibek_Saini_Resume.${resumeType}`;
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // }

  return (
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
          Looking forward to hearing from you!
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
                <Grid size={5.5} className={`${styles.capsule} ${styles.capsuleLeft}`} onClick={(event) => {
                  event.preventDefault();
                  window.location.href = 'sms:+14165599209';
                }}>                
                  <Typography variant="body1" fontWeight={400}>
                    +1 (416) 559-9209
                  </Typography>
                </Grid>

                <Grid size={5.5} className={`${styles.capsule} ${styles.capsuleRight}`} onClick={(event) => {
                  event.preventDefault();
                  window.location.href = 'mailto:itsbibeksaini@gmail.com';
                }}>                  
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    itsbibeksaini@gmail.com
                  </Typography>
                </Grid>
              </Grid>

              {/* <Grid container gap={3} className={`${styles.resumeOptions}`}>
                <Grid size={12}>
                  <Typography variant="h5" className={styles.subTitle} fontWeight={400}>
                    Download my Resume
                  </Typography>
                </Grid>
                <Grid size={3} className={styles.option} onClick={(event) => openResume(event, 'pdf')}>
                  <img src={pdfIcon} style={{width:'100%'}}/>
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    PDF
                  </Typography>
                </Grid>
                <Grid size={3} className={styles.option} onClick={(event) => openResume(event, 'docx')}>
                  <img src={wordIcon} style={{width:'100%'}}/>
                  <Typography variant="body1" className={styles.subTitle} fontWeight={400}>
                    Word
                  </Typography>
                </Grid>
              </Grid> */}

              <Grid container gap={3} className={`${styles.socialIcons}`}>
                <Grid>
                  <IconButton onClick={(event) => openExternalLink(event, 'github')}>
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>    
                <Grid>
                  <IconButton onClick={(event) => openExternalLink(event, 'linkedin')}>
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>
                <Grid>
                  <IconButton onClick={(event) => openExternalLink(event, 'facebook')}>
                    <FontAwesomeIcon icon={faFacebook} style={{fontSize:'2.5rem'}}/>
                  </IconButton>
                </Grid>    
                <Grid>
                  <IconButton onClick={(event) => openExternalLink(event, 'instagram')}>
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
