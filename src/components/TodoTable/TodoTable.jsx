import React, { useEffect, useRef, useState } from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";

export default function TodoTable() {
  const pageNumber = useParams().todoId;
  const userDatas = useRef([]);
  const isUserDatas = useRef(true);
  const [userDataInpages, setUserDataInpages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        isUserDatas.current = data.length / 10 >= pageNumber;
        userDatas.current = data;
        setUserDataInpages(data.slice((pageNumber - 1) * 10, pageNumber * 10));
      });
  }, []);
  // useEffect(() => {
  //   if (userDatas.current.length) {
  //     isUserDatas.current = userDatas.current.length / 10 >= pageNumber;
  //     console.log(userDatas.current.length / 10, pageNumber);
  //   }
  // });
  return (
    <div className="component__container bg-blue_radial">
      <div className="container">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative min-h-32">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  id
                </th>
                <th scope="col" class="px-6 py-3">
                  userId
                </th>
                <th scope="col" class="px-6 py-3">
                  title
                </th>
                <th scope="col" class="px-6 py-3">
                  completed
                </th>
              </tr>
            </thead>
            {isUserDatas.current ? (
              !userDataInpages.length ? (
                <p className="absolute w-full text-center top-1/2 text-white text-3xl">
                  is Loading...
                </p>
              ) : (
                <>
                  <tbody>
                    {userDataInpages.map((data) => {
                      return (
                        <tr
                          key={data.id}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td class="px-6 py-4">{data.userId}</td>
                          <td class="px-6 py-4">{data.id}</td>

                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {data.title}
                          </th>

                          <td class="px-6 py-4">
                            {data.completed ? (
                              <p className="p-2 text-white bg-green-800 w-28 rounded-md text-base text-center">
                                Completed
                              </p>
                            ) : (
                              <p className="p-2 text-white bg-red-700 w-28 rounded-md text-base text-center">
                                Pending
                              </p>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </>
              )
            ) : (
              <>
                <Navigate to={"/NotFound"} />
              </>
            )}

            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">1</td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Sliver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">1</td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <td class="px-6 py-4">1</td>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
              </tr> */}
          </table>
          <div class="flex sticky bottom-0 left-0 items-center justify-between border-t border-gray-200 bg-zinc-800 text-white px-4 py-3 sm:px-6">
            <div class="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-950"
              >
                Previous
              </a>
              <a
                href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-950"
              >
                Next
              </a>
            </div>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-white">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-950 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* <a
                    href="#"
                    aria-current="page"
                    class="relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  >
                    1
                  </a> */}
                  {Array.from({ length: 5 })
                    .fill(0)
                    .map((num, index) => {
                      return (
                        <NavLink
                          to={`/TodoTable/${index + +pageNumber}`}
                          onClick={(e) => {
                            // e.preventDefault();
                            isUserDatas.current =
                              userDatas.current.length / 10 >= +pageNumber + 1;
                            console.log(
                              userDatas.current.length / 10,
                              pageNumber
                            );
                            setUserDataInpages(
                              userDatas.current.slice(
                                pageNumber * 10,
                                (+pageNumber + 1) * 10
                              )
                            );
                          }}
                          className={({ isActive }) => {
                            return `"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-950 focus:z-20 focus:outline-offset-0" ${
                              isActive
                                ? "bg-indigo-600 focus-visible:outline-indigo-600"
                                : ""
                            }`;
                          }}
                        >
                          {index + +pageNumber}
                        </NavLink>
                      );
                    })}
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-950 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
