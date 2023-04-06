import './AdminDashboard.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import { BsFillBoxSeamFill, BsWrenchAdjustable } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
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
                    <div className="navigation-panel mb-6">
                        <Link to={'/home'} className='logo'>
                            <img src={logo} alt="" />
                        </Link>
                        <Link to={'/admin-dashboard'}><span className='icon'><GrOverview></GrOverview></span>Overview</Link>
                        <Link to={'/admin-dashboard/services'}><span className='icon'><BsWrenchAdjustable></BsWrenchAdjustable></span>Available Services</Link>
                        <Link to={'/admin-dashboard/products'}><span className='icon'><BsFillBoxSeamFill></BsFillBoxSeamFill></span> Available Products</Link>
                        <Link to={'/admin-dashboard/team'}><span className='icon'><RiTeamFill></RiTeamFill></span>Available Team Members</Link>
                    </div>

                    <div className="middle-panel">
                        <Outlet></Outlet>
                    </div>

                    <div className="admin-info-panel my-10">
                        <div className="admin-container shadow-lg">
                            <div className="admin-img">
                                <img src="https://avatars.githubusercontent.com/u/67165938?v=4" alt="Admin Img" className='w-1/2 shadow-lg mb-4' />
                            </div>
                            <h2 className='text-center font-semibold'>Admin</h2>
                            <p className='text-center'>Rafiul Islam</p>
                            <button className='btn btn-circle bg-slate-500 my-6' title='Logout'><FiLogOut></FiLogOut></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;