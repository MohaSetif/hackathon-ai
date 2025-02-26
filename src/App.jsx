import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import image from "../public/img/home-decor-1.jpeg"

const routes = [
  {name: "About", link: "about"},
  {name: "Services", link: "services"},
  {name: "Contact us", link: "contact"},
]

const cards = [
  {
    title: "Title One",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur veniam sunt quasi praesentium a deserunt impedit quos aspernatur ducimus libero neque maxime, laboriosam expedita veritatis molestias similique minima placeat!",
  },
  {
    title: "Title Two",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur veniam sunt quasi praesentium a deserunt impedit quos aspernatur ducimus libero neque maxime, laboriosam expedita veritatis molestias similique minima placeat!",
  },
  {
    title: "Title Three",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur veniam sunt quasi praesentium a deserunt impedit quos aspernatur ducimus libero neque maxime, laboriosam expedita veritatis molestias similique minima placeat!",
  },
  {
    title: "Title Four",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur veniam sunt quasi praesentium a deserunt impedit quos aspernatur ducimus libero neque maxime, laboriosam expedita veritatis molestias similique minima placeat!",
  }
]

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      </Routes>
      <div className="body">
          <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
              <Navbar routes={routes} />
              <div className="text-center items-center mt-[8rem]">
                <h1 className="text-8xl font-medium leading-[7rem] text-gray-800 mb-4">
                  Schedule Appointments <span className="text-blue-500">FASTER</span> than before
                </h1>
                <p className="text-xl text-gray-600">
                  Efficient, reliable, and easy-to-use appointment scheduling.
                </p>
                <Link
                  to="/auth/sign-in"
                  className="inline-flex bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-4 mt-12 text-white rounded-full items-center justify-between space-x-4 shadow-lg hover:shadow-xl mx-auto"
                >
                  <span className="text-lg font-xs">Get started!</span>
                  <div className="bg-white rounded-full p-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      className="text-gray-900"
                    >
                      <path
                        fill="#42a5f5"
                        d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              <Card cards={cards} />
              <div className="my-24 flex flex-col items-center space-y-8">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-transform transform hover:scale-105">
                  <img
                    className="object-cover w-full h-96 md:h-96 md:w-96 md:rounded-none md:rounded-s-lg"
                    src={image}
                    alt="Card 1"
                  />
                  <div className="flex flex-col justify-between p-8 leading-normal">
                    <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy Technology Acquisitions 2021
                    </h5>
                    <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </a>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-transform transform hover:scale-105" >
                  <div className="flex flex-col justify-between p-8 leading-normal">
                    <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy Technology Acquisitions 2021
                    </h5>
                    <p className="mb-6 text-lg font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </div>
                  <img
                    className="object-cover w-full h-96 md:h-96 md:w-96 md:rounded-none md:rounded-e-lg"
                    src={image}
                    alt="Card 2"
                  />
                </a>
              </div>
              <Footer routes={routes} />
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
