import { Link } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]


    const icons = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/rakib-mahmud-0b7159278/',
        },
        {
            id: 2,
            child: (
                <>
                    <FaFacebook size={30} />
                </>
            ),
            href: 'https://www.facebook.com/ishan.mahmud.9849/',
        },
        {
            id: 3,
            child: (
                <>
                    <FaInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/rakib_mahmud_2/',
        },
    ]

    return (
        <div className="w-full h-64 bg-gradient-to-b from-cyan-600 to-blue-500">
            <div>
                <div>
                    <ul className='flex justify-center flex-row md:flex-col  md:px-0 pt-10'>

                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 text-teal-950'
                                >
                                    <Link to={link} smooth duration={2000}>{link}</Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div>
                    <ul className="flex justify-center pt-10 gap-8">

                        {
                            icons.map(({ id, child, href }) => (
                                <li key={id}
                                    className="flex justify-center items-center hover:scale-125 duration-500">
                                    <a
                                        href={href}
                                        className="flex justify-between items-center w-full text-white"

                                    >
                                        <>
                                            {child}
                                        </>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <p className="text-center mt-10  text-teal-950">© Md Rakib Mahmud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;