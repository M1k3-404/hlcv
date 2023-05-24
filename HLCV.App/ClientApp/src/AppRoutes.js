import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import AdminPortal from "./views/AdminPortal";
import Bookings from "./views/Bookings";
import Home from "./views/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/admin-portal',
    element: <AdminPortal />
  },
  {
    path: '/bookings',
    element: <Bookings />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
