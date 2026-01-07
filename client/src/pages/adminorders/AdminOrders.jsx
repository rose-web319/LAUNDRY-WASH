import { getAllOrders } from "@/api/admin";
import { DashboardCardSkeleton } from "@/components/Skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import AdminOrdersTable from "./AdminOrdersTable";
import usePaginate from "@/hooks/usePaginate";
import Paginate from "@/components/Paginate";
import Filter from "@/components/Filter";

export default function AdminOrders() {
  const { accessToken } = useAuth();
  const [searchParams] = useSearchParams();
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getAllOrders", searchParams.toString()],
    queryFn: () => getAllOrders(searchParams, accessToken),
  });

  const {
    activeOrders,
    inProgressOrders,
    completedOrders,
    canceledOrders,
    orders,
    pagination,
  } = data?.data?.data || {};

  const { handlePageChange, totalPages, hasMore, currentPage } = usePaginate({
    totalPages: pagination?.totalPages || 1,
    hasMore: pagination?.hasMore || false,
    currentPage: pagination?.currentPage || 1,
  });
  return (
    <div className="container p-4 mx-auto text-white">
      <p className="text-lg">Orders</p>
      {isPending ? (
        <DashboardCardSkeleton />
      ) : isError ? (
        <div role="alert" className="alert alert-error alert-soft">
          <span>
            Error!
            {error?.response?.data?.message ||
              error?.response?.data ||
              "Failed to fetch data"}
          </span>
        </div>
      ) : (
        <div>
           
          <div>
            <div className="grid grid-cols-12 justify-between items-center gap-5 mt-5">
              <div className="col-span-12 md:col-span-6 lg:col-span-3 px-3 py-2 bg-(--adminOrderBg) rounded-xl">
                <span className="flex gap-2 items-center ">
                  <img
                    src="/Frame 178 (1).png"
                    alt="cart-icon"
                    className="bg-white rounded-full p-1 w-10 h-10"
                  />
                  <p className="text-1xl">Active Orders</p>
                </span>
                <div className="mt-5 text-2xl">{activeOrders}</div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 px-3 py-2 bg-(--adminUserBg) rounded-xl">
                <span className="flex gap-2 items-center ">
                  <img
                    src="/Frame 178.png"
                    alt="user-icon"
                    className="bg-white rounded-full p-1 w-10 h-10"
                  />
                  <p className="text-1xl">In Progress orders</p>
                </span>
                <div className="mt-5 text-2xl">{inProgressOrders}</div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 px-3 py-2 bg-(--adminRevenueBg) rounded-xl">
                <span className="flex gap-2 items-center ">
                  <img
                    src="/Frame 178 (2).png"
                    alt="user-icon"
                    className="bg-white rounded-full p-1 w-10 h-10"
                  />
                  <p className="text-1xl">Completed Orders</p>
                </span>
                <div className="mt-5 text-2xl">{completedOrders}</div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 px-3 py-2 bg-red-500 rounded-xl">
                <span className="flex gap-2 items-center ">
                  <img
                    src="/Frame 178 (1).png"
                    alt="user-icon"
                    className="bg-white rounded-full p-1 w-10 h-10"
                  />
                  <p className="text-1xl">Canceled Orders</p>
                </span>
                <div className="mt-5 text-2xl">{canceledOrders}</div>
              </div>
            </div>
          </div>
           <div className="flex w-full justify-end py-5">
            <Filter/>
           </div>
          <AdminOrdersTable orders={orders} />
        </div>
      )}

      <Paginate
        totalPages={totalPages}
        hasMore={hasMore}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalItem={pagination?.total}
      />
    </div>
  );
}