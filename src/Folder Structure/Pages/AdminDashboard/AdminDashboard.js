import './AdminDashboard.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import { BsFillBoxSeamFill, BsWrenchAdjustable } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
// import { HiWrenchScrewdriver } from 'react-icons/hi';
import { GrOverview } from 'react-icons/gr';

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
                        <Link to={'/home'} className='logo'>
                            <img src={logo} alt="" />
                        </Link>
                        <Link to={'/admin-dashboard'}><span className='icon'><GrOverview></GrOverview></span>Overview</Link>
                        <Link to={'/admin-dashboard/services'}><span className='icon'><BsWrenchAdjustable></BsWrenchAdjustable></span>Available Services</Link>
                        <Link to={'/admin-dashboard/products'}><span className='icon'><BsFillBoxSeamFill></BsFillBoxSeamFill></span> Available Products</Link>
                        <Link to={'/admin-dashboard/team'}><span className='icon'><RiTeamFill></RiTeamFill></span>Available Team Members</Link>
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