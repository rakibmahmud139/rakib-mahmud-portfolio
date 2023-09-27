import image from '../assets/heroImg.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>I'am a Full Stack Developer </h1>
                    <p className='text-gray-500 py-5 max-w-md'>
                        Hello, I'm Rakib Mahmud, a passionate web developer with a knack for crafting dynamic and user-friendly web experiences. I thrive on turning creative ideas into functional, aesthetically pleasing websites and web applications. I want to join a professional life to gain exposure, confidence, and a sense of achievement.
                    </p>

                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img className='h-4/5 md:h-[396px] rounded-2xl mx-auto w-2/3 md:w-[440px]' src={image} alt="my profile" />
                </div>
            </div>
        </div>
    )
}

export default Home