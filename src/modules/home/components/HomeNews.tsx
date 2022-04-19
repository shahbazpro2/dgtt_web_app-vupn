import { Col, Row } from "antd";
import NewsItem from "./NewsItem";

const HomeNews = () => {
    return (
        <div className="home-news">
            <Row align="middle" gutter={[40, 20]}>
                <Col span={8}>
                    <NewsItem />
                </Col>
                <Col span={8}>
                    <NewsItem />
                </Col>
                <Col span={8}>
                    <NewsItem />
                </Col>
                <Col span={8}>
                    <NewsItem />
                </Col>
                <Col span={8}>
                    <NewsItem />
                </Col>
                <Col span={8}>
                    <NewsItem />
                </Col>
            </Row>
        </div>
    )
}

export default HomeNews;