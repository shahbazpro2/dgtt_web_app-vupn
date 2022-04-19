import { ChevronRightIcon } from "@fluentui/react-icons-mdl2";
import { Button, Col, Form, Row } from "antd";
import { useState } from "react";
import FloatDatePicker from "../../../common/components/FloatDatePicker";
import FloatInput from "../../../common/components/FloatInput";

interface ProductTypes {
    real_estate: boolean,
    movables: boolean,
    other: boolean,
}

const defaultProductTypes = {
    real_estate: false,
    movables: false,
    other: false,
}

const AuctionFilter = () => {
    const [form] = Form.useForm();
    const [selectedProductType, setSelectedProductType] = useState<ProductTypes>(defaultProductTypes)

    const selectProduct = (type: "real_estate" | "movables" | "other") => {
        setSelectedProductType({
            ...selectedProductType,
            [type]: !selectedProductType[type],
        })

    }

    return (
        <Form
            className="custom-form"
            name="register"
            form={form}
            colon={false}
        // onValuesChange={onValuesChange}
        >
            <div className="font-size-16 font-bold">Loại tài sản</div>
            <Row style={{ marginTop: 5 }} gutter={[0, 15]}>
                <Col span={24}>
                    <div
                        className={selectedProductType.real_estate ? "filter-button active" : "filter-button"}
                        onClick={() => selectProduct("real_estate")}>
                        Bất động sản
                    </div>
                </Col>
                <Col span={24}>
                    <div
                        onClick={() => selectProduct("movables")}
                        className={selectedProductType.movables ? "filter-button active" : "filter-button"}>
                        Động sản
                    </div>
                </Col>
                <Col span={24}>
                    <div
                        onClick={() => selectProduct("other")}
                        className={selectedProductType.other ? "filter-button active" : "filter-button"}>
                        Tài sản khác
                    </div>
                </Col>
            </Row>
            <div className="font-size-16 font-bold" style={{ marginTop: 25 }}>Giá khởi điểm (VNĐ)</div>
            <Row style={{ marginTop: 5 }} gutter={[0, 15]}>
                <Col span={24}>
                    <Button className="filter-button">
                        <Row align="middle">
                            <Col span={10}>
                                Từ 0
                            </Col>
                            <Col span={4}>
                                <ChevronRightIcon />
                            </Col>
                            <Col span={10}>
                                Đến 100 triệu
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col span={24}>
                    <Button className="filter-button">
                        <Row align="middle">
                            <Col span={10}>
                                Từ 100 triệu
                            </Col>
                            <Col span={4}>
                                <ChevronRightIcon />
                            </Col>
                            <Col span={10}>
                                Đến 500 triệu
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col span={24}>
                    <Button className="filter-button">
                        <Row align="middle">
                            <Col span={10}>
                                Từ 500 triệu
                            </Col>
                            <Col span={4}>
                                <ChevronRightIcon />
                            </Col>
                            <Col span={10}>
                                Đến 01 tỷ
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col span={24}>
                    <Button className="filter-button">
                        <Row align="middle">
                            <Col span={10}>
                                Từ 01 tỷ
                            </Col>
                            <Col span={4}>
                                <ChevronRightIcon />
                            </Col>
                            <Col span={10}>
                                Đến 10 tỷ
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col span={24}>
                    <Button className="filter-button">
                        <Row align="middle">
                            <Col span={10}>
                                Từ 10 tỷ
                            </Col>
                            <Col span={4}>
                                <ChevronRightIcon />
                            </Col>
                            <Col span={10}>
                                Đến 50 tỷ
                            </Col>
                        </Row>
                    </Button>
                </Col>
                <Col span={24}>
                    <Button className="filter-button">
                        Từ trên 50 tỷ
                    </Button>
                </Col>
            </Row>
            <div className="font-size-16 font-bold" style={{ marginTop: 25 }}>Thời gian đấu giá</div>
            <Row style={{ marginTop: 5 }} gutter={10}>
                <Col span={12}>
                    <Form.Item
                        name="fromDate"
                        style={{ marginBottom: 0 }}>
                        <FloatDatePicker label="" placeholder="Từ ngày" className="filter-picker" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="toDate"
                        style={{ marginBottom: 0 }}>
                        <FloatDatePicker label="" placeholder="Đến ngày" className="filter-picker" />
                    </Form.Item>
                </Col>
            </Row>
            <div className="font-size-16 font-bold" style={{ marginTop: 25 }}>Tên tài sản</div>
            <Row style={{ marginTop: 5 }}>
                <Col span={24}>
                    <Form.Item
                        name="name"
                        style={{ marginBottom: 0 }}>
                        <FloatInput label="" placeholder="Đến ngày" className="filter-input" />
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{ marginTop: 30 }} align="middle" gutter={10}>
                <Col span={12}>
                    <Button className="button-gray" style={{ height: 45 }} block>NHẬP LẠI</Button>
                </Col>
                <Col span={12}>
                    <Button className="button-light-yellow" style={{ height: 45 }} block>TÌM KIẾM</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AuctionFilter;