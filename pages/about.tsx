import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/agriculture.png';
import investor1 from '../public/assets/investor/farm1.jpg';
import investor2 from '../public/assets/investor/farm2.jpg';
import investor3 from '../public/assets/investor/farm3.jpg';
import investor4 from '../public/assets/investor/farm4.jpg';
import rupantar from '../public/assets/developers/rupantar.jpeg';
import gogoi from '../public/assets/developers/gogoi.jpeg';
import kaushik from '../public/assets/developers/chetia.jpeg';
import suman from '../public/assets/developers/sumon.jpeg';
import learningImage from '../public/assets/learning-img.png';
import { BsFacebook, BsTiktok } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { DiGithubAlt } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';

const about = () => {
    return (
        <div className='about'>
            <div className="eventRemainder">
                <p>International mixed cultivation event is going on</p>
                <Link className="eventBtn" href="/news">event</Link>
            </div>
            <nav>
                <div className="container">
                    <Image src={Logo} alt="logo" className="navbarLogo" />
                    <div className="container-inner">
                        <ul>
                            <li>Developers</li>
                        </ul>
                        <ul>
                            <li><Link className="main-btn" href="/">open F2F-media</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="homepage">
                <div className="homeContainer">
                    <div className="informationContainer">
                        <h1>Welcome to <span>F2F</span></h1>
                        <h3>The emarging agro-tech company</h3>
                        <p>F2F is online platform which farmer can connect each other & the whole farmer community to the
                            investors which are genuine interested in the agricultural field. This is the common platform where
                            all the farmers discuss, grow themself and propose their unique ideas to the investors and raise
                            funding.</p>
                        <button className="main-btn">Know more</button>
                    </div>
                </div>
            </section>

            <section className="trusties">
                <div className="trustContainer">
                    <h4>Trusted By 100+ investing farms</h4>
                    <div className="investFarms">
                        <Image src={investor1} alt="investing farm" />
                        <Image src={investor2} alt="investing farm" />
                        <Image src={investor3} alt="investing farm" />
                        <Image src={investor4} alt="investing farm" />
                    </div>
                </div>
            </section>

            <section className="learning">
                <div className="learningContainer">
                    <div className="learningInfo">
                        <h3>Why Agro-F2F?</h3>
                        <p>Welcome to our agro-tech platform, a unique space that connects the entire farmer community with
                            investors. We are committed to providing a comprehensive platform for farmers to showcase their
                            innovative ideas, raise funds, sell their agricultural products, and share their knowledge and
                            experience with others. Our platform is designed to empower farmers by providing them access to an
                            extensive library of resources and information on agriculture, helping them to implement new
                            techniques and practices in their fields.</p>
                        <button className="main-btn">Learn Some New</button>
                    </div>
                    <div className="learningImageContainer">
                        <Image src={learningImage} alt='learning Image' />
                    </div>
                </div>
            </section>

            <section className="developers">
                <h1 className="heading">#developers</h1>
                <div className="developersList">
                    <div className="developer">
                        <Image src={rupantar} alt="rupantar" />
                        <h4>Rupantar Borphukan</h4>
                        <p>Sophomore at NITS. My Department is E&I Engineering. Passionate to different Software Technology, Blockchain and Open-Source Organisation. I am a MERN Stack Developer. Ex-Intern at The Sparks Foundation as a Frontend Developer.</p>
                        <div className="icons">
                            <Link href="/">
                                <DiGithubAlt size={42} />
                            </Link>
                            <Link href="/">
                                <AiFillLinkedin size={42} />
                            </Link>
                        </div>
                    </div>
                    <div className="developer">
                        <Image src={gogoi} alt="gogoi" />
                        <h4>Laditya Gogoi</h4>
                        <p>2nd Year CSE undergrad at NITS.Currently, learning blockchain dev, DSA. I am a professional Full Stack Developer. Deep interest in Blockchain Development.Also, Open-Source contributor & contributed in many open source organization.</p>
                        <div className="icons">
                            <Link href="/">
                                <DiGithubAlt size={42} />
                            </Link>
                            <Link href="/">
                                <AiFillLinkedin size={42} />
                            </Link>
                        </div>
                    </div>
                    <div className="developer">
                        <Image src={suman} alt="sumon" />
                        <h4>Suman Das</h4>
                        <p>Sophomore at NITS, ECE department. I am a quick Learner and an Open source enthusiast. I am also a WEB developer and a competitive programmer . I am also a Photographer, Content Creator & Graphic Designer.</p>
                        <div className="icons">
                            <Link href="/">
                                <DiGithubAlt size={42} />
                            </Link>
                            <Link href="/">
                                <AiFillLinkedin size={42} />
                            </Link>
                        </div>
                    </div>
                    <div className="developer">
                        <Image src={kaushik} alt="chetia" />
                        <h4>Koushik Chetia</h4>
                        <p>Pursuing my B.Tech in Electronics and Instrumentation from National Institute of Technology, Silchar. My passion for web development has led me to acquire the necessary skills and expertise to excel in this field. Good at Problem solving skills.</p>
                        <div className="icons">
                            <Link href="/">
                                <DiGithubAlt size={42} />
                            </Link>
                            <Link href="/">
                                <AiFillLinkedin size={42} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <div className="footerContainer">
                    <div className="logoContainer">
                        <Image src={Logo} alt="logo" />
                        <h1>F2F</h1>
                    </div>
                    <div className="pageLinks">
                        <ul>
                            <li>Media Page</li>
                            <li>News</li>
                            <li>Learn</li>
                        </ul>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li>
                                <Link href="#">
                                    <BsFacebook size={42} style={{ color: '#13aa52' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <AiFillYoutube size={42} style={{ color: '#13aa52' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <BsTiktok size={42} style={{ color: '#13aa52' }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <h4>Copyright Protected © 2023 F2F. All Rights Reserved.</h4>
                </div>
            </footer>

        </div>
    )
}

export default about;