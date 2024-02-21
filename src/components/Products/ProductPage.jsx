import React from "react";
import ProductData from "./ProductData";
import { Navigate, useParams } from "react-router-dom";
export default function ProductPage() {
  const params = useParams();
  console.log(params);
  const productTarget = ProductData.find(
    (product) => product.id === parseInt(params.productId)
  );
  return (
    <>
      {(productTarget && (
        <div className="component__container bg-blue_radial justify-start">
          {/* <h1 className="text-white text-2xl my-10">{productTarget.name} </h1>
          <div className="w-1/6 mx-auto">
            <img
              className="w-full rounded-lg"
              // src="/products/shoe-2.jpg"
              src={`/products/${productTarget.img}.jpg`}
              alt=""
            />
          </div> */}

          <div className="container px-10">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full  dark:border-gray-700 dark:bg-gray-800 ">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/4 md:rounded-none md:rounded-s-lg"
                src={`/products/${productTarget.img}.jpg`}
                alt=""
              />
              <div class="flex flex-col justify-center p-4 leading-normal text-center w-full flex-1 gap-8">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {productTarget.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {productTarget.description}
                </p>
                <a
                  href="#"
                  class="w-fit mx-auto inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  افزودن به سبد خرید
                </a>
              </div>
            </div>
          </div>
        </div>
      )) || <Navigate to="/Products" />}

      {/* اگر محصولی با ای دی مورد نظر کاربر پیدا نشد ما را به صفحه اول برمیگرداند. */}
    </>
  );
}
