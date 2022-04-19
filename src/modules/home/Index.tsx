import { Input } from "antd";
import './assets/css/styles.scss';
import { ReactComponent as Search } from '../../assets/images/Search.svg';
import ItemCarousel from "./components/ItemCarousel";
import AuctionGuide from "./components/AuctionGuide";
import RegisterBanner from "./components/RegisterBanner";
import HomeNews from "./components/HomeNews";

const Home = () => {
    return (
        <div style={{ background: "#e5e5e5", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Input className="search-bar" placeholder="Nhập từ khoá tìm kiếm ..." suffix={<Search />} />

            <div className="section-banner" style={{ marginTop: 80 }}>TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</div>
            <ItemCarousel />

            <div className="section-banner" style={{ marginTop: 80 }}>TÀI SẢN ĐANG ĐƯỢC ĐẤU GIÁ</div>
            <ItemCarousel />

            <AuctionGuide />


            <RegisterBanner />

            <div className="section-banner" style={{ marginTop: 80 }}>TIN TỨC - SỰ KIỆN</div>
            <HomeNews />
        </div>
    )
}

export default Home;