
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import { seoData } from './helper/herobanner/seo';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const pathname = usePathname();  
  function getSeoData(){
    const metaData = seoData.find(page => page.pageUrl === pathname);
    console.log(metaData, 'metaData');
    return metaData    
  }
  const metaData = getSeoData();

  return (
    <html lang="en">
      <Head>
        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
        {/* <meta name='titile' content={metaData?.metaTitle}/> */}
        <title>{metaData?.metaTitle}</title>
        <meta name='keywords' content={metaData?.metaKeywords}/>
        <meta name='description' content={metaData?.metaDescription}/>        
      </Head>


      <body className={inter.className}>
        <Header />
        <HeroBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}