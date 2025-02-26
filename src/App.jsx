import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const routes = [
  {name: "About", link: "about"},
  {name: "Services", link: "services"},
  {name: "Contact us", link: "contact"},
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
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
