import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node-js.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Skills = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-sky-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: node,
            title: 'NODE.JS',
            style: 'shadow-green-400'
        },
        {
            id: 7,
            src: mongodb,
            title: 'MONGODB',
            style: 'shadow-green-600'
        },
        {
            id: 8,
            src: express,
            title: 'EXPRESS',
            style: 'shadow-gray-400'
        },
    ]

    return (
        <div name="skills" className='pt-16 md:mt-0 bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div data-aos="fade-down" data-aos-duration="3000" className='text-center'>
                    <p className='uppercase text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Skills</p>
                </div>

                <div data-aos="zoom-in-up" data-aos-duration="3000" className='w-full mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id}
                                className=
                                {'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style
                                }
                            >
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    );
};

export default Skills;