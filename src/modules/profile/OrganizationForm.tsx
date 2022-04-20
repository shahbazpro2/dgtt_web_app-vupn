import { Button, Col, Form, Row, Select, Upload } from "antd";
import Box from '../common/components/Box'
import { FloatInput, FloatTextArea } from '../common/components/Index'
import { useState } from 'react';
import FloatDatePicker from "../common/components/FloatDatePicker";
import { PlusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const OrganizationForm = () => {
    const [form] = Form.useForm();
    const [count, setCount] = useState<any>([]);

    const onValuesChange = (changedValues: any) => {
        let key = Object.keys(changedValues)[0];
        let value = changedValues[key];
        if (typeof (value === "string")) {
            setCount({
                ...count,
                [key]: value.length,
            });
        }
    }
    const uploadButton = (
        <div>
            <PlusCircleOutlined style={{ fontSize: 40, color: '#c9c9c9' }} />
        </div>
    );
    return (
        <div>
            <Form
                className="custom-form"
                style={{ marginTop: 25, marginBottom: 45 }}
                name="personalRegister"
                form={form}
                colon={false}
                onValuesChange={onValuesChange}
            >
                <div style={{ marginBottom: '10px' }}>
                    <Box>
                        <h3 style={{ fontWeight: 'bold' }}>Thông tin tổ chức</h3>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
                                    name="organizationName"
                                    rules={[{ required: true, message: "Vui lòng nhập tên tổ chức" }]}>
                                    <FloatInput label="Tên tổ chức" placeholder="Tên tổ chức" />
                                </Form.Item>
                                <label className="input-show-count">{count.organizationName || 0}/100</label>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="businessRegNumber"
                                    rules={[{ required: true, message: "Vui lòng nhập số ĐKKD" }]}>
                                    <FloatInput label="Số ĐKKD" placeholder="Số ĐKKD" />
                                </Form.Item>
                                <label className="input-show-count">{count.organizationName || 0}/20</label>
                            </Col>
                        </Row>
                        <Row gutter={30}>
                            <Col span={24}>
                                <Form.Item
                                    name="file"
                                    rules={[{ required: true, message: "Vui lòng nhập file" }]}>
                                    <FloatInput type="file" label="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <h3>Địa chỉ:</h3>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
                                    name="city"
                                >
                                    <Select placeholder="Tình/ Thành phố" className="custom-select"></Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="district"
                                >
                                    <Select placeholder="Quận/ Huyện" className="custom-select"></Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
                                    name="wards"
                                >
                                    <Select placeholder="Phường/ Xã" className="custom-select"></Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="address"
                                    rules={[{ required: true, message: "Vui lòng nhập nhập địa chỉ chi tiết,...." }]}>
                                    <FloatTextArea label="Nhập địa chỉ chi tiết,..." placeholder="Nhập địa chỉ chi tiết,..." />
                                </Form.Item>
                                <label className="input-show-count">{count.address || 0}/200</label>
                            </Col>
                        </Row>
                    </Box>
                </div>
                <Box>
                    <h3 style={{ fontWeight: 'bold' }}>Thông tin chung</h3>

                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: "Vui lòng nhập họ và tên." }]}>
                                <FloatInput label="Họ và tên" placeholder="Họ và tên" maxLength={50} />
                            </Form.Item>
                            <label className="input-show-count">{count.name || 0}/50</label>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="sex"
                            >
                                <Select placeholder="Giới tính" className="custom-select">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="dateOfBirth"
                                style={{ marginBottom: 0 }}>
                                <FloatDatePicker label="" placeholder="Ngày sinh" className="filter-picker bg-white" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="identityCard"
                                rules={[{ required: true, message: "Vui lòng nhập CCCD/ CMND/ Hộ chiếu." }]}>
                                <FloatInput label="CCCD/ CMND/ Hộ chiếu" placeholder="CCCD/ CMND/ Hộ chiếu" maxLength={20} />
                            </Form.Item>
                            <label className="input-show-count">{count.identityCard || 0}/20</label>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="number"
                                rules={[{ required: true, message: "Vui lòng nhập Số điện thoại." }]}>
                                <FloatInput label="Số điện thoại" placeholder="Số điện thoại" maxLength={20} />
                            </Form.Item>
                            <label className="input-show-count">{count.number || 0}/20</label>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="Date"
                                style={{ marginBottom: 0 }}>
                                <FloatDatePicker label="" placeholder="Ngày cấp" className="filter-picker bg-white" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: "Vui lòng nhập email." }]}>
                                <FloatInput type="email" label="Email" placeholder="Email" maxLength={20} />
                            </Form.Item>
                            <label className="input-show-count">{count.email || 0}/20</label>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="issued_by"
                            >
                                <Select placeholder="Nơi cấp" className="custom-select"></Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <h3 style={{ marginTop: '30px' }}>Ảnh CCCD/ CMND/ Hộ chiếu:</h3>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                                {uploadButton}
                            </Upload>
                        </Col>
                        <Col span={12}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                                {uploadButton}
                            </Upload>
                        </Col>
                    </Row>


                    <h3 style={{ marginTop: '30px' }}>Địa chỉ:</h3>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="city"
                                rules={[{ required: true, message: "Vui lòng nhập tình/ Thành phố." }]}>
                                <FloatInput label="Tình/ Thành phố" placeholder="Tình/ Thành phố" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="district"
                                rules={[{ required: true, message: "Vui lòng nhập quận/ Huyện." }]}>
                                <FloatInput label="Quận/ Huyện" placeholder="Quận/ Huyện" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="wards"
                                rules={[{ required: true, message: "Vui lòng nhập phường/ Xã." }]}>
                                <FloatInput label="Phường/ Xã" placeholder="Phường/ Xã" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                rules={[{ required: true, message: "Vui lòng nhập nhập địa chỉ chi tiết,...." }]}>
                                <FloatTextArea label="Nhập địa chỉ chi tiết,..." placeholder="Nhập địa chỉ chi tiết,..." />
                            </Form.Item>
                            <label className="input-show-count">{count.address || 0}/200</label>
                        </Col>
                    </Row>

                </Box>
                <div style={{ marginTop: '10px' }}>
                    <Box>
                        <h3 style={{ fontWeight: 'bold' }}>Thông tin tài khoản ngân hàng (nhận hoàn tiền đặt trước)</h3>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
                                    name="bankAccount"
                                    rules={[{ required: true, message: "Vui lòng nhập STK ngân hàng...." }]}>
                                    <FloatInput label="STK ngân hàng..." placeholder="STK ngân hàng..." />
                                </Form.Item>
                                <label className="input-show-count">{count.bankAccount || 0}/20</label>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="bank"
                                    rules={[{ required: true, message: "Vui lòng nhập ngân hàng." }]}>
                                    <FloatInput label="Ngân hàng" placeholder="Ngân hàng" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
                                    name="accountHolder"
                                    rules={[{ required: true, message: "Vui lòng nhập chủ tài khoản...." }]}>
                                    <FloatInput label="Chủ tài khoản..." placeholder="Chủ tài khoản..." />
                                </Form.Item>
                                <label className="input-show-count">{count.accountHolder || 0}/50</label>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="branch"
                                    rules={[{ required: true, message: "Vui lòng nhập chi nhánh." }]}>
                                    <FloatInput label="Chi nhánh" placeholder="Chi nhánh" />
                                </Form.Item>
                            </Col>

                        </Row>
                    </Box>

                    <Row style={{ marginTop: 45 }} align="middle" justify="center">
                        <Button className="button-light-yellow" style={{ height: 50, width: 240, fontSize: 16 }}>Cập nhật</Button>
                    </Row>
                </div>
            </Form >
        </div>
    )
}

export default OrganizationForm