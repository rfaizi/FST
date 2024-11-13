import EnquiryForm from '@/app/components/EnquiryForm'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import HeroBanner from '@/app/components/HeroBanner'
import IntroSection from '@/app/components/IntroSection'
import ServiceSection from '@/app/components/ServiceSection'
import Image from 'next/image'


export default function Home() {
    return (
        <main>
            <Header />
            <HeroBanner />
            <IntroSection />
            <ServiceSection />
            {/* <Portfolio /> */}
            <EnquiryForm />
            <Footer />

        </main>
    )
}
