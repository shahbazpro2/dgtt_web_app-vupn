import { ChevronDownIcon } from "@fluentui/react-icons-mdl2";
import { Button, Menu, Row, Space } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const HeaderMenu = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Row align='middle' justify="space-between" className='header'>
                <Space>
                    <div className='header-logo'>
                        <span style={{ color: "rgba(182, 124, 11, 1)", fontSize: 18 }}>Logo</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="font-size-24"><span className="font-bold">ĐẤU GIÁ</span> TRỰC TUYẾN</div>
                        <span>TRUNG TÂM DỊCH VỤ ĐẤU GIÁ TÀI SẢN</span>
                    </div>
                </Space>
                <Menu mode="horizontal" className="header-menu" disabledOverflow>
                    <Menu.Item key="home">
                        <Link to="">
                            Trang chủ
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="intro">
                        Giới thiệu
                    </Menu.Item>
                    <SubMenu key="info" icon={<ChevronDownIcon />} title="Thông tin đấu giá">
                        <Menu.Item key="upcoming">
                            <Link to="/auction-list">Sắp diễn ra</Link>
                        </Menu.Item>
                        <Menu.Item key="ongoing">Đang diễn ra</Menu.Item>
                        <Menu.Item key="end">Đã kết thúc</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="news">
                        Tin tức
                    </Menu.Item>
                    <Menu.Item key="support">
                        Hỗ trợ
                    </Menu.Item>
                </Menu>
                <Button className="primary-button font-size-16">ĐĂNG KÝ BÁN ĐẤU GIÁ</Button>
            </Row>
        </div>
    )
}

export default HeaderMenu;