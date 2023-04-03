import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../Pages/SignUp/SignUp";

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
    {path:'*', element: <NotFoundPage></NotFoundPage>},
]);

export default router;