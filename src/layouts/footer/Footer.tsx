import { Row, Col, Space, Select } from 'antd';
import { ReactComponent as POI } from '../../assets/images/POI.svg';
import { ReactComponent as Phone } from '../../assets/images/phone.svg';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';

const Footer = () => {
    return (
        <Row className='footer' justify='center'>
            <Col span={16} className="footer-info">
                <Row>
                    <Col span={16}>
                        <Space>
                            <div className='header-logo'>
                                <span style={{ color: "rgba(182, 124, 11, 1)", fontSize: 18 }}>Logo</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="font-size-24"><span className="font-bold">ĐẤU GIÁ</span> TRỰC TUYẾN</div>
                                <span>TRUNG TÂM DỊCH VỤ ĐẤU GIÁ TÀI SẢN</span>
                            </div>
                        </Space>

                        <div style={{ paddingTop: 60 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <POI style={{ height: 20 }} /><span style={{ paddingLeft: 16 }}>Số 08 Phan Bội Châu, quận Hải Châu, thành phố Đà Nẵng</span>
                            </div>
                            <div style={{ marginTop: 30, display: 'flex', alignItems: 'center' }}>
                                <Phone style={{ height: 20, color: 'black' }} /><span style={{ paddingLeft: 16 }}>(0236) 3889 627 hoặc (0236) 3887 678</span>
                            </div>
                            <div style={{ marginTop: 30, display: 'flex', alignItems: 'center' }}>
                                <Mail style={{ height: 20, color: 'black' }} /><span style={{ paddingLeft: 16 }}>daugia@danang.gov.vn</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', height: '100%' }}>
                            <span className="font-size-18 font-bold">Thông tin chung</span>
                            <Row style={{ marginTop: 30 }} gutter={[0, 18]}>
                                <Col span={14}>
                                    Giới thiệu
                                </Col>
                                <Col span={10}>
                                    Hướng dẫn
                                </Col>
                                <Col span={14}>
                                    Thông tin đấu giá
                                </Col>
                                <Col span={10}>
                                    Tin tức
                                </Col>
                            </Row>
                        </div>
                        <Select placeholder="Liên kết website" style={{ marginTop: 30, width: '100%' }}></Select>
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0206432282453!2d105.78272290000001!3d21.03186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b50e26a67%3A0x6c815bc9efd9bd9e!2zMiBOZ8O1IDgyIFBo4buRIER1eSBUw6JuLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaQ!5e0!3m2!1sen!2s!4v1649838630271!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Col>
        </Row>
    )
}

export default Footer;