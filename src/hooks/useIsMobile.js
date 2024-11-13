import {
    useState,
    useEffect
} from "react";
const getIsMobile = () => {
    if (typeof window !== "undefined") {
        return window?.innerWidth <= 768;
    }
};
const checkMobileAgent = () => {
    const userAgent = navigator.userAgent;
    const mobileRegex = /android|avantgo|blackberry|iemobile|ipad|iphone|ipod|j2me|midp|mobile|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    return mobileRegex.test(userAgent);
};
export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());
    useEffect(() => {
        const onResize = () => {
            const isMobilePlatform = checkMobileAgent() && getIsMobile();
            setIsMobile(isMobilePlatform);
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return isMobile;
}