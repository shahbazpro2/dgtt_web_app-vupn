import { Col, Row, Tabs } from 'antd'
import React from 'react'
import OrganizationForm from './OrganizationForm';
import PersonalForm from './PersonalForm';
const { TabPane } = Tabs;

const Profile = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>Loại hình đăng ký</h3>
            <Row style={{ marginTop: 5 }} align="middle" justify="center">
                <Col span={24}>
                    <Tabs type="card" className="custom-tab">
                        <TabPane tab="CÁ NHÂN" key="1">
                            <PersonalForm />
                        </TabPane>
                        <TabPane tab="TỔ CHỨC" key="2">
                            <OrganizationForm />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default Profile