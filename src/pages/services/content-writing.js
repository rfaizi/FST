import CounterSection from '@/app/components/CounterSection'
import DesignProcess from '@/app/components/DesignProcess'
import EnquiryForm from '@/app/components/EnquiryForm'
import Portfolio from '@/app/components/Portfolio'
import classNames from 'classnames'
import styles from "./Services.module.scss"
import { MdDesignServices } from 'react-icons/md'
import { FaCode } from 'react-icons/fa'
import { PiDesktopTowerLight } from "react-icons/pi";
import { BiSolidBookContent } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiDeadEye } from "react-icons/gi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BsTools } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import Usp from '@/app/components/Usp'
export default function ContentWriting() {
    return (
        <main>
            <Usp />
            <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }}>
                    <div style={{ padding: '30px 30px 0 0' }}>
                        <h1>More Than Just App</h1>
                        <p style={{ fontSize: '22px', lineHeight: '30px', paddingTop: '17px', paddingRight: '5%' }}>We offer professional web design services at affordable rates to help your business attract more visitors!</p>
                        <p>We start from structuring information architecture and mapping out functionalities. We start from structuring information architecture and mapping out functionalities. We start from structuring information architecture and mapping out functionalities.</p>
                        <p>Our professional app developers build custom mobile apps to assist in the growth of your business. Our professional app developers build custom mobile apps to assist in the growth of your business. Our professional app developers build custom mobile apps to assist in the growth of your business.</p>
                    </div>
                    <div>
                        <img src='/assets/services/web-design/web-design-intro.jpg' alt='Web Design Services' width={500} height={408} style={{ borderRadius: '20px' }} />
                    </div>
                </div>
                <section className={classNames(styles.services)}>
                    <div className='container'>
                    <h2>Software Development Service</h2>
                    <p>At FiveSenseTechnology, we understand the importance of robust and scalable software in today's fast-paced business environment. Our software development services are tailored to meet the unique needs of your business, providing solutions that drive efficiency and growth.</p>
                    <div className='customGrid'>
                        <div className={classNames(styles.items)}>
                            <MdDesignServices />
                            <div>
                                <h3>Nearshore Development</h3>
                                <p>Our nearshore software development services offer you the perfect blend of high-quality software solutions and the convenience of working in similar time zones. This approach ensures seamless communication, reducing any potential barriers that might arise due to geographical differences. </p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <FaCode />
                            <div>
                                <h3>Offshore Development</h3>
                                <p>Our offshore teams consist of highly skilled people dedicated to delivering top-notch software solutions. We understand the importance of quality, and our rigorous development process ensures that every project meets the highest standards.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <PiDesktopTowerLight />
                            <div>
                                <h3>Web App Development</h3>
                                <p>Our web application development services are crafted to help your business succeed in today's digital industry. We specialize in crafting web applications that are not only visually impressive but also quite functional, ensuring your customers are engaged and satisfied. </p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BiSolidBookContent />
                            <div>
                                <h3>Mobile App Development</h3>
                                <p>Our mobile app development services are designed to bring your vision to life on mobile platforms. We develop intuitive and user-friendly mobile apps tailored to your specific needs. Whether you want to reach customers on Android, iOS, or both, our team creates apps that look great and function seamlessly.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BsGraphUpArrow />
                            <div>
                                <h3>Enterprise Software Solutions</h3>
                                <p>Our websites generate more leads for your business, which means more money in your pocket.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Database Design and Management</h3>
                                <p>Our experts have proven expertise in developing and delivering effective digital marketing strategies.</p>
                            </div>
                        </div>

                       

                    </div>
                    </div>
                    
                </section>

                <div>
                    <h2 >How It Is Going</h2>
                    <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
                </div>
                <DesignProcess />
                
                </div>
                <CounterSection />                
                
            
            <Portfolio />
            

            <EnquiryForm />


        </main>
    )
}
