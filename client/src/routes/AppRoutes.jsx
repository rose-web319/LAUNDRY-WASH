import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Home from "../pages/home/Home";
import RootLayout from "@/layout/RootLayout"
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ForgetLayout from "@/layout/ForgetLayout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyEmail from "@/verify-email/VerifyEmail";
import Checkverification from "@/verify-email/Checkverification";
import BookingLayout from "@/layout/BookingLayout";
// import LaundryPickup from "@/pages/bookLaundry/BookLaundry";
import { PrivateRoute, PublicRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import { Suspense } from "react";
import LazySpinner from "@/components/LazySpinner";
import BookLaundry from "@/pages/bookLaundry/BookLaundry";
import BookingSummary from "@/pages/bookLaundry/BookingSummary";
import AdminLayout from "@/layout/AdminLayout";
import ProfileLayout from "@/layout/ProfileLayout";
import PaymentOptions from "@/pages/paymentOption/PaymentOptions";
import ProfileInfo from "@/Profile/profileinfo";

import Order from "@/pages/orders/Order";
import Payments from "@/Payments/Payments";
import Dashboard from "@/pages/dashboard/Dashboard";
import AdminOrders from "@/pages/adminorders/AdminOrders";
import Revenue from "@/pages/dashboard/adminRevenue/Revenue";
import Users from "@/pages/dashboard/users/Users"
import ErrorBoundary from"@/components/ErrorBoundary"



export default function AppRoutes() {
  const { accessToken } = useAuth();

  const routes = [
    {
      path: "/",
      errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PublicRoute accessToken={accessToken}>
            <AuthLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },

    {
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PublicRoute accessToken={accessToken}>
            <ForgetLayout />
          </PublicRoute>
        </Suspense>
      ),
      children: [
        {
          path: "auth/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "auth/reset-password",
          element: <ResetPassword />,
        },
      ],
    },

    {
      path: "/",
         errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <RootLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },

    {
      path: "verify-email/:userId/:verifyTokenLink",
         errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <VerifyEmail />
          </PrivateRoute>
        </Suspense>
      ),
    },

    {
      path: "verify-email",
         errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <Checkverification />
          </PrivateRoute>
        </Suspense>
      ),
    },

    // BOOKING ROUTES
    {
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <BookingLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          path: "book-laundry",
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <BookLaundry />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              path: "booking-summary",
              element: (
                <Suspense fallback={<LazySpinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <BookingSummary />
                  </PrivateRoute>
                </Suspense>
              ),
            },

            {
              path: "payment-options/:bookingId",
              element: (
                <Suspense fallback={<LazySpinner />}>
                  <PrivateRoute accessToken={accessToken}>
                    <PaymentOptions />
                  </PrivateRoute>
                </Suspense>
              ),
            },
          ],
        },

        {
          path: "profile",
             errorElement: <ErrorBoundary />,
          element: (
            <Suspense fallback={<LazySpinner />}>
              <PrivateRoute accessToken={accessToken}>
                <ProfileLayout />
              </PrivateRoute>
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <ProfileInfo />
                </PrivateRoute>
              ),
            },
            {
              path: "orders",
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Order />
                </PrivateRoute>
              ),
            },

            {
              path: "payments",
              element: (
                <PrivateRoute accessToken={accessToken}>
                  <Payments />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "admin",
         errorElement: <ErrorBoundary />,
      element: (
        <Suspense fallback={<LazySpinner />}>
          <PrivateRoute accessToken={accessToken}>
            <AdminLayout />
          </PrivateRoute>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <AdminOrders />
            </PrivateRoute>
          ),
        },
        {
          path: "revenue",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Revenue />
            </PrivateRoute>
          )
        },
        {
          path: "users",
          element: (
            <PrivateRoute accessToken={accessToken}>
              <Users />
            </PrivateRoute>
          )
        }
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
