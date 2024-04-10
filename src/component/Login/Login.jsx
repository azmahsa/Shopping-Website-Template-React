import { useState, useEffect, useContext } from "react";
import loginImg from "../../assets/login.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";
import { Link } from "react-router-dom";
const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [rMe, setrMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const proseedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message && data.message.startsWith("Invalid")) {
            toast.error(data.message);
          } else {
            localStorage.setItem("token", data.token);
            toast.success("Login Successfull ");
            setLoggedIn(true);
            navigate("/dashboard");
          }
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.error("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.error("Please Enter Password");
    }
    return result;
  };

  return (
    <div className="w-full mt-[40px]">
      <div className="font-[sans-serif] bg-[#f5f5f5] text-[#333]">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2  bg-slate-100 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:h-full max-md:mt-10  ">
              <img
                src={loginImg}
                className="w-full h-full rounded-xl object-contain"
                alt="login-image"
              />
            </div>
            <div className="md:max-w-md w-full sm:px-6 py-4  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 -mt-8">
                <h1 className="text-xl font-bold leading-tight -mt-8 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log in to your account
                  <br />{" "}
                  <span className=" text-xs text-gray-500">
                    username: kminchelle - password: 0lelplR
                  </span>
                </h1>
                <form
                  onSubmit={proseedLogin}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      name="username"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username"
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-slate-900  hover:bg-slate-700  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to={"/register"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
