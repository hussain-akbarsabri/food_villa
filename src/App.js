import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { store } from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="mx-32">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export { appRouter };
export default App;
