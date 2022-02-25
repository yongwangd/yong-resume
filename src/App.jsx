import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
    degree: 'Bachelor Degree in Computer Science',
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
      'NodeJS',
      'Express',
      'Java',
      'Spring',
      'Spring MVC',
      'Hibernate',
      'Kafka',
      'Python',
      'Rest API',
    ],
  },
  {
    category: 'Databases',
    technologies: [
      'SQL Server',
      'MySQL',
      'SqLite',
      'Firebase',
      'MongoDB',
      'Redis',
    ],
  },
  {
    category: 'Tools',
    technologies: [
      'Linux',
      'MacOS',
      'Windows',
      'bash',
      'Git',
      'Nginx',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Vim',
      'Emacs',
    ],
  },
];

const experiences = [
  {
    company: 'BetterCloud',
    companyUrl: 'https://www.bettercloud.com/',
    role: 'Senior Software Engineer',
    duration: '06/2021 - Present',
    contents: [
      '​​BetterCloud is the first SaaS Operations Management platform, empowering IT for continuous event monitoring, quickly remediating threats, and fully-automated policy enforcement',
      'Lead the front-end development and build a modern react based web application with TailwindCSS, Context API from group up',
      'Actively participate in the design and implementation of a scalable, high-availability backend system',
      'Mentoring and training junior engineers on technologies and system design',
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
    duration: '11/2021 - 06/2021',
    contents: [
      'Develop and maintain the core of the product, including the frontend and backend.',
      'Developed web services with Java, Spring, and Oracle',
      'Work closely with clients to gather requirements and manage website development from initial design through completion',
    ],
    technologies: ['Javascript', 'React', 'CSS3', 'AngularJS', 'Redis'],
  },
  {
    company: 'Purchasing Power',
    companyUrl: 'https://www.purchasingpower.com/',
    role: 'Software Engineer',
    duration: '05/2014 - 10/2014',
    contents: [
      'Develop and maintain an online J2EE B2C shopping web application using Hybris eCommerce Suite',
      'Develop backend management consoles for product, order, payment and client service.',
      'Develop and maintain controllers, services, views using Spring MVC framework.',
      'Develop and maintain customer note widget on client service console to manage notes',
      'Write migration script in BeanShell to migrate data between different resources.',
      'Design and implement interactive and responsive web application using standard web technologies',
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
      'Performance tuning on existing stored procedures. Made several stored procedures at least 5 times faster',
      'Improve two projects performance by 75% by redesigning database structure and work flows',
      'Experience with SSIS packages and data warehousing ',
      'Configuration of Linked Server, SQL Agent, and replication between SQL Server and Oracle',
      'Responsible in troubleshooting production issues in early stage of the product release',
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
        <button
          className="btn border border-gray-200 bg-white text-lg text-indigo-600"
          onClick={() => setHideContact(!hideContact)}
        >
          {hideContact ? 'Show Contact Info' : 'Hide Contact Info'}
        </button>
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
        <div className="mx-auto text-4xl font-bold">Yong Wang</div>
        {!hideContact && (
          <section className="flex items-baseline justify-between">
            <div>
              <span className="text-sm font-semibold ">Phone:</span>
              <span className="ml-2 text-sm text-indigo-500">
                <a href="tel:+4237413382">423-741-3382</a>
              </span>
            </div>
            <div>
              <span className="text-sm font-semibold ">Email:</span>
              <span className="ml-2 text-sm text-indigo-500">
                <a href="mailto: yongwang.cs@gmail.com">
                  yongwang.cs@gmail.com
                </a>
              </span>
            </div>
          </section>
        )}
        <section className="mt-8 flex flex-col">
          <div className="title">Summary</div>
          <p className="body-text mt-2">{summary}</p>
        </section>
        <section className="mt-8 flex flex-col">
          <div className="title">Education</div>
          <div className="mt-2 flex flex-col gap-1">
            {educations.map(edu => (
              <div className="flex gap-4">
                <span className="w-[500px] text-sm font-medium">
                  {edu.degree}
                </span>
                <span className="text-sm text-gray-500">{edu.school}</span>
                <span className="ml-auto text-sm font-medium">
                  {edu.graduation}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className="skills mt-8 flex flex-col">
          <div className="title">Skills</div>
          <div className="flex flex-col gap-1">
            {skills.map(skill => (
              <div className="mt-2 flex gap-1">
                <div className="w-[100px] shrink-0 text-sm font-bold text-gray-800">
                  {skill.category}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {skill.technologies.map(tech => (
                    <div className="rounded bg-indigo-50 px-2 py-[2px] text-sm text-indigo-600">
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
                  <span className="text-base font-medium text-gray-800">
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
