import AdminPortal from "./views/AdminPortal";
import Bookings from "./views/Bookings";
import ContactUs from "./views/ContactUs";
import Experience from "./views/Experience";
import Home from "./views/Home";
import OurStory from "./views/OurStory";

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
    path: '/admin-portal',
    element: <AdminPortal />
  },
  {
    path: '/bookings',
    element: <Bookings />
  }
];

export default AppRoutes;
