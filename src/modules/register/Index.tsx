import { Col, Modal, Row, Tabs } from "antd";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks";
import RegisterForm from "./components/RegisterForm";
import { toggleLoginModal } from "../login/redux/LoginSlice";
import { toggleRegisterModal } from "./redux/RegisterSlice";
const { TabPane } = Tabs;

const RegisterModal = () => {
    const [error, setError] = useState(false);
    const registerState = useAppSelector(state => state.register);
    const dispatch = useAppDispatch();

    const openLogin = () => {
        dispatch(toggleRegisterModal())
        dispatch(toggleLoginModal());
    }

    return (
        <>
            <Modal
                // width={1000}
                style={{ minWidth: 1000 }}
                visible={registerState.modalVisible}
                onCancel={() => dispatch(toggleRegisterModal())}
                className="custom-modal"
                footer={false}
                bodyStyle={{ padding: '24px 50px' }}
            >
                <div style={{ width: '100%', textAlign: 'center', marginTop: 20, fontSize: 30 }}>ĐĂNG KÝ</div>
                <div style={{ visibility: error ? 'visible' : 'hidden', color: '#BB4048', textAlign: 'center' }}>Vui lòng nhập đầy đủ thông tin</div>
                <Row style={{ marginTop: 25 }} align="middle" justify="center">
                    <Col span={24}>
                        <Tabs type="card" className="custom-tab">
                            <TabPane tab="CÁ NHÂN" key="1">
                                <RegisterForm openLogin={openLogin} />
                            </TabPane>
                            <TabPane tab="TỔ CHỨC" key="2">
                                <RegisterForm openLogin={openLogin} />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default RegisterModal;