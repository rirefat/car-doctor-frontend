import './AdminDashboard.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {    

    return (
        <div className='admin-dashboard'>
            <div className="dashboard-container shadow-xl">
                <TopBanner
                    title={"Admin Panel"}
                    subtitle={"Welcome"}
                ></TopBanner>
                <div className="dashboard-main-body">
                    <div className="navigation-panel">
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/admin-dashboard'}>Overview</Link>
                        <Link to={'/admin-dashboard/services'}>Available Services</Link>
                        <Link to={'/admin-dashboard/products'}>Available Products</Link>
                        <Link to={'/admin-dashboard/team'}>Available Team Members</Link>
                    </div>
                    <div className="rights-panel">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;