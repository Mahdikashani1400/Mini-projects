import React, { useEffect, useRef, useState } from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";

export default function TodoTable() {
  const pageNumber = useRef(useParams().todoId);
  const userDatas = useRef([]);
  const isUserDatas = useRef(true);
  const [userDataInpages, setUserDataInpages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        isUserDatas.current = data.length / 20 >= pageNumber.current;
        userDatas.current = data;
        setUserDataInpages(
          data.slice((pageNumber.current - 1) * 20, pageNumber.current * 20)
        );
      });
  }, []);
  useEffect(() => {
    // pageNumber.current = useParams().todoId;
  });
  return (
    <div className="component__container bg-blue_radial">
      <div className="container">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative min-h-32">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  userId
                </th>
                <th scope="col" className="px-6 py-3">
                  title
                </th>
                <th scope="col" className="px-6 py-3">
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
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{data.userId}</td>
                          <td className="px-6 py-4">{data.id}</td>

                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {data.title}
                          </th>

                          <td className="px-6 py-4">
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
          </table>
          <div className="flex sticky bottom-0 left-0 items-center justify-between border-t border-gray-200 bg-zinc-800 text-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-950"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-950"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white">
                  Showing
                  <span className="font-medium">1</span>
                  to
                  <span className="font-medium">10</span>
                  of
                  <span className="font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <NavLink
                    to={`/TodoTable/${
                      pageNumber.current !== 1
                        ? useParams().todoId - 1
                        : useParams().todoId
                    }`}
                    onClick={(e) => {
                      // e.preventDefault();
                      if (pageNumber.current !== 1) {
                        pageNumber.current = +pageNumber.current - 1;
                        isUserDatas.current =
                          userDatas.current.length / 20 >=
                          Number(pageNumber.current);
                        setUserDataInpages(
                          userDatas.current.slice(
                            (+pageNumber.current - 1) * 20,
                            +pageNumber.current * 20
                          )
                        );
                      }
                    }}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-200 ring-1 ring-inset ring-gray-300 hover:bg-gray-950 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
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
                  </NavLink>

                  {Array.from({ length: userDatas.current.length / 20 })
                    .fill(0)
                    .map((num, index) => {
                      return (
                        <NavLink
                          to={`/TodoTable/${index + 1}`}
                          onClick={(e) => {
                            // e.preventDefault();
                            pageNumber.current = index + 1;
                            isUserDatas.current =
                              userDatas.current.length / 20 >=
                              Number(pageNumber.current);

                            setUserDataInpages(
                              userDatas.current.slice(
                                index * 20,
                                (index + 1) * 20
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
                          {index + 1}
                        </NavLink>
                      );
                    })}
                  <NavLink
                    to={`/TodoTable/${
                      pageNumber.current !== 10
                        ? +useParams().todoId + 1
                        : useParams().todoId
                    }`}
                    onClick={(e) => {
                      // e.preventDefault();
                      if (pageNumber.current !== 10) {
                        pageNumber.current = +pageNumber.current + 1;
                        isUserDatas.current =
                          userDatas.current.length / 20 >=
                          Number(pageNumber.current);
                        setUserDataInpages(
                          userDatas.current.slice(
                            (+pageNumber.current - 1) * 20,
                            +pageNumber.current * 20
                          )
                        );
                      }
                    }}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-950 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
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
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
