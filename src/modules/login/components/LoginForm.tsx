import { Button, Checkbox, Col, Form, Row } from "antd"
import { Link } from "react-router-dom";
import { FloatInput } from "../../common/components/Index";

interface ModalProps {
    openRegister: () => void,
    openForgotPassword: () => void
}

const LoginForm = ({ openRegister, openForgotPassword }: ModalProps) => {
    const [form] = Form.useForm();

    const onValuesChange = (changedValues: any) => {
        console.log(changedValues);
    }

    return (
        <Form
            className="custom-form"
            style={{ marginTop: 35, marginBottom: 45 }}
            name="login"
            form={form}
            colon={false}
            onValuesChange={onValuesChange}
        >
            <Row align="middle" justify="center">
                <Col span={12}>
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: "Vui lòng nhập tên tài khoản." }
                        ]}
                    >
                        <FloatInput label="Email hoặc Số điện thoại" placeholder="Email hoặc số điện thoại" />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" justify="center">
                <Col span={12}>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: "Vui lòng nhập mật khẩu." }
                        ]}
                    >
                        <FloatInput label="Mật khẩu" placeholder="Mật khẩu" isPassword />
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle" justify="center">
                <Col span={10} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Form.Item
                        noStyle
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className="custom-checkbox">Nhớ tài khoản</Checkbox>
                    </Form.Item>
                    <span className="anchor-text" onClick={openForgotPassword}>Quên mật khẩu?</span>
                </Col>
            </Row>
            <Row style={{ marginTop: 25 }} align="middle" justify="center">
                <Button className="button-light-yellow" style={{ height: 50, width: 240, fontSize: 16 }}>ĐĂNG NHẬP</Button>
            </Row>
            <Row style={{ marginTop: 50 }} align="middle" justify="center">
                <Button style={{ height: 50, width: 240, fontSize: 14, borderRadius: 10 }}>Đăng nhập bằng Google</Button>
            </Row>
            <Row style={{ marginTop: 35 }} align="middle" justify="center">
                <span>Bạn chưa có tài khoản?<span className="anchor-text" onClick={openRegister}> Đăng ký ngay</span></span>
            </Row>
        </Form>
    )
}

export default LoginForm