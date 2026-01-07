import { useNavigate, useLocation } from "react-router";
import { ChevronRight, Loader } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking } from "@/api/booking";
import { toast } from "react-toastify";
import { itemsPerCost, ITEM_KEYS } from "@/utils/constant";

export default function BookingSummary() {
  const { bookingForm, accessToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const items = {
    shirt: bookingForm?.shirt,
    trouser: bookingForm?.trouser,
    native: bookingForm?.native,
    senator: bookingForm?.senator,
    duvet: bookingForm?.duvet,
    specialItem: bookingForm?.specialItem,
  };

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (res) => {
      toast.success(res.data.message || "Booking places Successfully");
      queryClient.invalidateQueries({ queryKey: ["userbookings"] });
      navigate(`/book-laundry/payment-options/${res.data.data._id}`);
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data ||
          "Failed to place booking"
      );
    },
  });

  const placeOrder = async () => {
    mutation.mutate({ formData: bookingForm, accessToken });
  };
  return (
    <div className="container mx-auto py-25 h-full">
      <div className="w-full flex">
        <div className="px-5 md:px-0 flex gap-3 items-center text-white py-5">
          <h1
            className="text-3xl md:text-2xl font-semibold cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Book Laundry
          </h1>
          <ChevronRight />
          <h1
            className={`text-3xl md:text-2xl font-semibold ${
              path ? "text-(--signupBtnBg)" : ""
            }`}
          >
            Booking Summary
          </h1>
        </div>
      </div>
      <section className="max-w-[580px] mx-auto flex items-center justify-center">
        {/* container the the items */}
        <div className="w-full px-5 md:px-0 md:w-[580px]">
          <div className="text-white mt-10">
            <h1>Service & Pick-up Information</h1>
          </div>
          {/* service and pickup info */}
          <div className="flex flex-col bg-(--navBg) text-white py-2 px-4 rounded-2xl gap-3 text-sm mt-2">
            {/* one */}
            <span className="flex justify-between items-center">
              <p>Service</p>
              <h1>{bookingForm?.serviceType}</h1>
            </span>
            {/* two */}
            <span className="flex justify-between items-center">
              <p>Address</p>
              <h1>{bookingForm?.pickUpAddress}</h1>
            </span>
            {/* three */}
            <span className="flex justify-between items-center">
              <p>Phone Number</p>
              <h1>{bookingForm?.pickUpPhone}</h1>
            </span>
            {/* four */}
            <span className="flex justify-between items-center">
              <p>Pick-up Date</p>
              <h1>
                {bookingForm?.date &&
                  new Date(bookingForm.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
              </h1>
            </span>
            {/* five */}
            <span className="flex justify-between items-center">
              <p>Pick-up Time</p>
              <h1>{bookingForm?.time}</h1>
            </span>
          </div>
          {/* delivery information */}
          <div className="text-white mt-5">
            <h1>Delivery Information</h1>
          </div>
          <div className="flex flex-col bg-(--navBg) text-white py-2 px-4 rounded-2xl gap-3 text-sm mt-2">
            {/* one */}
            <span className="flex justify-between items-center">
              <p>Address</p>
              <h1>{bookingForm?.pickUpAddress}</h1>
            </span>
            {/* two */}
            <span className="flex justify-between items-center">
              <p>Phone Number</p>
              <h1>{bookingForm?.pickUpPhone}</h1>
            </span>
          </div>

          {/* item information */}
          <div className="text-white mt-5">
            <h1>Item Information</h1>
          </div>
          <div className="flex flex-col bg-(--navBg) text-white py-2 px-4 rounded-2xl gap-3 text-sm mt-2">
            {ITEM_KEYS.map((key) => {
              const quantity = items[key];
              if (!quantity || Number(quantity) < 1) return null;

              const label =
                key === "specialItem"
                  ? "Special Item"
                  : key.charAt(0).toUpperCase() + key.slice(1);

              const pricePerItem = itemsPerCost[key];
              return (
                <div key={key} className="flex justify-between items-center">
                  <p>
                    {label} (&#x20A6;
                    {pricePerItem} per item)
                  </p>
                  <h1 className="text-base sm:text-lg">{quantity}</h1>
                </div>
              );
            })}
          </div>
          <div className="py-2 mt-2">
            <h1 className="text-white">Pricing</h1>
          </div>
          <div className="flex justify-between items-center text-black bg-white rounded-3xl px-4 py-3">
            <div>Total Price</div>
            <div className="flex gap-1">
              <span>₦</span>
              {bookingForm?.total}
            </div>
          </div>

          {/* edit and confirm order section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 mt-5 text-white">
            <button
              className="border border-white w-full rounded-full py-3"
              onClick={() => navigate("/book-laundry")}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-(--signupBtnBg) w-full rounded-full py-3 flex justify-center items-center"
              onClick={placeOrder}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader className="animate-spin mr-2" />
                  Confirm Booking
                </>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}