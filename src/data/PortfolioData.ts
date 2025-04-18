import { faBuilding, faLaptopCode, faStore } from "@fortawesome/free-solid-svg-icons";
import { Portfolio } from "./Portfolio";

export const PORTFOLIO_DATA: Portfolio = {
    name:'Bibek Saini',
    summary: [
        "I am a passionate software engineer who love to learn, experiment and build something that creates value.",
        "I specialise in designing architecture, developing seamless user experiences, and handling end-to- end deployment. Passionate about solving complex problems, I work across the front-end and back-end technologies — Java, .NET, Kotlin, Angular, React, Spring Boot, Docker, Kubernetes, and Azure, to name just a few. Whether it's a single line of clean code or performance optimisation, my ultimate aim is always to build trusted systems with real value.",
        "I am a strong advocate of agile methodologies and DevOps practices, and I am always looking for opportunities to learn new technologies and improve my skills."
    ], 
    profileImage: '',
    workExperience:[{
        company:'Freelance',
        position:'Senior Full Stack Software Engineer',
        startDate:'08/2023',
        endDate:'Present',
        mode:'Part-time',
        description:[
            "Created as well and re-structured/re-invented multiple micro-service application using SpringBoot, ASP.NET as backend framework along with Java, Kotlin, C#.NET as backend languages to write business logic respectively.",
            "Designed RESTful APIs using REST patterns and used Swagger UI (Open API) to generate API documentation.",
            "Created gRPC clients and well as servers for internal communication between micro-services.",
            "Researched and proposed various security by default methods like Spring Security method, claims-based authorization and many more.",
            "Used Microsoft SQL Server and made Entity Relationship Diagrams (ERD) to visualize business model.",
            "Utilized various ORM tools like String Data JPA for Spring applications, Entity Framework for .NET applications for storing and accessing the data from database.",
            "Followed TDD approach while creating micro-services and wrote test cases using jUnit, Mockito and xUnit for .NET applications.",
            "Developed multiple frontend applications, re-usable components using Angular (8+), React, RxJS, Observables, TypeScript, JavaScript (ES6+).",
            "Developed UI/UX components using HTML5, CSS3(Bootstrap, Material UI and Animate.css) and CSS preprocessors such as SCSS.",
            "Deployed Azure Pipelines templates for CI/CD to automate deployment on Azure Kubernetes Services (AKS).",
            "Created various Kubernetes YAML templates for deploying services to a Kubernetes cluster.",
            "Used Helm deployment tool for automating creation, packaging, configuration and deployment of applications and services to Kubernetes cluster."
        ],
        icon: faLaptopCode
    }, {
        company:"Ray's Mini Mart",
        position:"Store Supervisor",
        startDate:"07/2023",
        endDate:"Present",
        mode:"Part-time",
        description:[
            "Manage daily functions of store personnel (cashiers, stockers, sales assistants).",
            "Train new employees and monitor performance of existing team members.",
            "Provide high levels of customer satisfaction through exceptional service.",
            "Address customer issues and complaints promptly and professionally.",
            "Help customers when required and make sure the team remains responsive.",
            "Track stocks and liaise with inventory or purchasing personnel.",
            "Ensure shelves are fully stocked and properly organized.",
            "Ensure the store is clean, safe, and well-organized.",
            "Oversee opening and closing procedures.",
            "Ensure proper functioning of equipment (POS, scanners, etc.).",
            "Handle emergency situations like theft or accidents responsibly."
        ],
        icon: faStore
    },{
        company:'CatalystOne Info Solutions Pvt. Ltd.',
        position:'Senior Software Engineer',
        startDate:'12/2020',
        endDate:'03/2023',
        mode:'Full-time',
        description:[
            "Developed Gradle command-line tasks to automate the generation of new Spring Boot projects along with custom code files using the Gradle API and Kotlin.",
            "Created custom Gradle plugins to encapsulate and centralize common build logic used by multiple microservices, leveraging the Gradle API and Kotlin.",
            "Worked on custom Spring Boot starters and supporting libraries, developing various auto-configurations to ensure consistent dependency alignment and configuration across microservices.",
            "Collaborated with architects to support migration and capability extraction from a monolithic application to a microservices architecture.",
            "Developed frontend applications and reusable components using Angular (8+) and RxJS.",
            "Built UI/UX components using HTML5, CSS3 (Bootstrap, Material UI, Animate.css).",
            "Implemented RESTful APIs to perform CRUD operations.",
            "Mentored multiple teams in strategizing and building various project modules.",
            "Used Jira and Confluence to follow best practices in software documentation and sprint management.",
        ],
        icon: faBuilding
    }, {
        company:'CatalystOne Info Solutions Pvt. Ltd.',
        position:'Software Engineer',
        startDate:'05/2018',
        endDate:'12/2020',
        mode:'Full-time',
        description:[
            "Developed Candidate API backend to enable CatalystOne application integration with third-party platforms like ReachMee.",
            "Designed and implemented an Invoice Manager to help clients digitize invoice generation and manage sales data.",
            "Optimized existing code, improving application performance by 70%.",
            "Implemented a private email feature in module workflows to allow temporary/external users limited access to the application.",
            "Added support for visibility filters in the workflow module to dynamically show or hide user profile fields based on filter criteria."
        ],
        icon: faBuilding
    }, {
        company:'CatalystOne Info Solutions Pvt. Ltd.',
        position:'Associate Java Developer',
        startDate:'07/2016',
        endDate:'05/2018',
        mode:'Full-time',
        description:[
            "Implemented support for multiple role profiles in the workflows module, allowing users to assign tasks to their different profiles.",
            "Developed a new date calculation mechanism that converts entered days into task deadline dates based on start date, enabling more flexible deadline management.",
            "Redesigned the UI for the workflows module to enhance user experience using HTML5, CSS3, and jQuery.",
            "Added a feature in trigger mails to send notification emails when specific data is scheduled in a user's profile, ensuring timely alerts.",
            "Developed custom system roles and integrated them with person-type fields in the CatalystOne application, enabling organizations to define roles based on their unique needs."
        ],
        icon: faBuilding
    }, {
        company:'CatalystOne Info Solutions Pvt. Ltd.',
        position:'Trainee - Java Developer',
        startDate:'04/2016',
        endDate:'07/2016',
        mode:'Full-time',
        description:[
            "Designed and implemented a Rewards and Recognition (R&R) module to boost employee motivation and encourage high achievement.",
            "Fixed bugs reported by testers to improve application stability and performance.",
            "Documented various sections of the application on Confluence for use in onboarding and training new hires."
        ],
        icon: faBuilding
    }]
}