// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "../Icons/Icons";
import Header from "../Header/Header";

import routes from "../../routes";
import { useRoutes } from "react-router-dom";
import Counter from "../../learn-ex/Counter";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Icons></Icons>
      <Header />
      <Counter />
      {router}
    </>
  );
}

// روت بندی غیر استاندارد

// {/* <Routes>
// <Route path="/" element={<Home />}></Route>
// <Route path="/TodoList" element={<TodoList />}></Route>
// <Route path="/LoginForm" element={<LoginForm {...formInfo} />}></Route>
// <Route path="/Products" element={<Products />}></Route>
// <Route path="/Timer" element={<Timer />}></Route>
// <Route path="/QuizApp" element={<QuizApp />}></Route>
// <Route path="/Ticket" element={<Ticket />}></Route>
// <Route path="/Weather" element={<Weather />}></Route>
// <Route path="/ProductPage/:productId" element={<ProductPage />}></Route>
// {/* جهت رفتن به جزییات مربوط به محصولی با آی دی خاص  */}

// <Route path="*" element={<NotFound />}></Route>
// {/* یعنی اگر به یو ار الی به غیر از موارد تعیین شده بریم، صفحه نات فاند رندر بشه. */}

// <Route path="/about/*" element={<About />}>
//   <Route path="Apple" element={<Apple />} />
//   <Route path="GooglePlay" element={<GooglePlay />} />

//   {/* به هیچ عنوان برای ساب روت ها اسلش نزاریم. */}
// </Route>
// {/* وقتی که روت ما درون خودش نیز دارای روت باشد - یعنی صفحات رندر شده ای که یو ار ال آنها زیر مجموعه یو ار ال روت اصلی باشد - */}
// </Routes> */}
export default App;
