import AdminPortal from "./views/AdminPortal";
import Bookings from "./views/Bookings";
import Checkout from "./views/Checkout";
import ContactUs from "./views/ContactUs";
import Experience from "./views/Experience";
import Home from "./views/Home";
import OurStory from "./views/OurStory";
import Reservation from "./views/Reservation";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/our-story',
    element: <OurStory />
  },
  {
    path: '/experience',
    element: <Experience />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/reservation',
    element: <Reservation />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/admin-portal',
    element: <AdminPortal />
  },
  {
    path: '/bookings',
    element: <Bookings />
  }
];

export default AppRoutes;
