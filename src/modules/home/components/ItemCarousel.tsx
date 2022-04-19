import { ChevronLeftIcon, ChevronRightIcon } from '@fluentui/react-icons-mdl2';
import { Carousel } from 'antd';
import { useRef } from 'react';
import ItemCard from '../../common/components/ItemCard';
import { ItemCardStatus } from '../../common/types/types';

interface ButtonProps {
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    onClick?: React.MouseEventHandler<any> | undefined;
    currentSlide?: number | undefined;
    slideCount?: number | undefined;
    children: React.ReactNode;
}

const SlickButton = ({ currentSlide, slideCount, children, ...props }: ButtonProps) => (
    <span {...props}>{children}</span>
);

const ItemCarousel = () => {
    const carousel = useRef<any>(null);

    return (
        <div className="item-carousel">
            <Carousel
                slidesToShow={2}
                slidesToScroll={2}
                ref={carousel}
                arrows={true}
                prevArrow={<SlickButton className="item-carousel-arrow"><ChevronLeftIcon /></SlickButton>}
                nextArrow={<SlickButton className="item-carousel-arrow"><ChevronRightIcon /></SlickButton>}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ItemCard status={ItemCardStatus.NEW} />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ItemCard status={ItemCardStatus.NEW} />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ItemCard status={ItemCardStatus.NEW} />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ItemCard status={ItemCardStatus.NEW} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default ItemCarousel