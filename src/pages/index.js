import EnquiryForm from '@/app/components/EnquiryForm'
import IntroSection from '@/app/components/IntroSection'
import ServiceSection from '@/app/components/ServiceSection'
import Image from 'next/image'


export default function Home() {
    return (
        <main>            
            <IntroSection />
            <ServiceSection />            
            <EnquiryForm />
            

        </main>
    )
}
