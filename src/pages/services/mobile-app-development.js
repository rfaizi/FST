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
export default function MobileAppDevelopment() {
    return (
        <main>
            <Usp />
            <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }}>
                    <div style={{ padding: '30px 30px 0 0' }}>
                        <h1>We craft custom app development solutions that engage & delight</h1>
                        <p style={{ fontSize: '22px', lineHeight: '30px', paddingTop: '17px', paddingRight: '5%' }}>A Blend of High-Standard Mobile Programming and Creativity</p>
                        <p>As a mobile app development company, Lounge Lizard’s expert Brandtenders develop mobile apps for iOS and Android devices that bring solutions to all types of customer experiences. From smart home applications to education and learning apps to gaming and entertainment apps, our team can take your vision and create a mind-blowing mobile app.</p>
                        
                    </div>
                    <div>
                        <img src='/assets/services/web-design/web-design-intro.jpg' alt='Web Design Services' width={500} height={408} style={{ borderRadius: '20px' }} />
                    </div>
                </div>
                <section className={classNames(styles.services)}>
                    <div className='container'>
                    <h2>Mobile App Development Services</h2>
                    <p>In mobile development since 2005, ScienceSoft creates native, cross-platform and progressive web applications with stable performance, human-centered design and a unique selling proposition to stand out in a fierce market.</p>
                    <div className='customGrid'>
                        <div className={classNames(styles.items)}>
                            <MdDesignServices />
                            <div>
                                <h3>Product design</h3>
                                <p>We analyze the market and your brand identity to spot and manifest your competitive advantage.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <FaCode />
                            <div>
                                <h3>Mobile app consulting</h3>
                                <p>We assist with app concept finalization, advise on platform/device compatibility, plan project activities, and optimize development costs.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <PiDesktopTowerLight />
                            <div>
                                <h3>Mobile app design</h3>
                                <p>Our designers create sleek and intuitive UX and visually appealing UI to ensure conversion, engagement, and easy adoption.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BiSolidBookContent />
                            <div>
                                <h3>Mobile App Development</h3>
                                <p>Our developers create and deploy fast, stable & high-performing mobile apps: 350+ projects we successful implemented is solid proof.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BsGraphUpArrow />
                            <div>
                                <h3>Web development</h3>
                                <p>ScienceSoft is ready to complement your mobile app with a web app, web portal, online store or SaaS.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Mobile app integration</h3>
                                <p>Well-versed in a wide range of APIs, we guarantee seamless integration with back ends and any third-party software.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Testing and QA</h3>
                                <p>Our ISTQB-certified test engineers perform functional, performance, security, UX, and accessibility testing.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Maintenance and support</h3>
                                <p>ScienceSoft offers post-launch L1–L3 support, compliance, security, and performance management & app evolution.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Mobile app modernization</h3>
                                <p>Our developers redesign the architecture, refactor code, and offer new look and feel to legacy mobile apps.</p>
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
