import { Button, Col, Row } from "antd";
import { PhoneIcon } from "@fluentui/react-icons-mdl2";
import { ReactComponent as Speech } from '../../assets/images/speech.svg';
import { ArrowUpOutlined } from "@ant-design/icons";

const SideMenu = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Row style={{ width: 50, position: 'fixed', top: '40%', right: 0, zIndex: 10 }} gutter={[0, 5]}>
            <Col span={24}>
                <Button
                    icon={<PhoneIcon />}
                    className="button-light-yellow"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </Col>
            <Col span={24}>
                <Button
                    icon={<Speech />}
                    className="sidemenu-button-black"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </Col>
            <Col span={24}>
                <Button
                    onClick={goTop}
                    icon={<ArrowUpOutlined style={{ color: 'white' }} />}
                    className="sidemenu-button-black"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            </Col>
        </Row>
    )
}

export default SideMenu