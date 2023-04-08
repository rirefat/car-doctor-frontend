import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import AddService from "../../Pages/AddService/AddService";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage";
import Cart from "../../Pages/Cart/Cart";
import Contact from "../../Pages/Contact/Contact";
import ProductPage from "../../Pages/ProductPage/ProductPage";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import Overview from "../../DashboardComponents/Overview/Overview";
import AvailableProducts from "../../DashboardComponents/AvailableProducts/AvailableProducts";
import AvailableServices from "../../DashboardComponents/AvailableServices/AvailableServices";
import Manpower from "../../DashboardComponents/Manpower/Manpower";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Orders from "../../DashboardComponents/Orders/Orders";
import UpdateProduct from "../../DashboardComponents/UpdateProduct/UpdateProduct";
import UpdateService from "../../DashboardComponents/UpdateService/UpdateService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/services', element: <ServicesPage></ServicesPage> },
            { path: '/products', element: <ProductPage></ProductPage> },
            {
                path: '/service-details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => { return fetch(`http://localhost:5000/services/${params.id}`) }
            },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/checkout', element: <CheckOut></CheckOut> },
            { path: '/cart', element: <Cart></Cart> },
            { path: '/add-service', element: <AddService></AddService> },
            { path: '/add-product', element: <AddProduct></AddProduct> },
        ]
    },
    { path: '/sign-up', element: <SignUp></SignUp> },
    { path: '/login', element: <Login></Login> },
    {
        path: '/admin-dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            { path: '/admin-dashboard/', element: <Overview></Overview> },
            {
                path: '/admin-dashboard/services',
                element: <AvailableServices></AvailableServices>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: '/admin-dashboard/products',
                element: <AvailableProducts></AvailableProducts>,
                loader: () => fetch("http://localhost:5000/products")
            },
            {
                path: '/admin-dashboard/team',
                element: <Manpower></Manpower>,
                loader: () => fetch("http://localhost:5000/team")
            },
            { path: '/admin-dashboard/orders', element: <Orders></Orders> },
            {
                path: '/admin-dashboard/update-product/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/admin-dashboard/update-service/:id',
                element: <UpdateService></UpdateService>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    },
    { path: '*', element: <NotFoundPage></NotFoundPage> },
]);

export default router;