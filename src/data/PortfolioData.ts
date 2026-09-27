import { faBuilding, faLaptopCode, faStore } from "@fortawesome/free-solid-svg-icons";
import { Portfolio } from "./Portfolio";
import { akitaIcon, angularIcon, apachemavenIcon, aspnetIcon, atomIcon, azureaksIcon, azureIcon, azurepipelineIcon, bitbucketIcon, bootstrapIcon, confluenceIcon, consulIcon, csharpIcon, cssIcon, digitaloceanIcon, dockerIcon, dotnetIcon, eclipseIcon, fontawesomeIcon, githubactionsIcon, githubIcon, gitIcon, gitkarakenIcon, gradleIcon, helmIcon, htmlIcon, intellijIcon, istioIcon, javaIcon, javascriptIcon, jestIcon, jiraIcon, jotaiIcon, junitIcon, kotlinIcon, ktorIcon, kubernetesIcon, mongodbIcon, mssqlserverIcon, muiIcon, nginxIcon, nodejsIcon, npmIcon, ocelotIcon, openapiIcon, postmanIcon, reactIcon, riderIcon, sassIcon, sourcetreeIcon, springIcon, sqlIcon, swaggerIcon, typescriptIcon, visualstudiocodeIcon, visualstudioIcon, vitejsIcon } from "../assets/tech-icons";
import expressScriptsLogo from '../assets/express-scripts-icon.jpg'
import circanaLogo from '../assets/circana-icon.png'
import catalystoneLogo from '../assets/catalystone-logo.jpg'

export const PORTFOLIO_DATA: Portfolio = {
    name: 'Bibek Saini',
    summary: [
        "I am a passionate software engineer who love to learn, experiment and build something that creates value.",
        "I specialise in designing architecture, developing seamless user experiences, and handling end-to- end deployment. Passionate about solving complex problems, I work across the front-end and back-end technologies — Java, .NET, Kotlin, Angular, React, Spring Boot, Docker, Kubernetes, and Azure, to name just a few. Whether it's a single line of clean code or performance optimisation, my ultimate aim is always to build trusted systems with real value.",
        "I am a strong advocate of agile methodologies and DevOps practices, and I am always looking for opportunities to learn new technologies and improve my skills."
    ],
    profileImage: '',
    workExperience: [{

        company: 'Express Scripts Canada',
        position: 'Full Stack Developer',
        startDate: '07/2026',
        endDate: 'Present',
        mode: 'Full-time',
        location: 'Mississauga, Canada - Hybrid', 
        description: "",
        icon: faBuilding,
        techSkills:["Java", "SpringBoot", "Angular", "Microservices", "OCP"],
        companyLogo: expressScriptsLogo
    },{
        company: 'Circana',
        position: 'Senior Full Stack Software Engineer',
        startDate: '07/2024',
        endDate: '11/2025',
        mode: 'Part-time',
        location: 'Remote (Canada)',
        description: "Versatile Full-Stack Engineer with a proven track record of re-architecting legacy systems into high-performance, secure microservices applications. Expert in bridging Java/Kotlin (Spring Boot) and C# (ASP.NET) backend ecosystems with modern Angular/React frontends. Certified in driving TDD practices and automating heavy-duty cloud deployments using Docker, Kubernetes (AKS), and Helm.",
        icon: faLaptopCode,
        techSkills:["Java",
  "Kotlin",
  "C# .NET",
  "Spring Boot",
  "ASP.NET",
  "SQL Server",
  "RESTful APIs",
  "gRPC",
  "Angular",
  "React",
  "TypeScript",
  "TDD",
  "Azure Pipelines (CI/CD)",
  "Kubernetes",
  "Helm"],
        companyLogo: circanaLogo
    }, {
        company: "Ray's Mini Mart",
        position: "Store Supervisor",
        startDate: "07/2023",
        endDate: "Present",
        mode: "Part-time",
        location: "London ON, Canada",
        description: "Dynamic Retail Operations Leader with a proven track record of driving high customer satisfaction and orchestrating seamless daily store functions. Expert in building high-performing teams through targeted employee training, proactive inventory control, and rigorous safety standards. A hands-on problem solver who optimizes store efficiency, ensures flawless opening/closing procedures, and maintains high visual merchandising standards.",
        icon: faStore,
        techSkills:["Retail Operations Management",
  "Team Leadership & Training",
  "Customer Service Excellence",
  "Inventory & Stock Control",
  "Conflict Resolution"],
        companyLogo: ''
    }, {
        company: 'CatalystOne',
        position: 'Senior Software Engineer',
        startDate: '04/2016',
        endDate: '03/2023',
        mode: 'Full-time',
        location: 'Mohali Punjab, India',
        description: "Senior Platform & Full-Stack Engineer specializing in developer productivity, cloud-native tooling, and monolithic migrations. Expert in building custom Gradle plugins, command-line tools, and Spring Boot starters (Java/Kotlin) that standardize build logic across enterprise microservices. Proven leader who has optimized application performance by 70% while mentoring teams, designing scalable Angular frontends, and delivering complex enterprise modules (Workflows, APIs, Integrations).",
        icon: faBuilding,
        techSkills:["Platform Engineering & Automation (Gradle API/Kotlin)",
  "Microservices Architecture & Monolith Migration",
  "Full-Stack Development (Spring Boot & Angular)",
  "Application Performance Optimization",
  "Technical Leadership & Mentorship",
  "RESTful API & Integration Engineering (ReachMee)"],
        companyLogo: catalystoneLogo
    }],
    projects: [{
        title: 'PosePoints',
        subtitle: 'React, SpringBoot and Kotlin.',
        description: "PosePoints is a responsive web-based application designed to efficiently manage national-level Yoga competitions in Indian states like Haryana, handling participant registration, scoring, and event coordination.",
        avatar: 'PP',
        technologies: [
            {
                tooltip: "React",
                icon: reactIcon
            }, {
                tooltip: "TypeScript",
                icon: typescriptIcon
            },
            {
                tooltip: 'Material UI (MUI)',
                icon: muiIcon
            }, {
                tooltip: 'Jest',
                icon: jestIcon
            },
            {
                tooltip: 'SpringBoot',
                icon: springIcon
            }, {
                tooltip: 'Kotlin',
                icon: kotlinIcon
            }
        ],
    }, {
        title: 'Custom Gradle Plugins',
        subtitle: 'Gradle API and Kotlin.',
        avatar: 'CGP',
        description: 'An assortment of Gradle plugins customized to configure essential plugins, dependencies, and standard project settings required across multiple projects.',
        technologies: [{
            tooltip: 'Gradle',
            icon: gradleIcon
        }, {
            tooltip: 'Kotlin',
            icon: kotlinIcon
        }]
    }, {
        title: 'Project Generator (code as automation)',
        subtitle: 'Gradle API and Kotlin.',
        avatar: 'PG',
        description: 'A custom Gradle plugin with dynamic code generation capabilities to automatically generate boilerplate and repetitive code, streamlining project development.',
        technologies: [{
            tooltip: 'Gradle',
            icon: gradleIcon
        }, {
            tooltip: 'Kotlin',
            icon: kotlinIcon
        }]
    }, {
        title: 'Custom SpringBoot Starters',
        subtitle: 'SpringBoot and Kotlin.',
        avatar: 'CSS',
        description: 'Collection of BOMs, libraries and SpringBoot Starters to provide consistent dependency alignment and configuration conventions across microservices projects to build bootiful services.',
        technologies: [{
            tooltip: 'SpringBoot',
            icon: springIcon
        }, {
            tooltip: 'Kotlin',
            icon: kotlinIcon
        }]
    }, {
        title: 'Notification Service',
        subtitle: 'SpringBoot and Java.',
        avatar: 'NS',
        description: 'Micro-service providing email and sms notification capabilities. Implements JMS and Azure Service Bus.',
        technologies: [
            {
                tooltip: 'SpringBoot',
                icon: springIcon
            }, {
                tooltip: 'Java',
                icon: javaIcon
            }
        ]
    }, {
        title: 'Pending Task Service',
        subtitle: 'SpringBoot and Java.',
        avatar: 'PTS',
        description: 'Pending task service collects various task information from different services in micro-services architecture and helps in presenting it in singular form.',
        technologies: [{
            tooltip: 'SpringBoot',
            icon: springIcon
        }, {
            tooltip: 'Java',
            icon: javaIcon
        }]
    }, {
        title: 'Task manager',
        subtitle: 'Micro-services.',
        avatar: 'TM',
        description: "Built on micro-services architecture this application provides management services like Invoice Manager and Task Board which allow users to manage their task and help organization's digitize their invoice generation system. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform, which are deployed on Azure Kubernetes Services.",
        technologies: [
            {
                tooltip: 'Angular',
                icon: angularIcon
            },
            {
                tooltip: 'React',
                icon: reactIcon
            }, {
                tooltip: 'DotNet',
                icon: dotnetIcon
            }
        ]
    }, {
        title: 'Mailer',
        subtitle: 'Angular',
        avatar: 'M',
        description: "Mailer app is built on Angular framework providing mail viewing experience. The project is built as SPA where content is refreshed and their state is maintained. App has state management implemented using datorama/akita.",
        technologies: [{
            tooltip: 'Angular',
            icon: angularIcon
        }, {
            tooltip: 'TypeScript',
            icon: typescriptIcon
        }]
    }, {
        title: 'Music Store',
        subtitle: 'ASP.NET MVC.',
        avatar: 'MS',
        description: "Music Store Web App let users access their favourite music albums and listen them over the internet. User's can create personalized playlist, add album or songs to their favourites",
        technologies: []
    }, {
        title: 'Workflows',
        subtitle: 'Java EE.',
        avatar: 'W',
        description: 'Workflows modules help organizations to manage their tasks which occurs in particular order. With workflows organizations can design the flow with various pre-defined task.',
        technologies: [{
            tooltip: 'Java EE',
            icon: javaIcon
        }]
    }],
    skills: [{
        title: 'Frontend',
        description: 'Frontend development is the practice of creating the visual and interactive elements of a website or application that users directly engage with. It involves using languages like HTML, CSS, and JavaScript to build user interfaces, ensuring they are responsive and visually appealing.',
        skills: [{
            tooltip: 'React',
            icon: reactIcon
        }, {
            tooltip: 'Angular',
            icon: angularIcon
        }, {
            tooltip: 'TypeScript',
            icon: typescriptIcon
        }, {
            tooltip: 'JavaScript',
            icon: javascriptIcon
        }, {
            tooltip: 'Jest',
            icon: jestIcon
        }, {
            tooltip: 'HTML5',
            icon: htmlIcon
        }, {
            tooltip: 'CSS3',
            icon: cssIcon
        }, {
            tooltip: 'Bootstrap',
            icon: bootstrapIcon
        }, {
            tooltip: 'Material UI (MUI)',
            icon: muiIcon
        }, {
            tooltip: 'Node.js',
            icon: nodejsIcon
        }, {
            tooltip: 'NPM',
            icon: npmIcon
        }, {
            tooltip: 'Vite.js'
            , icon: vitejsIcon
        }, {
            tooltip: 'NGINX',
            icon: nginxIcon
        }, {
            tooltip: 'SASS',
            icon: sassIcon
        }, {
            tooltip: 'Akita',
            icon: akitaIcon
        }, {
            tooltip: 'Jotai',
            icon: jotaiIcon
        }, {
            tooltip: 'Font Awesome',
            icon: fontawesomeIcon
        },]
    }, {
        title: 'Backend',
        description: 'Backend development is the server-side part of web development that focuses on databases, server logic, and application architecture. It involves using programming languages and frameworks to build the core functionality of a website or application.',
        skills: [{
            tooltip: 'DOTNET',
            icon: dotnetIcon
        }, {
            tooltip: 'Java',
            icon: javaIcon
        }, {
            tooltip: 'C# (CSharp)',
            icon: csharpIcon
        }, {
            tooltip: 'Kotlin',
            icon: kotlinIcon
        }, {
            tooltip: 'Spring Boot',
            icon: springIcon
        }, {
            tooltip: 'ASP.NET',
            icon: aspnetIcon
        }, {
            tooltip: 'Ktor',
            icon: ktorIcon
        }, {
            tooltip: 'Gradle',
            icon: gradleIcon
        }, {
            tooltip: 'Apache Maven',
            icon: apachemavenIcon
        }, {
            tooltip: 'JUnit',
            icon: junitIcon
        }, {
            tooltip: 'Swagger UI (Open API)',
            icon: swaggerIcon
        }, {
            tooltip: 'Open API',
            icon: openapiIcon
        }]
    }, {
        title: 'Database Tools',
        description: 'Database tools are software applications that help manage, manipulate, and analyze data stored in databases. They provide functionalities for querying, reporting, and visualizing data, as well as for database design and administration.',
        'skills': [{
            tooltip: 'SQL',
            icon: sqlIcon
        }, {
            tooltip: 'Microsoft SQL Server',
            icon: mssqlserverIcon
        }, {
            tooltip: 'MongoDB',
            icon: mongodbIcon
        }]
    }, {
        title: 'Deployment',
        description: 'Deployment is the process of making a software application available for use. It involves transferring the application from a development environment to a production environment, ensuring it runs smoothly and efficiently.',
        skills: [{
            tooltip: 'Azure',
            icon: azureIcon
        }, {
            tooltip: 'Digital Ocean',
            icon: digitaloceanIcon
        }, {
            tooltip: 'Docker',
            icon: dockerIcon
        }, {
            tooltip: 'Kubernetes',
            icon: kubernetesIcon
        }, {
            tooltip: 'Azure Kubernetes Services (AKS)',
            icon: azureaksIcon
        }, {
            tooltip: 'Helm',
            icon: helmIcon
        }, {
            tooltip: 'GitHub Actions',
            icon: githubactionsIcon
        }, {
            tooltip: 'Azure Pipelines',
            icon: azurepipelineIcon
        }]
    }, {
        title: 'Version Control',
        description: 'Version control is a system that records changes to files or sets of files over time so that you can recall specific versions later. It is essential for tracking changes, collaborating with others, and maintaining a history of project development.',
        skills: [{
            tooltip: 'Git',
            icon: gitIcon
        }, {
            tooltip: 'GitHub',
            icon: githubIcon
        }, {
            tooltip: 'Bitbucket',
            icon: bitbucketIcon
        }, {
            tooltip: 'SourceTree',
            icon: sourcetreeIcon
        }, {
            tooltip: 'GitKraken',
            icon: gitkarakenIcon
        }]
    }, {
        title: 'IDEs',
        description: 'Integrated Development Environments (IDEs) are software applications that provide comprehensive facilities to programmers for software development. They typically include a code editor, debugger, and build automation tools.',
        skills: [
            {
                tooltip: 'Eclipse IDE',
                icon: eclipseIcon
            }, {
                tooltip: 'IntelliJ IDEA',
                icon: intellijIcon
            },
            {
                tooltip: 'Rider IDE',
                icon: riderIcon
            },
            {
                tooltip: 'Visual Studio Code (VS Code)',
                icon: visualstudiocodeIcon
            }, {
                tooltip: 'Visual Studio',
                icon: visualstudioIcon
            }, {
                tooltip: 'Atom IDE',
                icon: atomIcon
            }
        ]
    }, {
        title: 'Others',
        description: 'Other tools and technologies that are not categorized in the above sections.',
        skills: [{
            tooltip: 'Consul',
            icon: consulIcon
        }, {
            tooltip: 'Istio',
            icon: istioIcon
        }, {
            tooltip: 'Ocelot API Gateway',
            icon: ocelotIcon
        }, {
            tooltip: 'Jira',
            icon: jiraIcon
        }, {
            tooltip: 'Confluence',
            icon: confluenceIcon
        }, {
            tooltip: 'Postman',
            icon: postmanIcon
        }]
    }]
}