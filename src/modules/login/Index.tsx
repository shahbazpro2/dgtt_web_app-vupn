import { Col, Modal, Row } from "antd";
import { useState } from "react";
import LoginBanner from '../../assets/images/login.png';
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import { toggleForgotPasswordModal } from "../forgot-password/redux/ForgotPasswordSlice";
import { toggleRegisterModal } from "../register/redux/RegisterSlice";
import LoginForm from "./components/LoginForm";
import { toggleLoginModal } from "./redux/LoginSlice";
import './assets/css/styles.scss';

const LoginModal = () => {
    const [error, setError] = useState(false);
    const dispatch = useAppDispatch();
    const loginState = useAppSelector(state => state.login);

    const openRegister = () => {
        dispatch(toggleLoginModal());
        dispatch(toggleRegisterModal());
    }

    const openForgotPassword = () => {
        dispatch(toggleLoginModal());
        dispatch(toggleForgotPasswordModal());
    }

    return (
        <Modal
            // width={1000}
            style={{ minWidth: 1000 }}
            visible={loginState.modalVisible}
            onCancel={() => dispatch(toggleLoginModal())}
            className="custom-modal"
            footer={false}
            bodyStyle={{ padding: '0px 24px 0px 0px', height: 650 }}
        >
            <Row gutter={50} justify="center" style={{ height: '100%' }}>
                <Col span={10}>
                    <img alt="login" src={LoginBanner} style={{ height: 650, borderRadius: '20px 0px 0px 20px', width: '100%', objectFit: 'cover' }} />
                    <div className="login-logo">
                        <div className='header-logo'>
                            <span style={{ color: 'white', fontSize: 30 }}>Logo</span>
                        </div>
                        <div className="font-size-24" style={{ color: 'white' }}><span className="font-bold">ĐẤU GIÁ</span> TRỰC TUYẾN</div>
                        <span style={{ color: 'white' }}>TRUNG TÂM DỊCH VỤ ĐẤU GIÁ TÀI SẢN</span>
                    </div>
                </Col>
                <Col span={14} style={{ padding: '70px 0px 50px 0px' }}>
                    <div className="font-size-30" style={{ textAlign: 'center' }}>Đăng nhập</div>
                    <div style={{ visibility: error ? 'visible' : 'hidden', color: '#BB4048', textAlign: 'center' }}>Vui lòng nhập đầy đủ thông tin</div>
                    <LoginForm openRegister={openRegister} openForgotPassword={openForgotPassword} />
                </Col>
            </Row>
        </Modal>
    )
}

export default LoginModal;