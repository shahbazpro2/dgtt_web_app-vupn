import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import { format, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemImage from '../../../assets/images/item_image.png';
import { ReactComponent as Medal } from '../../../assets/images/medal.svg';
import { ItemCardStatus } from "../types/types";

type CardProps = {
    price?: number,
    description?: string,
    status: ItemCardStatus,
}

interface Countdown {
    day: number,
    hour: number,
    minute: number,
    second: number
}

const defaultCountdown: Countdown = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
}

const ItemCard = ({ price, description, status }: CardProps) => {
    const [countdown, setCountdown] = useState<Countdown>(defaultCountdown);
    const [isFavoriteHovering, setIsFavoriteHovering] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate()
    // const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            let difference = intervalToDuration({ start: new Date(), end: new Date(2022, 3, 30, 14, 0, 0) });
            setCountdown({
                day: difference.days || 0,
                hour: difference.hours || 0,
                minute: difference.minutes || 0,
                second: difference.seconds || 0,
            })
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    const generateCardMeta = () => {
        let title = (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span className="item-card-price-title">{status !== ItemCardStatus.INPROGRESS ? "Giá khởi điểm" : "Giá hiện tại"}</span>
                <div className="item-card-price">1.000.000 VNĐ</div>
            </div>
        )

        let description = (
            <span className="font-size-16 item-card-description">Cây sanh ngàn năm thế cực kỳ giá trị, vô cùng hiếm có</span>
        )

        return (<Card.Meta title={title} description={description} />)
    }

    const onFavoriteMouseOver = () => {
        setIsFavoriteHovering(true);
    }

    const onFavoriteMouseOut = () => {
        setIsFavoriteHovering(false);
    }

    const onCoverMouseOver = () => {
        setIsHovering(true);
    }

    const onCoverMouseOut = () => {
        setIsHovering(false);
    }

    const generateCardCover = () => {
        return (
            <div
                className="item-card-cover"
                onMouseEnter={onCoverMouseOver}
                onMouseLeave={onCoverMouseOut}
            >
                <div className="item-card-action">
                    <Space size={5}>
                        <div className="item-card-time">{countdown.day}</div>
                        <div className="item-card-time">{countdown.hour}</div>
                        <div className="item-card-time">{countdown.minute}</div>
                        <div className="item-card-time">{countdown.second}</div>
                    </Space>
                    <div style={{ alignSelf: 'center' }} onMouseEnter={onFavoriteMouseOver} onMouseLeave={onFavoriteMouseOut}>
                        {isFavoriteHovering ?
                            <HeartFilled style={{ color: '#E59F17', fontSize: 25 }} /> :
                            <HeartOutlined style={{ color: 'white', fontSize: 25 }} />
                        }

                    </div>
                </div>
                {isHovering || status !== ItemCardStatus.NEW ?
                    <div className="item-card-hover-action">
                        {/* Phiên đấu giá mới */}
                        {status === ItemCardStatus.NEW ?
                            <>
                                <div>Thời gian đấu giá:</div>
                                <div className="font-bold">{format(new Date(2022, 3, 30, 14, 0, 0), "dd/MM/yyyy - HH:mm")}</div>

                                <Space style={{ marginTop: 20 }}>
                                    <Button className="button-gray font-size-16">XEM CHI TIẾT</Button>
                                    <Button className="button-light-yellow font-size-16">ĐĂNG KÝ</Button>
                                </Space>
                            </>
                            : <></>
                        }

                        {/* Phiên đấu giá đang diễn ra */}
                        {status === ItemCardStatus.INPROGRESS ?
                            <div className="font-size-18 status-text status-text-green">ĐANG DIỄN RA</div>
                            : <></>
                        }

                        {status === ItemCardStatus.PAUSE ?
                            <div className="font-size-14 status-text status-text-grey">ĐÃ TẠM DỪNG ĐẤU GIÁ</div>
                            : <></>
                        }

                        {status === ItemCardStatus.FAILED ?
                            <div className="font-size-14 status-text status-text-red">ĐẤU GIÁ KHÔNG THÀNH CÔNG</div>
                            : <></>
                        }

                        {status === ItemCardStatus.SUCCESS ?
                            <div className="item-card-success-status">
                                <Medal />
                                <div className="font-size-14 status-text status-text-green">
                                    <span>GIÁ TRÚNG ĐẤU GIÁ</span>
                                    <span>3.500.000 VNĐ</span>
                                </div>
                            </div>
                            : <></>
                        }

                    </div> : <></>}
                <img
                    width='100%'
                    style={{ filter: isHovering || status !== ItemCardStatus.NEW ? "brightness(50%)" : "brightness(1)" }}
                    alt="example"
                    src={ItemImage}
                    className="item-card-cover" />
            </div>
        )
    }

    return (
        <Card
            hoverable
            style={{ borderRadius: '15px', marginRight: 10, marginLeft: 10, maxWidth: 280 }}
            cover={generateCardCover()}
            onClick={() => navigate('/auction-item/12')}
        >
            {generateCardMeta()}
        </Card>
    )
}

export default ItemCard;