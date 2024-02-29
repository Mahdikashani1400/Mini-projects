import LoginForm from "./components/LoginForm/LoginForm";
import Products from "./components/Products/Products";
import Timer from "./components/Timer/Timer";
import QuizApp from "./components/QuizApp/QuizApp";
import Ticket from "./components/Ticket/Ticket";
import TodoList from "./components/TodoList/TodoList";
import Weather from "./components/Weather/Weather";
import ProductPage from "./components/Products/ProductPage";
import Home from "./Home/Home";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Apple from "./components/About/Apple";
import GooglePlay from "./components/About/GooglePlay";
import Dashboard from "./components/Dashboard/Dashboard";
import Panel from "./components/Panel/Panel";
import PrivateRoute from "./components/PrivateRoute";
import TimerRef from "./components/TimerRef/TimerRef";
import TodoTable from "./components/TodoTable/TodoTable";
import Accordion from "./components/Accordion/Accordion";

const formInfo = { title: "Login" };

let routes = [
  { path: "/", element: <Home /> },
  { path: "/TodoList", element: <TodoList /> },
  { path: "/LoginForm", element: <LoginForm {...formInfo} /> },
  { path: "/Products", element: <Products /> }, // #
  { path: "/Timer", element: <TimerRef /> },
  { path: "/QuizApp", element: <QuizApp /> },
  { path: "/Ticket", element: <Ticket /> },
  { path: "/Weather", element: <Weather /> },
  { path: "/Accordion", element: <Accordion /> },
  { path: "/ProductPage/:productId", element: <ProductPage /> }, // #
  { path: "/TodoTable/:todoId", element: <TodoTable /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/about/*",
    element: <About />,
    children: [
      { path: "Apple", element: <Apple /> },
      { path: "GooglePlay", element: <GooglePlay /> },
    ],
  },
  // { path: "/Dashboard", element: <Dashboard /> },  way-1

  // {
  //   path: "/Dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard />
  //     </PrivateRoute>
  //   ),
  // },
  // {
  //   path: "/Panel",
  //   element: (
  //     <PrivateRoute>
  //       <Panel />
  //     </PrivateRoute>
  //   ),
  // }, way-2
  {
    path: "/*",
    element: <PrivateRoute />,
    children: [
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Panel", element: <Panel /> },
    ],
  },
];

export default routes;
