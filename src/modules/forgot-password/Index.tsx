import { Button, Col, Form, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import FloatInput from "../common/components/FloatInput";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import ConfirmModal from "../common/components/ConfirmModal";
import { toggleLoginModal } from "../login/redux/LoginSlice";
import { toggleForgotPasswordModal } from "./redux/ForgotPasswordSlice";

const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;

const ForgotPassword = () => {
    const state = useAppSelector(state => state.forgotPassword);
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [enterCode, setEnterCode] = useState(false);
    const [changePass, setChangePass] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
                if (!enterCode && !changePass) {
                    setEnterCode(true);
                } else if (enterCode && !changePass) {
                    setEnterCode(false);
                    setChangePass(true);
                }
            }, 1000)
        }
    }, [loading, enterCode, changePass])

    const toggleVisible = () => {
        setVisible(!visible);
    }

    const openLogin = () => {
        dispatch(toggleForgotPasswordModal());
        dispatch(toggleLoginModal());
    }

    const buttonActions = () => {
        if (!enterCode && !changePass) {
            getCode();
        } else if (enterCode && !changePass) {
            verifyCode();
        } else if (changePass) {
            changePassword();
        }
    }

    const buttonTexts = () => {
        if (!enterCode && !changePass) {
            return "LẤY MÃ XÁC NHẬN";
        }
        return "ĐỔI MẬT KHẨU";
    }

    const getCode = () => {
        form.validateFields(["email"]).then((values) => {
            console.log(values);
            setLoading(true);
        }).catch((err) => {
            console.error(err);
        })
    }

    const verifyCode = () => {
        form.validateFields(["code"]).then((values) => {
            console.log(values);
            setLoading(true);
        }).catch(err => {
            console.error(err);
        })
    }

    const changePassword = () => {
        form.validateFields(["password", "confirmPassword"]).then((values) => {
            // dispatch(toggleForgotPasswordModal());
            toggleVisible();
            console.log("COMPLETE");
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <Modal
            visible={state.modalVisible}
            onCancel={() => dispatch(toggleForgotPasswordModal())}
            className="custom-modal"
            footer={false}
            bodyStyle={{ padding: '60px 0px' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-size-30">Quên mật khẩu</span>
            </div>
            <Form
                className="custom-form"
                style={{ marginTop: 45, marginBottom: 35 }}
                name="register"
                form={form}
                colon={false}
            // onValuesChange={onValuesChange}
            >
                <Row justify="center" align="middle">
                    <Col span={14} className={changePass ? "form-hidden" : "form-show"}>
                        <Form.Item
                            name="email"
                            rules={[
                                { required: !enterCode && !changePass, type: "email", message: "Vui lòng nhập email đúng định dạng." }
                            ]}
                        >
                            <FloatInput disabled={enterCode || changePass} placeholder="Email đã đăng ký" label="Email" />
                        </Form.Item>
                    </Col>
                    <Col span={14} className={!enterCode ? "form-hidden" : "form-show"}>
                        <Form.Item
                            name="code"
                            rules={[
                                { required: enterCode && !changePass, message: "Vui lòng nhập mã xác nhận." }
                            ]}
                        >
                            <FloatInput placeholder="Nhập mã xác nhận" label="Mã xác nhận" />
                        </Form.Item>
                    </Col>
                    <Col span={14} className={!changePass ? "form-hidden" : "form-show"}>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: changePass, message: "Vui lòng nhập mật khẩu mới." },
                                { pattern, message: "Tối thiểu 12 ký tự (số, chữ cái và ký tự đặc biệt)." }
                            ]}
                        >
                            <FloatInput placeholder="Mật khẩu mới" label="" isPassword />
                        </Form.Item>
                    </Col>
                    <Col span={14} className={!changePass ? "form-hidden" : "form-show"}>
                        <Form.Item
                            name="confirmPassword"
                            dependencies={["password"]}
                            rules={[
                                { required: changePass, message: "Vui lòng nhập lại mật khẩu mới." },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu nhập lại không khớp!'));
                                    },
                                }),
                            ]}
                        >
                            <FloatInput placeholder="Nhập lại mật khẩu mới" label="" isPassword />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button className="button-light-yellow" style={{ width: 240, height: 50 }} onClick={buttonActions} loading={loading}>{buttonTexts()}</Button>
                </div>
            </Form>
            <div style={{ textAlign: 'center' }}>
                <span className="anchor-text" onClick={openLogin}>Đăng nhập ngay</span>
                <span className="anchor-text" style={{ marginLeft: 30, display: enterCode ? "inline" : "none" }}>Gửi lại mã xác nhận</span>
            </div>
            {toggleVisible &&
                <ConfirmModal
                    onCancel={toggleVisible}
                    onOk={toggleVisible}
                    status="error"
                    title={<div style={{ textAlign: 'center' }}>
                        <div className="font-size-16">Mật khẩu mới không hợp lệ!</div>
                        <div className="font-size-16">Mật khẩu mới phải khác n mật khẩu cũ gần đây nhất.</div>
                    </div>}
                    visible={visible}
                />}
        </Modal>
    )
}

export default ForgotPassword;