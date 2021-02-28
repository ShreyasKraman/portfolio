import React from 'react';
import Siemens from '../../../src/assets/siemensLogo.png';
import Phood from '../../../src/assets/phood.png';
import MU from '../../../src/assets/mu.png';
import NU from '../../../src/assets/nu.png';
import LTI from '../../../src/assets/lti.png';

export const timeline = [
    {
        header: 'Siemens PLM',
        image: Siemens,
        jobTitle: 'Software Engineer (11/2019 - Present)',
        description:[
            'Developed complex reusable libraries in Javascipt, React and created npm modules of the same',
            'Collaborated with team to develop automated AWS cloudformation scripts to kickstart a new website with its necessary infrastructure viz. CDN, S3 buckets, Git, API, Lambda’s, CI/CD pipelines on hit of one single command',
            'Engineered virtual event registration platform which achieved over 40k+ customer participation worldwide',
        ]
    },
    {
        header: 'Phood',
        image: Phood,
        jobTitle: 'Software Developer Intern (01/2019 - 04/2019)',
        description:[
            'Implemented consumer-end user interface in vue.js, vuex, typescript and collaborated with ui/ux team for wireframing and designing as well',
            'Reduced post-consumer hardware product installation time by 40% using Raspberry Pi Zero W',
            'Coordinated and took interviews to build team of ML engineers to develop an algorithm for live image classification',
        ]
    },
    {
        header: 'Northeastern University',
        image: NU,
        jobTitle: 'Masters in Information Systems (09/2017 - 08/2019)',
        description:[
            'Learnt AWS as a part of academics and developed a full stack spring boot application with CI/CD pipeline',
            'Worked as data manager assistant where I designed databases, stored procedures, reports and data input interface in MS SQL',
            'Process around 5K records per day for statistical modeling and visualization in MS Excel using pivot tables and pivot charts',
        ]
    },
    {
        header: 'Larsen & Toubro Infotech',
        image: LTI,
        jobTitle: 'Software developer  (06/2015 - 07/2017)',
        description:[
            'Developed business critical and complex reusable modules in Java, Spring Boot for one of the world’s largest and leading entertainment media company',
            'Integrated with scalable and high-performance backend, API and micro services development of mortgages and fraud tracking to save 70% of the time using testing algorithm analysis and OO Design patterns',
            'Inculcated client-side performance considerations to utilize RESTful APIs, improving risk management by 30%'
        ]
    },
    {
        header: 'Mumbai University',
        image: MU,
        jobTitle: "Bachelor's in Information Technology (05/2011 - 06/2015)",
        description:[
            'Participated in 7 different National level technical research paper conferences',
            <p>Student chapter representative for <a href="http://www.iete.org/aboutiete.html" target="_blank" rel="noopener noreferrer">IETE</a></p>,
            <p>Conducted various camps, blood donation drives, book donation drives and also took part in awareness programmes and rallies as part of <a href="https://nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS</a> team.</p>,
            <p>Published a research paper with topic name "A Novel Method for Undergraduate Admissions Using Cloud as a Platform", view paper <a href="http://ijesc.org/upload/c38b725f75110451c5b87744fbe81b17.A%20Novel%20Method%20for%20Undergraduate%20Admissions%20Using%20Cloud%20as%20a%20Platform.pdf" target="_blank" rel="noopener noreferrer">here</a></p>,
        ]
    }
]