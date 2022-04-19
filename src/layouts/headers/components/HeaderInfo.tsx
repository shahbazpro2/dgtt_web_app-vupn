import { Space } from "antd";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { vi } from 'date-fns/locale';
import RegisterModal from "../../../modules/register/Index";
import LoginModal from "../../../modules/login/Index";
import { useAppDispatch, useAppSelector } from "../../../redux/Hooks";
import { toggleLoginModal } from "../../../modules/login/redux/LoginSlice";
import { toggleRegisterModal } from "../../../modules/register/redux/RegisterSlice";
import ForgotPassword from "../../../modules/forgot-password/Index";

const HeaderInfo = () => {
    const [currentTime, setCurrentTime] = useState(format(new Date(), "HH:mm:ss dd/MM/yyyy", { locale: vi }));
    const loginState = useAppSelector(state => state.login);
    const registerState = useAppSelector(state => state.register);
    const forgotPasswordState = useAppSelector(state => state.forgotPassword);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(format(new Date(), "HH:mm:ss cccc, dd/MM/yyyy", { locale: vi }));
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="time-header">
            <Space size={25}>
                <span className="font-size-12">Hà Nội, Việt Nam - {currentTime}</span>
                <span className="font-size-12">Hotline: (0236) 3889 627 hoặc (0236) 3887 678</span>
                <span className="font-size-12">Email: daugia@danang.gov.vn</span>
            </Space>
            <Space size={25}>
                <span className="font-size-12 font-bold letter-spacing-big cursor-pointer" onClick={() => dispatch(toggleRegisterModal())}>THÔNG TIN TÀI KHOẢN</span>
                <span className="font-size-12 font-bold letter-spacing-big cursor-pointer" onClick={() => dispatch(toggleRegisterModal())}>ĐĂNG KÝ</span>
                <span className="font-size-12 font-bold letter-spacing-big cursor-pointer" onClick={() => dispatch(toggleLoginModal())}>ĐĂNG NHẬP</span>
            </Space>
            {registerState.modalVisible &&
                <RegisterModal />}
            {loginState.modalVisible &&
                <LoginModal />}
            {forgotPasswordState.modalVisible &&
                <ForgotPassword />}
        </div>
    )
}

export default HeaderInfo;