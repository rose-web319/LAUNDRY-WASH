import {
  itemQty,
  pickUpTimeData,
  serviceTypeData,
  itemsPerCost,
  ITEM_KEYS
} from "@/utils/constant";
import { validateBookingSchema } from "@/utils/dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { useNavigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import Footer from "../home/Footer";


export default function BookLaundry() {
  const { bookingForm, setBookingForm } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(validateBookingSchema),
    defaultValues: {
      serviceType: bookingForm?.serviceType || "",
      pickUpAddress: bookingForm?.pickUpAddress || "",
      pickUpPhone: bookingForm?.pickUpPhone || "",
      date: bookingForm?.date || "",
      time: bookingForm?.time || "",
      deliveryAddress: bookingForm?.deliveryAddress || "",
      deliveryPhone: bookingForm?.deliveryPhone || "",
      shirt: bookingForm?.shirt || "",
      trouser: bookingForm?.trouser || "",
      senator: bookingForm?.senator || "",
      native: bookingForm?.native || "",
      duvet: bookingForm?.duvet || "",
      specialItem: bookingForm?.specialItem || "",
      total: bookingForm?.total || "",
    },
  });

  const watchedItems = useWatch({
    control,
    name: ITEM_KEYS,
  });

  useEffect(() => {
    const total = ITEM_KEYS.reduce((sum, key, index) => {
      const qty = Number(watchedItems?.[index]) || 0;
      const unitPrice = itemsPerCost[key] || 0;
      return sum + qty * unitPrice;
    }, 0);
    setValue("total", total, { shouldValidate: true });
  }, [watchedItems, setValue]);

  const cancelForm = () => {
    setBookingForm(null);
    localStorage.removeItem("laundryBookingForm");
    reset();
    
  }

  const onSubmit = async (data) => {
    

    if (
      !data.pickUpPhone.startsWith("+234") ||
      !data.deliveryPhone.startsWith("+234")
    ) {
      toast.warning(
        "Ensure Pick up and delivery phone begins with intl format"
      );
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(data.date);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast.warning("Pick up date cannot be in the past");
      return;
    }

    const items = {
      shirt: data.shirt,
      trouser: data.trouser,
      native: data.native,
      senator: data.senator,
      duvet: data.duvet,
      specialItem: data.specialItem,
    };
    const hasAtLeastOneItem = Object.values(items).some(
      (value) => value !== undefined && value !== "" && Number(value) > 0
    );

    if (!hasAtLeastOneItem) {
      toast.warning("Select at least one item quantity to proceed");
      return;
    }
    localStorage.setItem("laundryBookingForm", JSON.stringify(data));
    setBookingForm(data);
    navigate("/book-Laundry/booking-summary");
  };

  return (
    <>
      {path === "/book-laundry" ? (
        <section className="container mx-auto py-10 h-full">
          <div className="w-full flex items-center justify-center ">
            <div className="mt-20 px-5 md:px-0 text-white text-[40px]">
              <h1>Book Laundry Pick-Up</h1>
            </div>
          </div>
          {/* input field section */}
          <div className="mt-5 flex flex-col w-full items-center justify-center text-white ">
            <div className="w-full px-5 md:px-0 md:w-[580px]">
              {/* each input field section -- service type */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* first box */}
                <div className="">
                  <h3>Service Type</h3>
                  <div className="bg-(--cardBg) px-2 py-4 mt-3 rounded-lg">
                    <fieldset className="fieldset">
                      <label className="fieldset-legend text-white text-sm">
                        Select Service
                      </label>
                      <select
                        className="select w-full bg-white text-black"
                        {...register("serviceType")}
                      >
                        <option value="" disabled selected>
                          Pick a service type
                        </option>
                        {serviceTypeData.map((service, index) => (
                          <option key={index} className="w-full">
                            {service}
                          </option>
                        ))}
                      </select>
                    </fieldset>
                    {errors?.serviceType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors?.serviceType?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* second box */}

                <div className="mt-2">
                  <h3>Pick-up Information</h3>
                  <div className="bg-(--cardBg) px-2 py-4 mt-3 rounded-lg">
                    <div>
                      <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Enter address"
                          className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                          {...register("pickUpAddress")}
                        />
                      </div>
                      {errors?.pickUpAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors?.pickUpAddress?.message}
                        </p>
                      )}
                      {/* second */}
                      <div className=" flex flex-col mt-2">
                        <label htmlFor="" className="text-sm">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          placeholder="+2348012345678"
                          className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                          {...register("pickUpPhone")}
                        />
                      </div>
                      {errors?.pickUpPhone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors?.pickUpPhone?.message}
                        </p>
                      )}
                      {/* three */}
                      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-2 ">
                        <span className="flex flex-col w-full">
                          <label htmlFor="" className="text-sm">
                            Pick-up Date
                          </label>
                          <input
                            type="date"
                            name=""
                            id=""
                            className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                            {...register("date")}
                          />
                          {errors?.date && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors?.date?.message}
                            </p>
                          )}
                        </span>

                        <span className="flex flex-col w-full">
                          <label htmlFor="" className="text-sm">
                            Pick-up Time
                          </label>
                          <select
                            className="bg-white w-full rounded-sm text-xs px-2 py-3 mt-1 text-black"
                            {...register("time")}
                          >
                            <option value="" disable selected>
                              Select Pick-up Time{" "}
                            </option>
                            {pickUpTimeData.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          {errors?.time && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors?.time?.message}
                            </p>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* delivery information */}
                <div className="mt-2">
                  <h3>Delivery Information</h3>
                  <div className="bg-(--cardBg) px-2 py-4 mt-3 rounded-lg">
                    <div>
                      <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Same as pick-up"
                          className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                          {...register("deliveryAddress")}
                        />
                      </div>
                      {errors?.deliveryAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors?.deliveryAddress?.message}
                        </p>
                      )}
                      {/* second */}
                      <div className=" flex flex-col mt-2">
                        <label htmlFor="" className="text-sm">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          placeholder="+2348012345678"
                          className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                          {...register("deliveryPhone")}
                        />
                      </div>
                      {errors?.deliveryPhone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors?.deliveryPhone?.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Add item section */}
                <div className="mt-2">
                  <h3>Add item</h3>
                  <div className="bg-(--cardBg) px-2 py-4 mt-3 rounded-lg">
                    <div>
                      <div className="grid grid-cols-3 items-center justify-center gap-5">
                        {/* first box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            Shirt (NGN 2,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("shirt")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* second box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            Trouser (NGN 2,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("trouser")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* third box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            2 Piece (NGN 2,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("senator")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* fourth box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            Native (NGN 2,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("native")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* fifth box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            Duveet (NGN 2,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("duvet")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* sixth box */}
                        <div className="col-span-12 md:col-span-6">
                          <label htmlFor="" className="text-xs">
                            Special Item (NGN 5,000 per)
                          </label>
                          <select
                            className="w-full text-sm bg-white text-black py-2 rounded-sm mt-1"
                            {...register("specialItem")}
                          >
                            <option value="" disabled selected>
                              Select quantity
                            </option>
                            {/* the right way to map */}
                            {itemQty.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pricing section */}
                <div
                  className="flex flex-col bg-(--cardBg) px-2 py-4 mt-3 rounded-lg"
                  {...register("total")}
                >
                  <label htmlFor="" className="text-sm">
                    Total Price
                  </label>
                  <input
                    type="text"
                    placeholder="&#x20A6; 0.00"
                    className="bg-white mt-2 py-2 rounded-sm text-black px-2"
                  />
                </div>
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 mt-5">
                  <button type="submit" className="border border-white w-full rounded-full py-3" onClick={cancelForm}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-(--signupBtnBg) w-full rounded-full py-3 text-white"
                  >
                    Proceed To Summary
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}