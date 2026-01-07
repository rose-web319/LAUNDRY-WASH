import { adminOrdersColumn, orderStatusColors } from "@/utils/constant";
import TableBody from "@/components/TableBody";
import { useCallback } from "react";
import { CheckCheck, Truck } from "lucide-react";
import { updateOrderDelivery, updatePaymentStatus } from "@/api/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";

export default function AdminOrdersTable({ orders }) {
  const { accessToken } = useAuth();
  const queryClient = useQueryClient();

  const paymentMutation = useMutation({
    mutationFn: updatePaymentStatus,
    onSuccess: (res) => {
      toast.success(res.data.message || "Payment update success");
      queryClient.invalidateQueries({ queryKey: ["getAllOrders"] });
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data ||
          error?.response?.data?.message ||
          "Someting went wrong"
      );
    },
  });

  const deliveryMutation = useMutation({
    mutationFn: updateOrderDelivery,
    onSuccess: (res) => {
      toast.success(res.data.message || "delivery status success");
      queryClient.invalidateQueries({ queryKey: ["getAllOrders"] });
    },
    onError: (error) => {
      import.meta.env.DEV && console.error(error);
      toast.error(
        error?.response?.data ||
          error?.response?.data?.message ||
          "Someting went wrong"
      );
    },
  });

  const renderCell = useCallback(
    (order, columnKey) => {
      const paymentFn = async () => {
        paymentMutation.mutate({ bookingId: order?.id, accessToken });
      };

      const deliveryFn = async () => {
        deliveryMutation.mutate({ bookingId: order?.id, accessToken });
      };

      const cellValue = order[columnKey];
      switch (columnKey) {
        case "client":
          return <p className="text-sm">{order?.userId?.fullname}</p>;
        case "service":
          return <p className="text-sm">{order?.serviceType}</p>;
        case "createdAt":
          return (
            <p className="text-sm">
              {new Date(order?.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              {order?.pickUp?.time}
            </p>
          );
        case "isPaid":
          return (
            <p className="text-sm">{order?.isPaid ? "Paid" : "Not Paid"}</p>
          );
        case "status":
          return (
            <div
              className={`capitalize badge font-semibold rounded-sm py-3 px-4 ${
                orderStatusColors[order?.status]
              }`}
            >
              {order?.status}
            </div>
          );

        case "amount":
          return <p>&#x20A6; {order?.total || 0}</p>;
        case "isDelivered":
          return (
            <div
              className={`capitalize badge font-semibold rounded-sm py-3 px-4 ${
                order?.isDelivered
                  ? "bg-green-200 text-green-700"
                  : "bg-yellow-200 text-yellow-700"
              }`}
            >
              {order?.isDelivered ? "Delivered" : "Not Delivered"}
            </div>
          );
        case "action":
          return (
            <div className="flex gap-4 items-center">
              <div
                className="tooltip tooltip-primary tooltip-left"
                data-tip={order?.isPaid ? "Paid" : "Mark order as paid"}
                onClick={paymentFn}
              >
                <CheckCheck
                  className={`${
                    order?.isPaid ? "text-green-500" : "text-yellow-500"
                  }`}
                />
              </div>
              <div
                className="tooltip tooltip-primary tooltip-left cursor-pointer"
                data-tip={
                  order?.isDelivered
                    ? "Mark as Not Delivered"
                    : "Mark as Delivered"
                }
                onClick={deliveryFn}
              >
                <Truck
                  className={`${
                    order?.isDelivered ? "text-green-500" : "text-red-500"
                  }`}
                />
              </div>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [deliveryMutation, accessToken, paymentMutation]
  );
  return (
    <>
      <TableBody
        tableColumns={adminOrdersColumn}
        tableData={orders}
        renderCell={renderCell}
      />
    </>
  );
}