import { Button, Col, Form, Row, Select } from "antd";
import Box from '../common/components/Box'
import { FloatInput, FloatTextArea } from '../common/components/Index'
import { useState } from 'react';
import FloatDatePicker from "../common/components/FloatDatePicker";

const PersonalForm = () => {
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
    return (
        <div>
            <Box>
                <h3 style={{ fontWeight: 'bold' }}>Thông tin chung</h3>
                <Form
                    className="custom-form"
                    style={{ marginTop: 25, marginBottom: 45 }}
                    name="register"
                    form={form}
                    colon={false}
                    onValuesChange={onValuesChange}
                >
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
                                name="district"
                            >
                                <Select placeholder="Giới tính" className="custom-select"></Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="fromDate"
                                style={{ marginBottom: 0 }}>
                                <FloatDatePicker label="" placeholder="Ngày sinh" className="filter-picker bg-white" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="district"
                            >
                                <Select placeholder="Quận/huyện" className="custom-select"></Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: "Vui lòng nhập mật khẩu." }]}>
                                <FloatInput label="Mật khẩu" placeholder="Mật khẩu" maxLength={20} isPassword={true} />
                            </Form.Item>
                            <label className="input-show-count">{count.password || 0}/20</label>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="ward"
                            >
                                <Select placeholder="Phường/xã" className="custom-select"></Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <div style={{ position: 'relative' }}>
                                <Form.Item
                                    name="confirmPassword"
                                    dependencies={["password"]}
                                    rules={[
                                        { required: true, message: "Vui lòng nhập lại mật khẩu." },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Mật khẩu nhập lại không khớp!'));
                                            },
                                        }),
                                    ]}>
                                    <FloatInput label="Nhập lại mật khẩu" placeholder="Nhập lại mật khẩu" maxLength={20} isPassword={true} />
                                </Form.Item>
                                <label className="input-show-count" style={{ bottom: -4, right: 10 }}>{count.confirmPassword || 0}/20</label>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <Form.Item
                                    name="phone"
                                    rules={[
                                        { required: true, message: "Vui lòng nhập số điện thoại." },
                                    ]}>
                                    <FloatInput label="Số điện thoại" placeholder="Số điện thoại" maxLength={20} />
                                </Form.Item>
                                <label className="input-show-count" style={{ bottom: -4, right: 10 }}>{count.phone || 0}/20</label>
                            </div>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address">
                                <FloatTextArea label="Địa chỉ" placeholder="Nhập địa chỉ số nhà,..." maxLength={200} style={{ height: 125 }} />
                            </Form.Item>
                            <label className="input-show-count">{count.address || 0}/200</label>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 45 }} align="middle" justify="center">
                        <Button className="button-light-yellow" style={{ height: 50, width: 240, fontSize: 16 }}>ĐĂNG KÝ</Button>
                    </Row>

                    <Row style={{ marginTop: 35 }} align="middle" justify="center">
                        <span>Bạn đã có tài khoản?<span className="anchor-text" > Đăng nhập ngay</span></span>
                    </Row>
                </Form >
            </Box>
        </div>
    )
}

export default PersonalForm