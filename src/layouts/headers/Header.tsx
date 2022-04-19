import { useLocation } from "react-router-dom";
import HeaderCarousel from "./components/HeaderCarousel";
import HeaderInfo from "./components/HeaderInfo";
import HeaderMenu from "./components/HeaderMenu";

const Header = () => {
    let location = useLocation();
    console.log('location', location)
    return (
        <>
            <HeaderInfo />
            <HeaderMenu />
            {['/profile'].includes(location.pathname) ? null : <HeaderCarousel />}
        </>
    )
}

export default Header;