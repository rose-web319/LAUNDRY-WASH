import { validateForgotPasswordSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgotPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateForgotPasswordSchema),
  });

const mutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res) => {
      toast.success(res.data.message || "Successful ");
      //save accesstoken and redierect user to home page
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(error?.response?.data?.message || "failed");
    },
  });

  const onSubmitForm = async (data) => {
   
    mutation.mutate(data);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-[461px] mt-15">
          <h1 className="text-2xl">Forgot Password</h1>
          <p className="mt-1 text-xs">Enter your information</p>
          <form action="forget password" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="w-full mt-5">
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                type="email"
                placeholder="Johndoe@email.com"
                className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs "
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors?.email.message}</p>
            )}
            
            <button
              type="submit"
              disabled={mutation.isPending}
              className="mt-7 text-center bg-(--signupBtnBg) rounded-full py-3 w-full flex items-center justify-center"
            >
             {mutation.isPending ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  Loading
                </>
              ) : (
                "Next"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}