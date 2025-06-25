import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../entities/registration/api/registrApi";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlLogin(e) {
    e.preventDefault();

    const user = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
    const resultAction = await dispatch(login(user));
    if (login.fulfilled.match(resultAction)) {
      navigate("/");
    } else {
      console.log(`oshibka login`, resultAction.payload);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 pb-30">
        <div className="flex flex-col text-center text-[20px] font-bold pt-10 ">
          <h1 className="text-[40px]">Log in to Exclusive</h1>
          <h2>Enter your details below</h2>
        </div>

        <form onSubmit={handlLogin}>
          <div className="flex flex-col items-center gap-5">
            <input
              className="w-[320px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Email or phone number"
              type="text"
              name="userName"
              autoComplete="username"
            />
            <input
              className="w-[320px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <button className="mt-2 text-red-700 font-[600]">
              Forget Password?
            </button>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <button
              type="submit"
              className="w-[320px] h-[56px] mt-4 rounded bg-[#DB4444] text-white font-[500] lg:w-[420px]"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
