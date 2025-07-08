import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../entities/registration/api/registrApi";
import { toast } from "react-hot-toast";
import { Button } from "../../shared/ui/kit/button";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlLogin(e) {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    const password = e.target.password.value.trim();
    if (!userName || !password) {
      toast.error("Заполните все поля!");
      return;
    }

    const user = {
      userName,
      password,
    };

    const resultAction = await dispatch(login(user));

    if (login.fulfilled.match(resultAction)) {
      toast.success("Успешно!");
      navigate("/");
    } else if (login.rejected.match(resultAction)) {
      const errorMessage =
        resultAction?.payload.message || "Ошибка при регистрации!";
      toast.error(errorMessage);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 pb-30 ">
        <div className="flex flex-col text-center text-[20px] font-bold pt-10 ">
          <h1 className="text-[40px]">Log in to Exclusive</h1>
          <h2>Enter your details below</h2>
        </div>

        <form onSubmit={handlLogin}>
          <div className="flex flex-col items-center gap-5 ">
            <input
              className="w-[300px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]"
              placeholder="Email or phone number"
              type="text"
              name="userName"
              autoComplete="username"
            />
            <input
              className="w-[300px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]"
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
            <Button
              type="submit"
              className="w-[300px] h-[56px] mt-4 rounded bg-[#DB4444] text-white font-[500] lg:w-[420px]"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
