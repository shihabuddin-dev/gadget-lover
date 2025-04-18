import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import axios from "axios";
import { Suspense } from "react";
import ViewDetails from "../components/viewDetails/ViewDetails";
import Statistic from "../pages/statistic/Statistic";

const productPromise = axios.get('products.json')
const loader = <>
    <div className="mt-6 flex ap-4 justify-center items-center w-full h-full">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
</>

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                element: <Suspense fallback={loader}>
                    <Home productPromise={productPromise}></Home>
                </Suspense>
            },
            {
                path: 'statistic',
                element: <Suspense fallback={loader}>
                    <Statistic productPromise={productPromise}></Statistic>
                </Suspense>
            },
            { path: 'dashboard', Component: Dashboard },
            {
                path: '/view-details/:productId',
                element: <Suspense fallback={loader}>
                    <ViewDetails productPromise={productPromise}></ViewDetails>
                </Suspense>
            }
        ]
    },
]);