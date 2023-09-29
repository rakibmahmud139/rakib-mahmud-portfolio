import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center mx-auto h-full">
                <div data-aos="fade-down" data-aos-duration="3000"
                    className="pb-8 text-center">
                    <p className="uppercase text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/afd73232-1a1a-4a59-8bff-821dc810e532"
                        method="POST"
                        className="flex flex-col w-full md:w-1/3">
                        <input
                            data-aos="fade-up-right"
                            data-aos-duration="3000"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            data-aos="fade-left"
                            data-aos-duration="3000"
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            data-aos="fade-up-left"
                            data-aos-duration="3000"
                            name="message"
                            placeholder="Enter your message"
                            rows="8"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        >

                        </textarea>

                        <button
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;