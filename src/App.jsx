import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  AiOutlinePhone,
  AiFillPhone,
  AiOutlineLinkedin,
  AiFillLinkedin,
} from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
import { FiUser } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const highlights = [
  '10 years experience in software development',
  'Expert in Front End development',
  'Great problem solving and debugging skills',
  'Experience in designing and building large scale projects',
  'Like challenges and new technologies',
  'Experience with mentoring new Engineers',
];

const summary =
  '10+ years’ experience in software development, encompassing a wide range of technologies. Proficient with web development with JavaScript, CSS and HTML5, also very strong at backend and database development. Using design and code to solve work and real-life problems is what I am passionated about.';

const educations = [
  {
    school: 'East Tennessee State University',
    degree: 'Master of Science Degree in Computer Science',
    graduation: 'May 2013',
  },
  {
    school: 'Shanghai University of Electric Power',
    degree: "Bachelor's Degree in Computer Science",
    graduation: 'June 2011',
  },
];

const skills = [
  {
    category: 'Frontend',
    technologies: [
      'JavaScript',
      'Typescript',
      'React',
      'Redux',
      'React Native',
      'AngularJS',
      'jQuery',
      'UI/UX Page Design',
      'HTML5',
      'CSS',
      'SASS',
      'TailwindCSS',
      'GraphQL',
      'Webpack',
      'Flexbox',
      'Nex.js',
      'GraphQL',
    ],
  },
  {
    category: 'Backend',
    technologies: [
      'Node',
      'Google Cloud',
      'Java',
      'Spring',
      'Spring MVC',
      'Hibernate',
      'Kafka',
      'Python',
      'Rest',
    ],
  },
  {
    category: 'Databases',
    technologies: [
      'SQL Server',
      'MySQL',
      'Firebase',
      'PostgreSQL',
      'MongoDB',
      'ElasticSearch',
      'Redis',
    ],
  },
  {
    category: 'Others',
    technologies: [
      'System Design',
      'Linux',
      'bash',
      'Git',
      'Nginx',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'CI/CD',
    ],
  },
];

const experiences = [
  {
    company: 'BetterCloud',
    companyUrl: 'https://www.bettercloud.com/',
    role: 'Software Engineer III',
    duration: '06/2021 - Present',
    contents: [
      'Lead the front-end development and build a modern react based web application with TailwindCSS, Context API from group up',
      'Actively participate in the design and implementation of a scalable, high-availability backend system',
      'Interviewing new Engineers. Mentoring and coaching junior engineers on technologies and system design',
      'Primary Engineer representative for product demos and Q&A sessions',
    ],
    technologies: [
      'Javascript',
      'React',
      'CSS3',
      'Java',
      'Spring',
      'Node',
      'Kafka',
      'MySQL',
      'Jenkins',
      'Google Cloud',
    ],
  },
  {
    company: 'Genuine Parts Company',
    companyUrl: 'https://www.genpt.com/',
    role: 'Software Engineer',
    duration: '11/2014 - 06/2021',
    contents: [
      'Lead the front-end team to develop a user-friendly web application with JavaScript, CSS3 for managing 6000+ NAPA stores',
      'Designed and implemented a Bulk Editing feature that saved company millions of dollars every year',
      'Interviewing and mentoring new engineers',
      'Develop and test web services with Java, Spring, and Oracle',
      'Work closely with clients to gather requirements and manage website development from initial design through completion',
    ],
    technologies: ['Javascript', 'React', 'CSS3', 'AngularJS', 'Redis'],
  },
  {
    company: 'Purchasing Power',
    companyUrl: 'https://www.purchasingpower.com/',
    role: 'Java Web Developer',
    duration: '05/2014 - 11/2014',
    contents: [
      'Develop and maintain an online J2EE B2C shopping web application using Hybris eCommerce Suite',
      'Write migration script in BeanShell to migrate data between different resources.',
      'Responsible in troubleshooting production issues in early stage of the product release',
    ],
  },
  {
    company: 'Symphony Health',
    companyUrl: 'https://www.symphonyhealth.com/',
    role: 'SQL database and .NET Developer',
    duration: '06/2013 - 5/2014',
    contents: [
      'Designing and developing projects using MS SQL Server 2012 (80%), Oracle (10%) and C#.NET(10%) ',
      'Write, maintain and debug C# code, SQL stored procedures, functions, views, indexes to support backend logic',
      'Performance tuning on existing stored procedures. Reduced the execution time of the most frequently used stored procedures by 70%',
      'Configuration of Linked Server, SQL Agent, and replication between SQL Server and Oracle',
    ],
  },
  {
    company: 'East Tennessee State University',
    companyUrl: 'https://www.symphonyhealth.com/',
    role: 'Graduate Research Assistant',
    duration: '08/2011 - 5/2013',
    contents: [
      'Design and develop a web application with my Professor and his team to track activities of faculties',
      'Use xPath and XSLT to transform XML data into HTML',
      'Use SQL Server to store and retrieve data in XML format with XML schema',
    ],
  },
];

function App() {
  const [hideContact, setHideContact] = useState(false);
  const [password, setPassword] = useState('');

  const [verified, setVerified] = useState(
    localStorage.getItem('pv') === 'true'
  );

  const submit = e => {
    e.preventDefault();
    if (password === 'happy2022') {
      localStorage.setItem('pv', 'true');
      setVerified(true);
    } else {
      alert('Wrong password');
    }
  };

  if (!verified) {
    return (
      <div className="fixed inset-0 -mt-20 flex flex-col items-center justify-center gap-4 bg-white">
        <form className="flex flex-col items-center gap-8" onSubmit={submit}>
          <div className="text-3xl font-light">
            Enter the Password to continue
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="w-[300px] rounded border border-gray-200 px-8 py-3 text-xl"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="btn btn-primary text-2xl">Go...</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen print:h-screen">
      <div className="mt-10 flex w-full items-center justify-center gap-8 print:hidden">
        {/* <button
          className="btn border border-gray-200 bg-white text-lg text-indigo-600"
          onClick={() => setHideContact(!hideContact)}
        >
          {hideContact ? 'Show Contact Info' : 'Hide Contact Info'}
        </button> */}
        <button className="btn btn-primary" onClick={() => window.print()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-printer"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
          </svg>
          <span className="ml-2 text-lg">Print</span>
        </button>
        <span>Click on the Resume to edit it</span>
      </div>
      <main
        contentEditable
        className="mx-auto  mt-12 mb-40  flex w-[1100px] flex-col rounded-lg  bg-white py-12 px-20 shadow print:py-2 print:pt-4 print:shadow-none"
      >
        <div className="head flex items-center justify-between border-b border-gray-200 pb-8">
          <section className="flex flex-col justify-between">
            <div className="flex items-center gap-1">
              <AiFillPhone className="h-4 w-4 text-gray-600" />
              <span className="ml-2 text-sm text-indigo-500">
                <a href="tel:+4237413382">423-741-3382</a>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="h-4 w-4 text-gray-600"></MdEmail>
              <span className="ml-2 text-sm text-indigo-500">
                <a href="mailto: yongwang.cs@gmail.com">
                  yongwang.cs@gmail.com
                </a>
              </span>
            </div>
          </section>
          <section className="flex flex-col items-baseline justify-between">
            <div className="flex items-center gap-1">
              {/* <SiAboutdotme className="h-4 w-4"></SiAboutdotme> */}
              <FaUser className="h-4 w-4 text-gray-600" />
              <span className="ml-2 text-sm text-indigo-500">
                <a href="http://yongwang.me">yongwang.me</a>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AiFillLinkedin className="h-4 w-4 text-gray-600" />
              <span className="ml-2 text-sm text-indigo-500">
                <a href="https://www.linkedin.com/in/yongwang-cs/">
                  linkedin.com/in/yongwang-cs/
                </a>
              </span>
            </div>
          </section>
          <div className="font-base absolute left-[50%] mx-auto translate-x-[-50%] text-4xl font-bold tracking-wider">
            Yong Wang
          </div>
        </div>

        <section className="mt-4 flex flex-col">
          <div className="title">Summary</div>
          <ul className="body-text mx-4 mt-2 grid grid-cols-2 font-medium text-gray-700">
            {highlights.map(it => (
              <li className="list-disc">{it}</li>
            ))}
          </ul>
        </section>
        <section className="mt-8 flex flex-col">
          <div className="title">Education</div>
          <div className="mt-2 flex flex-col gap-1">
            {educations.map(edu => (
              <div className="flex gap-4">
                <span className="w-[500px] text-sm font-medium">
                  {edu.degree}
                </span>
                <span className="text-sm text-gray-500 print:text-gray-700">
                  {edu.school}
                </span>
                <span className="ml-auto text-sm font-medium">
                  {edu.graduation}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="skills mt-8 flex flex-col">
          <div className="title">Technologies</div>
          <div className="flex flex-col gap-1">
            {skills.map(skill => (
              <div className="mt-2 flex gap-1">
                <div className="w-[100px] shrink-0 text-sm font-bold text-gray-800">
                  {skill.category}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 print:gap-x-2">
                  {skill.technologies.map(tech => (
                    <div className="rounded bg-indigo-50 px-2 py-[2px] text-sm text-indigo-600 print:bg-white print:font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="experience mt-8 flex flex-col">
          <div className="title">Experiences</div>
          <div className="mt-2 flex flex-col gap-6">
            {experiences.map(exp => (
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-800 print:font-semibold">
                    {exp.role}
                  </span>
                  <a
                    className="ml-4 text-sm  text-indigo-500 hover:text-indigo-700"
                    href={exp.companyUrl}
                  >
                    {exp.company}
                  </a>
                  <span className="ml-auto text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  {exp.contents.map(content => (
                    <li className="body-text">{content}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
