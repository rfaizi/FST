import DesignProcess from '@/app/components/DesignProcess'
import EnquiryForm from '@/app/components/EnquiryForm'



export default function WebDesign() {
    return (
        <main>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }}>
                    <div style={{ padding: '30px 30px 0' }}>
                        <h1>More Than Just App</h1>
                        <p style={{ fontSize: '22px', lineHeight: '30px', paddingTop: '17px', paddingRight: '5%' }}>We offer professional web design services at affordable rates to help your business attract more visitors!</p>
                        <p>We start from structuring information architecture and mapping out functionalities. We start from structuring information architecture and mapping out functionalities. We start from structuring information architecture and mapping out functionalities.</p>
                        <p>Our professional app developers build custom mobile apps to assist in the growth of your business. Our professional app developers build custom mobile apps to assist in the growth of your business. Our professional app developers build custom mobile apps to assist in the growth of your business.</p>
                    </div>
                    <div>
                        <img src='/assets/services/web-design/web-design-intro.jpg' alt='Web Design Services' width={500} height={408} style={{ borderRadius: '20px' }} />
                    </div>
                </div>
                <div>
                    <h2 >How It Is Going</h2>
                    <p>We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
                </div>
                <DesignProcess />
                
                
            </div>


            <EnquiryForm />


        </main>
    )
}
