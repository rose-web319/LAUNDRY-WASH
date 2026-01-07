import { useAuth } from "@/hooks/useAuth";
import { payOptions } from "@/utils/constant";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { ChevronRight, Loader } from "lucide-react";
import { toast } from "react-toastify";
import { createPayment } from "@/api/payment";
import Modal from "@/components/Modal";
import Paystack from "@/components/Paystack";

export default function PaymentOptions() {
  const [selectPayment, setSelectPayment] = useState("Pay on Delivery");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPaystack, setShowPaystack] = useState(false);
  const { accessToken, bookingForm, setBookingForm } = useAuth();
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const path = location.pathname.split("/")[2];

  const mutation = useMutation({
    mutationFn: createPayment,
    onSuccess: (res) => {
      toast.success(res.data.message || "Payment successful");
      queryClient.invalidateQueries({ queryKey: ["userBooking"] });
      localStorage.removeItem("laundryBookingForm");
      setBookingForm(null);
      setIsModalOpen(true);
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data.message ||
          error?.response?.data ||
          "Failed to place booking"
      );
    },
  });

  const makePayment = async () => {
    if (selectPayment === "Pay on Delivery") {
      const formData = {
        amount: bookingForm?.total,
        reference: new Date().getTime().toString(),
        paymentMethod: selectPayment,
      };
      mutation.mutate({ bookingId, formData, accessToken });
    } else {
      setShowPaystack(true);
    }
  };

  return (
    <div className="min-h-[80vh] container mx-auto px-2 md:px-0">
      <div className="flex gap-3 items-center text-white mt-20 py-6">
        <h1
          className="text-xl md:text-3xl font-semibold cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Book Laundry
        </h1>
        <ChevronRight />
        <h1
          className={`text-xl md:text-3xl lg:text-3xl font-semibold ${
            path ? "text-(--signupBtnBg)" : ""
          }`}
        >
          Payment Options
        </h1>
      </div>
      <div className="max-w-[500px] w-full mx-auto text-white mt-10">
        <h1 className="text-xl">Select Payment Options</h1>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center  mx-auto">
        {payOptions.map((item) => (
          <div
            key={item.id}
            className="px-4 py-6 rounded-xl flex justify-between items-center mb-6 bg-(--cardBg) max-w-[500px] w-full"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <item.icon />
              <p>{item.label}</p>
            </div>
            <input
              type="radio"
              name="radio-1"
              className="radio text-(--signupBtnBg) bg-(--cardBg) scale-80"
              checked={selectPayment === item.label}
              value={item.label}
              onChange={(e) => setSelectPayment(e.target.value)}
            />
          </div>
        ))}
        <div className="flex flex-col md:flex-row gap-5 justify-between max-w-[500px] w-full mx-auto">
          <button
            className="text-white border border-white rounded-full py-3 w-full"
            onClick={() => navigate("/book-laundry")}
          >
            Cancel
          </button>
          <button
            className="bg-(--signupBtnBg) w-full rounded-full py-3 flex justify-center items-center text-white"
            onClick={makePayment}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader className="animate-spin mr-2" /> Proceed
              </>
            ) : (
              "Proceed"
            )}
          </button>
        </div>
      </div>
      <>
      {showPaystack && (
        <Paystack
        bookingId={bookingId}
        total={bookingForm?.total}
        setIsModalOpen={setIsModalOpen}
        onClose={() => setShowPaystack(false)}
        selectPayment={selectPayment}
        />
      )}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            id="createPaymentModal"
            classname="bg-(--navBg) p-4 rounded-xl shadow-lg w-[90%] max-w-[400px] mx-auto text-white"
            showClose
            onClose={() => setIsModalOpen(false)}
          >
            <div className="my-6 flec flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center">
                {" "}
                <img
                  src="/Check.png"
                  alt="success"
                  className="w-[100px] "
                />
              </div>
              <div className="mt-4 text-center">
                <h1 className="text-2xl">
                  {selectPayment === "Pay on delivery"
                    ? "Your payment has been scheduled"
                    : "Your pick-up has been successfully made!"}
                </h1>
                <p className="text-sm">
                  You will be notified once the dispatch is on its way
                </p>
                <div className="mt-6 grid grid-cols-1 gap-2 md:gap-4">
                  <button
                    type="submit"
                    className="bg-(--signupBtnBg) py-3 w-full rounded-full"
                    onClick={() => navigate("/profile/orders?status=in-progress")}
                  >
                    View orders
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className=" text-white w-full rounded-full border border-white py-3"
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </>
    </div>
  );
}