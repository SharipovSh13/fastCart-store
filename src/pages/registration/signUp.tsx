import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../entities/registration/api/registrApi";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleRegistration(e) {
    e.preventDefault();
    let newUser = {
      userName: e.target.userName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    const resultAction = await dispatch(registration(newUser));

    if (registration.fulfilled.match(resultAction)) {
      navigate("/login");
    } else {
      console.log(`oshibka registration`, resultAction.payload);
    }
  }

  return (
    <>
      <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg mb-10">
        <form onSubmit={handleRegistration}>
          <h2 className="text-2xl font-bold mb-1">Create an account</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black"
            autoComplete="username"
            name="userName"
          />

          <input
            type="text"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black"
            name="phoneNumber"
            autoComplete="tel"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black"
            name="email"
            autoComplete="email"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-1 focus:ring-black"
            autoComplete="new-password"
            name="password"
          />

          <input
            type="password"
            placeholder=" Confirm Password"
            className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-1 focus:ring-black"
            name="confirmPassword"
            autoComplete="new-password"
          />

          <button
            type="submit"
            className="w-full bg-[#DB4444] text-white py-2 rounded-md mb-4"
          >
            Create Account
          </button>

          <button className="w-full border border-gray-300 py-2 flex items-center justify-center gap-2 rounded-md mb-6">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>
          <p className="text-center text-sm">
            Already have account?
            <a href="#" className="text-black font-semibold underline ml-1">
              Log in
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
