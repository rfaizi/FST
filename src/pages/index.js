import EnquiryForm from '@/app/components/EnquiryForm'
import IntroSection from '@/app/components/IntroSection'
import Portfolio from '@/app/components/Portfolio'
import ServiceSection from '@/app/components/ServiceSection'
import Image from 'next/image'


export default function Home() {
    return (
        <main>            
            <IntroSection />
            <ServiceSection />
            <Portfolio />            
            <EnquiryForm />
            

        </main>
    )
}
