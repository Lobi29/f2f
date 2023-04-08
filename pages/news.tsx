import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

import newsImage from '../public/assets/news/newsImgae/newsImage.jpg';
import Logo from '../public/agriculture.png';
import Link from 'next/link';
import { BsFacebook, BsTiktok } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

const news = () => {
    return (
        <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
            <Navbar />
            <div className="flex gap-6 md:gap-20">
                <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
                    <Sidebar />
                </div>
                <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                    <div className="news">
                        <section className="news">
                            <div className="bannerContainer">
                                <h1>#latest and Updated News</h1>
                                <h4>top 10 trending news is here</h4>
                            </div>
                            <div className="newsContainer">
                                <h1 className="Heading">NEWS</h1>
                                <div className="newsList">
                                    <div className="newsBlock">
                                        <div className="imageContainer1">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Agriculture Technology Trend</h3>
                                        <p>AgTech market is booming, with no signs of slowing down. In 2021, the smart agriculture market was valued at $18.12 billion.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer2">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Best Management Practices when Commercializing New Agriculture Technology</h3>
                                        <p>When launching a new product into the market, companies must have a well thought out plan to prove the success of their product in both crop yield and return on investment.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer3">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3> Demand fluctuations, quicker harvests change horticultural cultivation patterns in Karnataka </h3>
                                        <p>The cultivation areas of other fruits like mosambi, jackfruit, and custard apple (sitaphal) have reduced in the last two decades. </p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer4">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Cannabis cultivation</h3>
                                        <p>Taking cannabis out of the purview of the harsh Narcotic Drugs and Psychotropic Substances Act, 1985, entails the risk of a spike in the number of people accessing it.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer5">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Growing Role for Biopesticides in a Crop Input Portfolio</h3>
                                        <p>biopesticides succeed with more widespread uptake in row crops.Approximately 10% of biological control products today are used in row crop, the vast majority of their use remains in the specialty markets..</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer6">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Vertical farm cuts energy use 75 per cent by using sunlight</h3>
                                        <p>The greenhouse is warm, bright with sunlight and busy with workers tending to the more than 300,000 heads of romaine, butterhead and red oak growing in hydroponic pots.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer7">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Models confirm why battery power is the future for mowing</h3>
                                        <p>Large-scale investments incurred in the development of material and processing technologies by technology leaders as well as expanding government subsidies are all significant industry drivers.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer8">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Insights Into Engineering Climate Smart Crops for the Future</h3>
                                        <p> C3 and C4. Most food crops, such as rice, wheat, barley and oats – depend on the less efficient C3 photosynthesis, where carbon is fixed into sugar inside cells called ‘mesophyll’ where oxygen is abundant.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer9">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Cosmic crops for food security & Climate change adaption</h3>
                                        <p> ne week before the expected return of the seeds to Earth, the IAEA and FAO held an event for students, the scientific community and the public to learn about space science and nuclear techniques in plant breeding.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
                                        </Link>
                                    </div>
                                    <div className="newsBlock">
                                        <div className="imageContainer10">
                                            <h1 className='hastag'>#F2F</h1>
                                        </div>
                                        <p>4 April 2023</p>
                                        <h3>Farming Businesses want investor to invest More in World</h3>
                                        <p>U.S. President Joe Biden last May loosened restrictions on travel, remittances and migration, and promised the United States would do more to support the fledgling private sector in Cuba.</p>
                                        <Link href={`/news/news`}>
                                            <button className='main-btn'>Know more...</button>
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
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Learn</li>
                                        <li>Ecommerce</li>
                                    </ul>
                                </div>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <BsFacebook size={28} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <AiFillYoutube size={28} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <BsTiktok size={28} />
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
                </div>
            </div>
        </div>
    )
}

export default news