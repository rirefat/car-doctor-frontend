import './AdminDashboard.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import { BsFillBoxSeamFill, BsWrenchAdjustable } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { GrOverview } from 'react-icons/gr';
import { HiShoppingCart } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const AdminDashboard = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logout");
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    }

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
                        <Link to={'/admin-dashboard/team'}><span className='icon'><RiTeamFill></RiTeamFill></span>Team Members</Link>
                        <Link to={'/admin-dashboard/orders'}><span className='icon'><HiShoppingCart></HiShoppingCart></span>Orders</Link>
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
                            <button onClick={handleLogOut} className='btn btn-circle bg-slate-500 my-6' title='Logout'><FiLogOut></FiLogOut></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;