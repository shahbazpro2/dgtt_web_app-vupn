import Header from './headers/Header';
import Footer from './footer/Footer';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from './side-menu/SideMenu';

const { Content } = Layout;

const LayoutApp = () => {
    return (
        <Layout>
            <SideMenu />
            <Header />
            <Content><Outlet /></Content>
            <Footer />
        </Layout>
    )
}

export default LayoutApp;