import { Breadcrumb, Button, Col, Pagination, Radio, RadioChangeEvent, Row, Space, Switch } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuctionFilter from "./components/AuctionFilter";
import './assets/css/styles.scss'
import { BulletedList2Icon, GridViewMediumIcon } from "@fluentui/react-icons-mdl2";
import AuctionListView from "./components/AuctionListView";

const AuctionList = () => {
    const [listView, setListView] = useState(false);
    const [isMine, setIsMine] = useState(false);

    const onViewSelect = (e: RadioChangeEvent) => {
        setListView(e.target.value);
    }

    const onSwitchChange = (checked: boolean) => {
        setIsMine(checked);
    }

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
                    Thông tin đấu giá
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className="font-size-28 font-bold responsive-padding-1500" style={{ paddingTop: 25 }}>TÀI SẢN SẮP ĐƯỢC ĐẤU GIÁ</div>
            <Row gutter={30} className="responsive-padding-1500">
                <Col span={6}>
                    <AuctionFilter />
                </Col>
                <Col span={18}>
                    <Row justify="space-between" align="middle">
                        <Space size={20}>
                            <Radio.Group defaultValue={listView} className="filter-radio-group" onChange={(e) => onViewSelect(e)}>
                                <Radio.Button value={true}>
                                    <BulletedList2Icon style={{ fontSize: 23 }} />
                                </Radio.Button>
                                <Radio.Button value={false}>
                                    <GridViewMediumIcon style={{ fontSize: 23 }} />
                                </Radio.Button>
                            </Radio.Group>
                            <span>Số kết quả phù hợp: <span className="font-bold">208</span></span>
                        </Space>
                        <span style={{ marginRight: 10 }}>Của tôi <Switch checked={isMine} onChange={(checked) => onSwitchChange(checked)} className="custom-switch" /></span>
                    </Row>
                    <AuctionListView type={listView ? "list" : "grid"} />
                    <Row justify="end" align="middle" style={{ marginTop: 35, paddingRight: 37 }}>
                        <Pagination
                            defaultCurrent={1}
                            total={25}
                            pageSize={listView ? 6 : 12}
                            className="custom-pagination"
                        />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AuctionList;