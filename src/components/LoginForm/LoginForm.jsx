import propTypes from "prop-types";
import Login from "./Login";
import SignIn from "./SignIn";

export default function LoginForm({ title, children }) {
  const formState = () => {
    if (title === "Sign in") {
      return <SignIn></SignIn>;
    } else {
      return <Login></Login>;
    }
  };

  return (
    <div className="container">
      <div className="w-full h-full flex items-center justify-center text-left py-10">
        <div className="login__form-container">{formState()}</div>
      </div>
    </div>
  );
}

// export default class LoginForm extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="w-full h-full flex items-center justify-center text-left py-10">
//           <div className="login__form-container">
//             <form action="">
//               <div className="text-white font-semibold mb-6">
//                 <h6 className="lg:text-2xl text-lg ">Your logo</h6>
//                 <h3 className="mt-3 lg:text-4xl text-2xl">
//                   {this.props.title === "Login" ? "Sign in" : "Login"}
//                 </h3>
//               </div>
//               <div className="mb-10">{this.props.children}</div>
//               <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85">
//                 {this.props.title}
//               </button>
//               <div className="">
//                 <div className="text-center">
//                   <a href="#" className="text-white text-sm ">
//                     or continue with
//                   </a>
//                 </div>
//                 <div className="grid grid-cols-3 gap-2 lg:gap-6 mt-7">
//                   <div className="flex justify-center items-center bg-white py-2 rounded-[10px]">
//                     <svg className="w-7 h-7">
//                       <use href="#github"></use>
//                     </svg>
//                   </div>
//                   <div className="flex justify-center items-center bg-white py-2 rounded-[10px]">
//                     <svg className="w-7 h-7">
//                       <use href="#facebook"></use>
//                     </svg>
//                   </div>
//                   <div className="flex justify-center items-center bg-white py-2 rounded-[10px]">
//                     <svg className="w-7 h-7">
//                       <use href="#google"></use>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

LoginForm.propTypes = {
  title: propTypes.oneOf(["Sign in", "Login"]),
  // title: propTypes.string,
};

LoginForm.defaultProps = {
  title: "Sign in",
};
