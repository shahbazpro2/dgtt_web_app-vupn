/* eslint-disable jsx-a11y/img-redundant-alt */
import { Breadcrumb, Button, Col, Divider, Pagination, Radio, RadioChangeEvent, Row, Space, Switch, Tabs } from "antd";
import { Link } from "react-router-dom";
import React, { Component, useState } from 'react'
import { ClockCircleOutlined, EyeFilled, FacebookFilled, HeartFilled } from "@ant-design/icons";
import ItemCard from "../../common/components/ItemCard";
import { ItemCardStatus } from "../../common/types/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";
import TabContent4 from "./TabContent4";
const { TabPane } = Tabs;


const AuctionItem = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [seeMore, setSeeMore] = useState(false)
    const [tabs, setTabs] = useState(1)
    return (
        <div
            style={{
                padding: '77px calc((100vw - 1500px) / 2) 135px',
                background: "#ececec",
                display: 'flex',
                // alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <Breadcrumb separator="  " className="custom-breadcrumb">
                <Breadcrumb.Item>
                    <Link to="">
                        Trang chủ
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Danh sách tài sản
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Chi tiết tài sản
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={70} style={{ marginTop: '30px' }}>
                <Col xs={12}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper1"
                    >
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>

                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img width="100%" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>

                    </Swiper>
                </Col>
                <Col xs={12}>
                    <div style={{ padding: '2px 15px', backgroundColor: '#DCDCDC', display: 'inline-block' }}>
                        <span>Mã tài sản</span>
                        <span className="font-bold"> TT.1221LTS001.0886</span>
                    </div>
                    <h2 style={{ fontWeight: 'bold' }}>Cây sanh ngàn năm thế cực kỳ giá trị, vô cùng hiếm có</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between', lineHeight: '1.2' }}>
                        <div>
                            <div>Giá khởi điểm:</div>
                            <div style={{ fontSize: '26px' }}>1,000,000 VNĐ</div>
                        </div>
                        <div style={{ textAlign: 'right', marginTop: '10px' }}>
                            <div>
                                <small>Thời gian bắt đầu phiên đấu giá:</small>
                            </div>
                            <small style={{ fontWeight: 'bold' }}>15:00:00 16/12/2021</small>
                        </div>
                    </div>
                    <div className="yellow-card">
                        <div>
                            <ClockCircleOutlined style={{ fontSize: '18px' }} />
                            &nbsp;<span> THỜI GIAN BẮT ĐẦU ĐẤU GIÁ CÒN</span>
                        </div>
                        <div className="item-card-action-list yellow-action-list">
                            <Space size={5}>
                                <div className="item-card-time">7</div>
                                <div className="item-card-time">16</div>
                                <div className="item-card-time">48</div>
                                <div className="item-card-time">29</div>
                            </Space>
                        </div>
                    </div>

                    <div className="list-details" style={{ marginTop: '30px' }}>
                        <div>
                            <span>Bước giá:</span>
                            <span style={{ fontWeight: 'bold' }}> 1,000,000 VNĐ</span>
                        </div>
                        <div>
                            <span>Tiền đặt trước:</span>
                            <span style={{ fontWeight: 'bold' }}> 100.000 VNĐ</span>
                        </div>
                        <div>
                            <span>Thời gian đăng ký tham gia:</span>
                            <span style={{ fontWeight: 'bold' }}> Từ 14:30:00 16/12/2021 đến 14:29:59 16/12/2021</span>
                        </div>
                        <div>
                            <span>Thời gian nộp tiền đặt trước:</span>
                            <span style={{ fontWeight: 'bold' }}> Từ 14:30:00 16/12/2021 đến 14:29:59 16/12/2021</span>
                        </div>
                        <div>
                            <span>Hình thức đấu giá trực tuyến:</span>
                            <span style={{ fontWeight: 'bold' }}> Trả giá không xác định vòng
                            </span>
                        </div>
                        <div>
                            <span>Phương thức trả giá:</span>
                            <span style={{ fontWeight: 'bold' }}> Trả giá lên</span>
                        </div>
                        <div>
                            <span>Thời gian trả giá:</span>
                            <span style={{ fontWeight: 'bold' }}> 12 phút</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <Row gutter={30}>
                            <Col xs={12}>
                                <Divider style={{ marginBottom: '15px' }} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div className="vh-center">
                                        <EyeFilled style={{ fontSize: 25 }} />
                                        <span>&nbsp;1890</span>
                                    </div>
                                    <div className="vh-center">
                                        <HeartFilled style={{ color: '#E59F17', fontSize: 25 }} />
                                        <span>&nbsp;1890</span>
                                    </div>
                                    <div className="vh-center">
                                        <span>Chia sẻ:&nbsp;</span>
                                        <img width={25} src={require('../../../assets/images/mess.png')} alt="facebook" />
                                        <img width={25} src={require('../../../assets/images/facebook.png')} alt="facebook" />
                                        <img width={25} src={require('../../../assets/images/zalo.png')} alt="facebook" />
                                    </div>
                                </div>
                                <Divider style={{ marginTop: '15px' }} />
                            </Col>
                            <Col xs={12}>
                                <div className="vh-center">
                                    <Button className="button-light-yellow" style={{ height: 50, width: 240, fontSize: 16 }}>Đăng ký bán đấu giá</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
            <Row justify="center">
                <Col xs={20}>
                    <div style={{ marginTop: '80px', borderRadius: '15px', background: 'white', padding: '70px 50px 140px 50px', position: 'relative' }}>
                        <div className="tab">
                            <Tabs type="card" className="custom-tab" onChange={(tab) => { setTabs(Number(tab)); setSeeMore(false) }}>
                                <TabPane tab="THÔNG TIN TÀI SẢN" key="1">
                                </TabPane>
                                <TabPane tab="THÔNG TIN TỔ CHỨC ĐẤU GIÁ / NGƯỜI CÓ TÀI SẢN" key="2">
                                </TabPane>
                                <TabPane tab="QUY CHẾ ĐẤU GIÁ" key="3">
                                </TabPane>
                                <TabPane tab="TÀI LIỆU LIÊN QUAN" key="4">
                                </TabPane>
                            </Tabs>
                        </div>
                        {/* <div className="tab">
                            <div className="tab-item active" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}>
                                THÔNG TIN TÀI SẢN
                            </div>
                            <div className="tab-item">
                                THÔNG TIN TỔ CHỨC ĐẤU GIÁ / NGƯỜI CÓ TÀI SẢN
                            </div>
                            <div className="tab-item">
                                QUY CHẾ ĐẤU GIÁ
                            </div>
                            <div className="tab-item">
                                TÀI LIỆU LIÊN QUAN
                            </div>
                        </div> */}
                        {tabs === 1 && <TabContent1 seeMore={seeMore} setSeeMore={setSeeMore} />}
                        {tabs === 2 && <TabContent2 seeMore={seeMore} setSeeMore={setSeeMore} />}
                        {tabs === 3 && <TabContent3 seeMore={seeMore} setSeeMore={setSeeMore} />}
                        {tabs === 4 && <TabContent4 seeMore={seeMore} setSeeMore={setSeeMore} />}

                    </div>

                </Col>
            </Row>
            <div style={{ marginTop: '100px', textAlign: 'center', marginBottom: '10px' }}>
                <h1 style={{ color: 'black', letterSpacing: '0.1em' }}>TÀI SẢN khác</h1>
            </div>
            <Row gutter={5}>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
                <Col xs={4}>
                    <ItemCard status={ItemCardStatus.NEW} />
                </Col>
            </Row>

        </div>
    )
}

export default AuctionItem