import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validateResetPasswordSchema } from "@/utils/dataSchema";
import { resetPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateResetPasswordSchema),
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  //look for query values on url
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (res) => {
      toast.success(res.data.message || "Password reset succcessful");
      navigate("/login");
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(error?.response?.data?.message);
    },
  });

  const onSubmitForm = async (data) => {
    const formData = { ...data, userId, token };
    mutation.mutate(formData);
  };

  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-[461px] mt-15">
          <h1 className="text-2xl">Forget Password</h1>
          <p className="mt-1 text-xs">Enter your password</p>
          <form action="confirm password" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="w-full mt-5">
              <label htmlFor="email" className="text-xs">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password here"
                className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs "
                {...register("newPassword")}
              />
            </div>
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword?.message}
            </p>
            <div className="w-full mt-5">
              <label htmlFor="email" className="text-xs">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs "
                {...register("confirmPassword")}
              />
            </div>
            <p className="text-red-500 text-xs mt-1">
              {errors.newPassword?.message}
            </p>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="mt-7 text-center bg-(--signupBtnBg) rounded-full py-3 w-full flex items-center justify-center"
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}