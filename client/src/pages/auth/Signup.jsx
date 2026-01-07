import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { registerUser } from "@/api/auth";
import { validateRegisterUserSchema } from "@/utils/dataSchema";
import { useAuth } from "@/hooks/useAuth";
export default function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateRegisterUserSchema),
  });

  const { setAccessToken } = useAuth();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      toast.success(res.data.message || "Registration Successful");
      //save access token and redirect user to home page
      setAccessToken(res.data.data);
    },
    onError: (error) => {
     import.meta.env.DEV && console.error(error);
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });

  const onSubmitForm = async (data) => {
    
    mutation.mutate(data);
  };
  return (
    <div className="p-5 w-[461px]">
      <h1 className="text-white font-medium text-4xl">Create Account</h1>
      <p className="text-white font-medium mt-1">
        Enter Your Information To Create an Account
      </p>
      <div className="mt-5">
        <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="w-full">
            <label htmlFor="fullname" className="text-xs text-white">
              Fullname
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullname")}
              className="bg-white  w-full py-3 px-2 rounded:lg mt-1 text-xs rounded-xl"
            />
          </div>
          {errors.fullname && (
            <p className="text-red-500 text-xs">{errors?.fullname.message}</p>
          )}
          <div className="w-full">
            <label htmlFor="email" className="text-xs text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              {...register("email")}
              className="bg-white w-full py-3 px-2 rounded:lg text-xs rounded-xl"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors?.email.message}</p>
          )}

          <div className="w-full">
            <label htmlFor="phoneNumber" className="text-xs text-white">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+23412345678"
              className="bg-white w-full py-3 px-2 rounded:lg text-xs rounded-xl"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors?.phone.message}</p>
          )}

          <div className="w-full">
            <label htmlFor="password" className="text-xs text-white">
              Password
            </label>
            <input
              type="pasword"
              placeholder="Enter your password here"
              className="bg-white w-full py-3 px-2 rounded:lg text-xs rounded-xl"
              {...register("password")}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors?.password.message}</p>
          )}
          <span className="mt-7 text-center bg-(--signupBtnBg) rounded-full py-3 text-white">
            <button
              type="submit"
              className="cursor-pointer flex justify-center items-center w-full text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" size={18} />{" "}
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </span>
          <span className="text-white mt-4 text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-(--signupBtnBg)">
              Sign in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
