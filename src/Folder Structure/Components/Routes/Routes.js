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
        ]
    },
    { path: '/sign-up', element: <SignUp></SignUp> },
    { path: '/login', element: <Login></Login> },
    {
        path: '/admin-dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {path:'/admin-dashboard/', element: <Overview></Overview>},
            {path:'/admin-dashboard/services', element:<>Available Services</>},
            {path:'/admin-dashboard/products', element:<>Available Products</>},
            {path:'/admin-dashboard/team', element:<>Available Team Members</>},
        ]
    },
    { path: '*', element: <NotFoundPage></NotFoundPage> },
]);

export default router;