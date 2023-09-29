import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center">
                <div data-aos="fade-down" data-aos-duration="3000" className="pb-8">
                    <p className="uppercase text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p data-aos="fade-left" data-aos-duration="3000" className="text-xl mt-20">Hello, I'm Rakib Mahmud, a passionate web developer with a knack for crafting dynamic and  user-friendly web experiences. I thrive on turning creative ideas into functional, aesthetically pleasing websites and web applications. I love coding. I am interested in learning new technology. <br /> I believe that no one can be successful without hard work and dedication. I want to join a professional life to gain exposure, confidence, and a sense of achievement.</p>
            </div>
        </div>
    );
};

export default About;