import { Carousel } from "antd";
import Background from '../../../assets/images/demo_banner.png';

const HeaderCarousel = () => {
    return (
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
    )
}

export default HeaderCarousel;