import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import { format, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemImage from '../../../assets/images/item_image.png';

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

const ItemListCard = () => {
    const [countdown, setCountdown] = useState<Countdown>(defaultCountdown);
    const [isFavoriteHovering, setIsFavoriteHovering] = useState(false);
    const navigate = useNavigate()

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

    const onFavoriteMouseOver = () => {
        setIsFavoriteHovering(true);
    }

    const onFavoriteMouseOut = () => {
        setIsFavoriteHovering(false);
    }

    return (
        <Row className="item-list-card" gutter={30} onClick={() => navigate('/auction-item/12')}>
            <Col span={5} style={{ marginLeft: -15 }}>
                <img
                    alt="example"
                    src={ItemImage}
                    className="item-card-cover"
                    style={{ borderRadius: '15px 0px 0px 15px', width: '100%', height: 200, objectFit: 'cover' }} />
            </Col>
            <Col span={19}>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                    <div>
                        <span className="font-size-12">Giá khởi điểm: </span><span className="font-size-18 font-bold">1.000.000 VNĐ</span>
                    </div>
                    <div className="item-card-action-list">
                        <Space size={5}>
                            <div className="item-card-time">{countdown.day}</div>
                            <div className="item-card-time">{countdown.hour}</div>
                            <div className="item-card-time">{countdown.minute}</div>
                            <div className="item-card-time">{countdown.second}</div>
                        </Space>
                        <div style={{ alignSelf: 'center', marginLeft: 20 }} onMouseEnter={onFavoriteMouseOver} onMouseLeave={onFavoriteMouseOut}>
                            {isFavoriteHovering ?
                                <HeartFilled style={{ color: '#E59F17', fontSize: 25 }} /> :
                                <HeartOutlined style={{ color: 'black', fontSize: 25 }} />
                            }

                        </div>
                    </div>
                </div>
                <div className="font-size-18">
                    Cây sanh ngàn năm thế cực kỳ giá trị, vô cùng hiếm có
                </div>
                <div style={{ marginTop: 40, display: 'flex', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>
                    <div>
                        <span className="font-size-12">Thời gian đấu giá: </span>
                        <span className="font-size-12 font-bold">{format(new Date(2022, 3, 30, 14, 0, 0), "dd/MM/yyyy - HH:mm")}</span>
                    </div>
                    <Space size={10}>
                        <Button className="button-gray" style={{ width: 110 }}>XEM CHI TIẾT</Button>
                        <Button className="button-light-yellow" style={{ width: 110 }}>ĐĂNG KÝ</Button>
                    </Space>
                </div>
            </Col>
        </Row>
    )
}

export default ItemListCard;