import React from "react";

export default function Login() {
  return (
    <div>
      <form action="">
        <div className="text-white font-semibold mb-6 w-fit">
          <h6 className="lg:text-2xl text-lg ">Your logo</h6>
          <a href="#" className="">
            <h3 className="mt-3 lg:text-4xl text-2xl transition-all hover:text-sky-300 $">
              Login
            </h3>
          </a>
        </div>
        <div className="mb-10">
          <div className="input__container">
            <label htmlFor="email" className="">
              Email
            </label>
            <input type="text" id="email" className="" placeholder="Email" />
          </div>
          <div className="input__container">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="text"
              id="password"
              className=""
              placeholder="Password"
            />
          </div>
        </div>
        <button className="bg-blue-950 py-3 mb-8 w-full rounded-[10px] text-white transition-all hover:bg-blue-950/85">
          Sign in
        </button>

        <div className="">
          <div className="text-center">
            <a href="#" className="text-white text-sm ">
              or continue with
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 lg:gap-6 mt-7">
            <a
              href="#"
              className="flex justify-center items-center bg-white py-2 rounded-[10px]"
            >
              <svg className="w-7 h-7">
                <use href="#github"></use>
              </svg>
            </a>
            <a
              href="#"
              className="flex justify-center items-center bg-white py-2 rounded-[10px]"
            >
              <svg className="w-7 h-7">
                <use href="#facebook"></use>
              </svg>
            </a>
            <a
              href="#"
              className="flex justify-center items-center bg-white py-2 rounded-[10px]"
            >
              <svg className="w-7 h-7">
                <use href="#google"></use>
              </svg>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
