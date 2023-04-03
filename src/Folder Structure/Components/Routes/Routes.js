import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {path:'/', element: <Home></Home>},
            {path:'/home', element: <Home></Home>},
        ]
    },
    {path:'/sign-up', element: <SignUp></SignUp>},
    {path:'/login', element: <Login></Login>},
    {path:'*', element: <NotFoundPage></NotFoundPage>},
]);

export default router;