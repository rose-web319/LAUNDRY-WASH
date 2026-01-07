import { useAuth } from "@/hooks/useAuth";
import { validatePersonalInfoSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router";
import { updateProfile } from "@/api/auth";
import { toast } from "react-toastify";

export default function ProfileInfo() {
  const { user, accessToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validatePersonalInfoSchema),
  });

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (res) => {
      toast.success(res.data.message || "Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["auth_user"] });
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data ||
          "Failed to update profile"
      );
    },
  });

  const onSubmit = async (data) => {
    mutation.mutate({ formData: data, accessToken });
  };

  return (
    <div className="container w-full max-w-[700px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* FULLNAME */}
        <div className="w-full">
          <label htmlFor="fullname" className="text-xs text-white">
            Fullname
          </label>
          <input
            type="text"
            defaultValue={user?.fullname || ""}
            className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
            {...register("fullname")}
          />
        </div>
        {errors.fullname && (
          <p className="text-red-500 text-xs">{errors.fullname.message}</p>
        )}

        {/* EMAIL */}
        <div className="w-full mt-4">
          <label htmlFor="email" className="text-xs text-white">
            Email
          </label>
          <input
            type="email"
            defaultValue={user?.email || ""}
            className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        {/* PHONE */}
        <div className="w-full mt-4">
          <label htmlFor="phone" className="text-xs text-white">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue={user?.phone || ""}
            className="bg-white text-black w-full py-3 px-2 rounded-lg mt-1 text-xs"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}

        {/* BUTTONS */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <button type="button"
            className="w-full md:w-[50%] border border-white rounded-full px-3 py-2 md:px-6 md:py-2 text-white"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full md:w-[50%] bg-(--signupBtnBg) border border-(--signupBtnBg) px-3 py-2 md:px-6 md:py-2 rounded-full text-white"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <div className="flex items-center justify-center gap-2">
                <Loader className="animate-spin" size={18} />
                Save changes
              </div>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}