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
export default function WebDesign() {
    return (
        <main>
            <Usp />
            <div className='container'>
                <div>
                    <h2 >How It Is Going</h2>
                    <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
                </div>
                <DesignProcess />
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
                </div>
                <CounterSection />                
                <section className={classNames(styles.services)}>
                    <div className='container'>
                    <h2>Our Web Designers Offer a Full Design and Development Service</h2>
                    <p>TheeDigital is a full service web design agency, providing website design and web development services to businesses.</p>
                    <div className='customGrid'>
                        <div className={classNames(styles.items)}>
                            <MdDesignServices />
                            <div>
                                <h3>Custom web design service</h3>
                                <p>Crafting unique user experiences specifically for your business and user segments.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <FaCode />
                            <div>
                                <h3>Custom programming</h3>
                                <p>Innovative web applications tailor-made for your specific online business requirements.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <PiDesktopTowerLight />
                            <div>
                                <h3>Responsive mobile site design</h3>
                                <p>Mobile and tablet-friendly websites that look great on any size screen and any device.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BiSolidBookContent />
                            <div>
                                <h3>Content management system experts</h3>
                                <p>Our web development experts design and implement CMS solutions that meet your exact needs.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <BsGraphUpArrow />
                            <div>
                                <h3>Lead generation websites</h3>
                                <p>Our websites generate more leads for your business, which means more money in your pocket.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <GiDeadEye />
                            <div>
                                <h3>Marketing websites</h3>
                                <p>Our experts have proven expertise in developing and delivering effective digital marketing strategies.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                        <LiaShoppingCartSolid />
                            <div>
                                <h3>Ecommerce site design and development</h3>
                                <p>Professional website design services create beautiful stores that will bring in more website visitors and more conversions.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                            <BsTools />
                            <div>
                                <h3>Ongoing website maintenance</h3>
                                <p>Keep your website safe with regular maintenance and security updates.</p>
                            </div>
                        </div>

                        <div className={classNames(styles.items)}>
                            <FaNetworkWired />
                            <div>
                                <h3>Website hosting services</h3>
                                <p>Safe, secure, and reliable web hosting solutions from a team you can trust.</p>
                            </div>
                        </div>

                        

                    </div>
                    </div>
                    
                </section>

            
            <Portfolio />
            

            <EnquiryForm />


        </main>
    )
}
