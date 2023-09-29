import carToyHouse from '../assets/portfolio/car-toy-house.png';
import koreanChef from '../assets/portfolio/korean-chef.png';
import sportsAcademy from '../assets/portfolio/sports-academy.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Portfolio = () => {

    const handleDemo = (link) => {
        window.open(link, '_blank');
    }

    const handleCode = (code) => {
        window.open(code, '_blank');
    }

    const portfolio = [
        {
            id: 1,
            src: carToyHouse,
            link: 'https://car-toy-house-assignment.web.app/',
            code: 'https://github.com/rakibmahmud139/toy-house-client'
        },
        {
            id: 2,
            src: koreanChef,
            link: 'https://chef-recipe-hunter-clien-cc229.web.app/',
            code: 'https://github.com/rakibmahmud139/chef-recipe-hunter-client'
        },
        {
            id: 3,
            src: sportsAcademy,
            link: 'https://sports-academy-e691c.web.app/',
            code: 'https://github.com/rakibmahmud139/summer-camp-school-sports-academy'
        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div data-aos="fade-down" data-aos-duration="3000"
                    className='pb-8 text-center'>
                    <p className='uppercase text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out my some work right here</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 md-px-0'>
                    {
                        portfolio.map(({ id, src, link, code }) => (

                            <div key={id} data-aos="fade-up" data-aos-duration="3000"
                                className='shadow-lg shadow-gray-600 rounded-lg pt-1'>
                                <img src={src} alt="" className='w-96 p-4 h-64 rounded-lg duration-500 hover:scale-110' />
                                <div>
                                    <button onClick={() => handleDemo(link)} className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>

                                    <button onClick={() => handleCode(code)} className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    );
};

export default Portfolio;