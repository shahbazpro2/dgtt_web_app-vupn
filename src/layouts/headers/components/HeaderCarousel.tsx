import { Button, Carousel } from "antd";
import Background from '../../../assets/images/demo_banner.png';

const HeaderCarousel = () => {
    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', zIndex: 2, color: 'white', display: 'flex', alignItems: 'center', width: '100%', height: '100%', paddingLeft: '200px' }}>
                <div style={{ lineHeight: 1 }}>
                    <div style={{ fontFamily: 'SVN-Helga', fontSize: '144px' }}>Gốm men ngọc</div>
                    <div style={{ marginLeft: '90px' }}>
                        <div style={{ fontSize: '36px' }}>Tuyệt diêu Đại Việt</div>
                        <Button className="button-light-yellow" style={{ height: 50, width: 240, fontSize: 16, marginTop: '60px' }}>Đăng ký bán đấu giá</Button>
                    </div>
                </div>
            </div>
            <Carousel className="header-carousel">
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${Background})`,
                            width: '100%',
                            height: 680,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${Background})`,
                            width: '100%',
                            height: 680,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${Background})`,
                            width: '100%',
                            height: 680,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HeaderCarousel;