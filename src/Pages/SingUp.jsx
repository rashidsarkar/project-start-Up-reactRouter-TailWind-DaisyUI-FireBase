import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import react-icons
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const { createUser } = useContext(AuthContext) || { creatUser: null };

  // Function to handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.displayName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Signup</h2>
        {/* {error && <p className="text-red-500">{error}</p>}{" "} */}
        {/* Display error message */}
        <p className="text-green-500">Done Login</p>
        {/* Display success message */}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative flex items-center mb-4">
            <input
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
              type={showPass ? "text" : "password"}
              id="password"
              required
              name="password"
            />
            {/* Show Password icon */}
            {showPass ? (
              <FaEye
                className="absolute w-6 h-6 text-gray-500 cursor-pointer right-3 top-2"
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <FaEyeSlash
                className="absolute w-6 h-6 text-gray-500 cursor-pointer right-3 top-2"
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-600"
              htmlFor="displayName"
            >
              Display Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"
              type="text"
              id="displayName"
              name="displayName"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <label className="ml-2 text-sm text-gray-600" htmlFor="terms">
              I accept the terms and conditions
            </label>
          </div>
          <p className="mb-8">
            Already Have Account Please
            <Link to="/login" className="text-amber-800">
              Login
            </Link>
          </p>
          <input
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
            value="Signup"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
