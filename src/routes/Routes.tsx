import { Routes, Route } from 'react-router-dom';
import LayoutApp from '../layouts/Layout';
import AuctionList from '../modules/auction/auction-list/Index';
import Home from '../modules/home/Index';
import Profile from '../modules/profile/Index';
const IndexRoutes = () => {
    return (
        <>
            <Routes>
                {/* <Route path='/login' element={<Login />} />
                <Route path="/" element={<PrivateRoute><LayoutApp /></PrivateRoute>}>
                </Route> */}
                <Route path='/' element={<LayoutApp />}>
                    <Route path='' element={<Home />} />
                    <Route path='/auction-list' element={<AuctionList />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
            </Routes>
        </>
    );
}

export default IndexRoutes;
