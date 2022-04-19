import { Col, Row, Tabs } from 'antd'
import React from 'react'
const { TabPane } = Tabs;

const Profile = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Loại hình đăng ký</h3>
            <Row style={{ marginTop: 5 }} align="middle" justify="center">
                <Col span={24}>
                    <Tabs type="card" className="custom-tab">
                        <TabPane tab="CÁ NHÂN" key="1">

                        </TabPane>
                        <TabPane tab="TỔ CHỨC" key="2">

                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </div>
    )
}

export default Profile