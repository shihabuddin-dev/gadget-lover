import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/root/Root';
import Home from '../pages/home/Home';
import statistic from '../pages/statistic/statistic';
import Dashboard from '../pages/dashboard/Dashboard';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: 'statistic', Component: statistic },
            { path: 'dashboard', Component: Dashboard }
        ]
    },
]);