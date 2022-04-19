import { Col, Row } from "antd";
import { format } from "date-fns";
import ItemImage from '../../../assets/images/item_image.png';

const NewsItem = () => {
    return (
        <Row className="news-item" align="middle" justify="center" gutter={20}>
            <Col span={8} style={{ paddingLeft: 0, height: '100%', width: '100%' }}>
                <img alt="example" src={ItemImage} style={{ objectFit: 'cover', maxHeight: '100%' }} />
            </Col>
            <Col span={16} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <span className="font-size-14" style={{ color: '#787885' }}>{format(new Date(), 'dd/MM/yyyy HH:mm')}</span>
                <span className="font-size-18">Siêu xe Batmobile được bán đấu giá từ 27.800 USD</span>
            </Col>
        </Row>
    )
}

export default NewsItem;