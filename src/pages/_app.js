import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import RootLayout from '@/app/layout';

export default function App({ Component, pageProps }) {
    return <>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    </>;
}