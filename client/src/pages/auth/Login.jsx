import { Link } from "react-router";
import { validateLoginUserSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader, Eye, EyeClosed } from "lucide-react";
import { loginUser } from "@/api/auth";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const [revealPassword, setRevealPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateLoginUserSchema),
  });

  const { setAccessToken } = useAuth();

  const togglePasswordReveal = (e) => {
    e.preventDefault();
    setRevealPassword((prev) => !prev);
  };

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast.success(res.data.message || "Login successful");
      //save accesstoken and redierect user to home page
      setAccessToken(res.data.data);
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(error?.response?.data?.message || "Error login you in");
    },
  });

  const onSubmitForm = async (data) => {
   
    mutation.mutate(data);
  };

  return (
    <div className="p-5 w-full md:w-[461px]">
      <h1 className="font-medium text-4xl text-white">Welcome Back!</h1>
      <p className="font-medium mt-1 text-white">
        Enter Your Details To Continue
      </p>
      <div className="mt-10">
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="w-full">
            <label htmlFor="email" className="text-xs text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Johndoe@email.com"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors?.email.message}</p>
          )}
          <div className="mt-2 relative">
            <label htmlFor="password" className="text-xs text-white">
              Password
            </label>
            <input
              type={revealPassword ? "text" : "password"}
              placeholder="Enter your password here"
              className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
              {...register("password")}
            />
            <button
              onClick={togglePasswordReveal}
              className="absolute top-[50%] right-2"
            >
              {revealPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors?.password.message}</p>
          )}

          <Link
            to="/auth/forgetpassword"
            className="text-end mt-3 text-white md:text-slate-300 hover:text-white"
          >
            Forget Password?
          </Link>
          <span className="mt-7 text-center bg-(--signupBtnBg) rounded-full py-3">
            <button
              type="submit"
              className="cursor-pointer flex justify-center items-center w-full text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </span>
          <span className="mt-5 text-center text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="text-(--signupBtnBg)">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}