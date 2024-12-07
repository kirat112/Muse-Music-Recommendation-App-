import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {LOCALURI} from "../Constants";

const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = ({ message, token }) => {
    toast.success(message);
    localStorage.setItem("token", token);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup
        ? `${LOCALURI}/auth/signup` 
        : `${LOCALURI}/auth/login`;

      const res = await axios.post(
        url,
        isSignup ? { email, password, username } : { email, password }
      );
      if (res.data.success) {
        handleSuccess(res.data);
      } else {
        handleError(res.data.message);
      }
    } catch (err) {
      handleError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center bg-white min-h-min">
      <div className="bg-[#F0F5F2] text-[#638778] p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Username"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-buttonTextColor"
            />
          )}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-buttonTextColor"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-buttonTextColor"
          />
          <button
            type="submit"
            className="w-full bg-buttonBgGreen text-buttonTextColor py-2 rounded-md hover:bg-opacity-90"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="w-full mt-4 text-buttonTextColor hover:underline"
        >
          {isSignup ? "Switch to Login" : "Switch to Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Login;