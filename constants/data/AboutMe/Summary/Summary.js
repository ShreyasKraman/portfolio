import {faReact, faJava, faVuejs, faGithub, faNodeJs, faAws, faDocker,
    } from '@fortawesome/free-brands-svg-icons'

import Vmware from '../../../../src/assets/vmware.png';
import Jest from '../../../../src/assets/jest.png';
import Express from '../../../../src/assets/expressjs.png';
import Hibernate from '../../../../src/assets/hibernate.png';
import Spring from '../../../../src/assets/spring.svg';

export const expertise = [
    {
        type:'icon',
        text: 'React',
        icon: faReact,
        style: 'React' 
    },
    {
        type:'image',
        text: 'Jest',
        asset: Jest 
    },
    {
        type:'icon',
        text: 'Java',
        icon: faJava,
        style:'Java' 
    },
    {
        type:'image',
        text: 'Spring MVC',
        asset: Spring 
    },
    {
        type:'image',
        text: 'Spring Boot',
        asset: Spring 
    },
    {
        type:'image',
        text: 'Hibernate',
        asset: Hibernate 
    },
    {
        type:'icon',
        text: 'Github',
        icon: faGithub,
        style: 'Github' 
    },
];

export const handsOn = [
    {
        type:'icon',
        text: 'Node',
        icon: faNodeJs,
        style: 'Node' 
    },
    {
        type:'image',
        text: 'Express.js',
        asset: Express 
    },
    {
        type:'icon',
        text: 'AWS',
        icon: faAws,
        style: 'Aws' 
    },
    {
        type:'icon',
        text: 'Docker',
        icon: faDocker,
        style: 'Docker' 
    },
    {
        type:'image',
        text: 'Vmware',
        asset: Vmware 
    }
]