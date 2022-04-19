import { Button, Col, Row } from 'antd';
import RegisterImg from '../../../assets/images/register-banner.png';

const RegisterBanner = () => {
    return (
        <Row className="register-banner" align='middle' justify='space-between' gutter={80}>
            <Col span={12}>
                <img alt="register" src={RegisterImg} style={{ maxWidth: '100%' }} />
            </Col>
            <Col span={12}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <span className="font-size-28 font-bold">ĐĂNG KÝ BÁN TÀI SẢN</span>
                    <span className="font-size-22" style={{ marginTop: 25 }}>Bạn có thể đăng ký trực tuyến tại website hoặc liên hệ với chúng tôi qua số HOTLINE: 0905.156.237.</span>
                    <span className="font-size-16">Tổ chức sẽ liên hệ làm việc trực tiếp với bạn trong thời gian sớm nhất</span>
                    <Button className="button-light-yellow register-button">ĐĂNG KÝ BÁN ĐẤU GIÁ</Button>
                </div>
            </Col>
        </Row>
    )
}

export default RegisterBanner;