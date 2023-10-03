import image from '../assets/heroImg.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
AOS.init();



const Home = () => {
    return (
        <div name="home" className='pt-44 md:pt-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:gap-28 h-full px-4 md:flex-row'>
                <div data-aos="fade-right" data-aos-duration="3000"
                    className='flex flex-col justify-center h-full'>
                    <p className='text-2xl text-cyan-400'>Hello I'm</p>
                    <div className='text-4xl md:text-6xl font-bold text-white mt-8 mb-0 md:mb-8'>
                        <TypeAnimation
                            sequence={['Rakib Mahmud', 500, 'Front End Developer', 500,]}
                            speed={500}
                            repeat={Infinity}
                        />
                    </div>

                    <div>
                        <Link to='portfolio' smooth duration={1000} className='group text-white w-fit px-6 py-3 mt-6 md:my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>

                        <a href='/Rakib-Mahmud-Resume.pdf' download={true} target='_blank' rel="noreferrer">
                            <button className='text-white md:hidden border-2 border-cyan-500 w-36 px-4 py-3 mt-6 md:my-2 rounded-md cursor-pointer'>Download CV</button>
                        </a>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="3000">
                    <img className='h-4/6 mt-12 md:mt-20  md:h-[396px] rounded-3xl mx-auto w-64 md:w-[364px]' src={image} alt="my profile" />
                </div>
            </div>
        </div>
    )
}

export default Home