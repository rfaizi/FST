import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function App({ Component, pageProps }) {

    console.log(Component, pageProps, 'jsjsfsfjhsfjhfjh');
    
    return <Component {...pageProps} />;
}