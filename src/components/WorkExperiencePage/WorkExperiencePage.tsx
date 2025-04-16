import { FC } from 'react';
import styles from './WorkExperiencePage.module.scss';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptopCode, faStore } from '@fortawesome/free-solid-svg-icons';

export const WorkExperiencePage: FC = () => {

  const theme = useTheme()

  return(
  <Grid size='grow' className={styles.WorkExperiencePage} data-testid="WorkExperiencePage" sx={{
    '--background-color': theme.palette.background.default,    
    ['--primary-color']: theme.palette.primary.main,
  }}>
    <header>
      <Typography variant="h2" className={styles.title} fontWeight={400}>
        Work Experience
      </Typography>
      </header>

      <ul className={`${styles.timeline}`}>
        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
              <FontAwesomeIcon icon={faLaptopCode} />
          </div>

          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">Freelance</Typography>
              <Typography variant="subtitle1">Senior Full Stack Software Engineer.</Typography>
              
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">08/2023 - Present</Typography>
                <Typography variant="body1">Part-time</Typography>
              </Box>
            </Grid>            
          </Grid>

          <ul className={`${styles.eventList}`}>
            <li>Created as well and re-structured/re-invented multiple micro-service application using SpringBoot, ASP.NET as backend framework along with Java, Kotlin, C#.NET as backend languages to write business logic respectively. </li>
            <li>Designed RESTful APIs using REST patterns and used Swagger UI (Open API) to generate API documentation.</li>
            <li>Created gRPC clients and well as servers for internal communication between micro-services.</li>
            <li>Researched and proposed various security by default methods like Spring Security method, claims-based authorization and many more.</li>
            <li>Used Microsoft SQL Server and made Entity Relationship Diagrams (ERD) to visualize business model.</li>
            <li>Utilized various ORM tools like String Data JPA for Spring applications, Entity Framework for .NET applications for storing and accessing the data from database.</li>
            <li>Followed TDD approach while creating micro-services and wrote test cases using jUnit, Mockito and xUnit for .NET applications.</li>
            <li>Developed multiple frontend applications, re-usable components using Angular (8+), React, RxJS, Observables, TypeScript, JavaScript (ES6+).</li>
            <li>Developed UI/UX components using HTML5, CSS3(Bootstrap, Material UI and Animate.css) and CSS preprocessors such as SCSS.</li>
            <li>Deployed Azure Pipelines templates for CI/CD to automate deployment on Azure Kubernetes Services (AKS).</li>
            <li>Created various Kubernetes YAML templates for deploying services to a Kubernetes cluster.</li>
            <li>Used Helm deployment tool for automating creation, packaging, configuration and deployment of applications and services to Kubernetes cluster.</li>            
          </ul>
        </li>

        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
            <FontAwesomeIcon icon={faStore} />
          </div>
          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">Ray's Mini Mart</Typography>
              <Typography variant="subtitle1">Store Supervisor.</Typography>
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">07/2023 - Present</Typography>
                <Typography variant="body1">Part-time</Typography>
              </Box>
            </Grid>
          </Grid>
          <ul className={`${styles.eventList}`}>
            <li>Manage daily functions of store personnel (cashiers, stockers, sales assistants).</li>
            <li>Train new employees and monitor performance of existing team members.</li>
            <li>Provide high levels of customer satisfaction through exceptional service.</li>
            <li>Address customer issues and complaints promptly and professionally.</li>
            <li>Help customers when required and make sure the team remains responsive.</li>
            <li>Track stocks and liaise with inventory or purchasing personnel.</li>
            <li>Ensure shelves are fully stocked and properly organized.</li>
            <li>Ensure the store is clean, safe, and well-organized.</li>
            <li>Oversee opening and closing procedures.</li>
            <li>Ensure proper functioning of equipment (POS, scanners, etc.).</li>
            <li>Handle emergency situations like theft or accidents responsibly.</li>
          </ul>          
        </li>

        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">CatalystOne Info Solution Pvt. Ltd.</Typography>
              <Typography variant="body1">Senior Software Engineer</Typography>
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">12/2020 - 03/2023</Typography>
                <Typography variant="body1">Full-time</Typography>
              </Box>
            </Grid>
          </Grid>
          <ul className={`${styles.eventList}`}>
            <li>Developed Gradle command line tasks to automate generation new SpringBoot projects along with custom code files using Gradle API and Kotlin.</li>
            <li>Developed Gradle custom plugins to encapsulate and centralize gradle common build logic used by multiple micro-services using Gradle API and Kotlin.</li>
            <li>Worked on custom SpringBoot starters and associated libraries, developing various auto-configs to provide consistent dependency alignment and configurations throughout various micro-services.</li>
            <li>Collaborated with architects to contribute in migrating as well as extracting out capabilities from monolithic application to micro-services pattern.</li>
            <li>Developed frontend applications, re-usable components using Angular(8+), RxJS.</li>
            <li>Developed UI/UX components using HTML5, CSS3(Bootstrap, Material UI, Animation css).</li>
            <li>Built RESTful Api to perform CRUD operations.</li>
            <li>Mentored multiple teams for building strategies of various modules.</li>
            <li>Used Jira, Confluence for best practices, software documentation and sprint management.</li>
          </ul>
        </li>
        
        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">CatalystOne Info Solution Pvt. Ltd.</Typography>
              <Typography variant="body1">Software Developer</Typography>
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">05/2018 - 12/2020</Typography>
                <Typography variant="body1">Full-time</Typography>
              </Box>
            </Grid>
          </Grid>
          <ul className={`${styles.eventList}`}>
            <li>Developed candidate api backend so CatalystOne application can be integrated with 3rd party applications like ReachMee.</li>
            <li>Designed and implemented Invoice Manager to help client's organisation digitise their invoice generation system and manage their sales data.</li>
            <li>Modified existing code to increase performance of application by 70%.</li>
            <li>Implemented private email feature in module workflows which let user access application as temporary/external user and which minimal access to resources.</li>
            <li>Implemented support for visibility filters feature in workflow module to show or hide fields in user profile based on filter criteria.</li>
          </ul>
        </li>

        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">CatalystOne Info Solution Pvt. Ltd.</Typography>
              <Typography variant="body1">Associate Java Developer</Typography>
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">07/2016 - 05/2018</Typography>
                <Typography variant="body1">Full-time</Typography>
              </Box>
            </Grid>
          </Grid>
          <ul className={`${styles.eventList}`}>
            <li>Implemented support for multiple role profiles in workflows module so users can assign task to their different profiles.</li>
            <li>Implemented new date calculation mechanism that converts entered days to deadline date for task based on start date so users can set deadline to various task.</li>
            <li>Implemented new UI for module workflows so user experience can be enhanced using HTML5, CSS3, jQuery.</li>
            <li>Implemented new feature in trigger mails to send notification mails when some data is scheduled in user profile so user get notified.</li>
            <li>Developed custom system roles and integrated them to person type fields in CatalystOne application so that an organisation can create custom roles as per their organisation needs.</li>
          </ul>
        </li>

        <li className={`${styles.event}`}>
          <div className={`${styles.eventIcon}`}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <Grid container className={`${styles.eventBanner}`}>
            <Grid>
              <Typography variant="h4">CatalystOne Info Solution Pvt. Ltd.</Typography>
              <Typography variant="body1">Trainee - Java Developer</Typography>
            </Grid>
            <Grid sx={{textAlign:'right', position:'relative'}} size='grow'>
              <Box className={`vertical-center`} sx={{right:'0'}}>
                <Typography variant="body1">04/2016 - 07/2016</Typography>
                <Typography variant="body1">Full-time</Typography>
              </Box>
            </Grid>
          </Grid>
          <ul className={`${styles.eventList}`}>
            <li>Designed and implemented rewards and recognition(R&R) module that will help to increase motivation of employee to achieve the best achievement.</li>
            <li>Fixed bugs reported by testers.</li>
            <li>Documented various sections of application on Confluence to be used for training new hires.</li>
          </ul>
        </li>
      </ul>
  </Grid>
  )
}
