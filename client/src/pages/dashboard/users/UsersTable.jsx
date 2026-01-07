import { adminUsersColumn } from "@/utils/constant";
import TableBody from "@/components/TableBody";
import { useCallback } from "react";
import { Mail, Phone } from "lucide-react";

export default function UsersTable({ recentUsers }) {
  const renderCell = useCallback((users, columnKey) => {
    const cellValue = users[columnKey];
    switch (columnKey) {
      case "fullname":
        return <p className="text-sm">{users?.fullname}</p>;
      case "email":
        return <p className="text-sm">{users?.email}</p>;
      case "phone":
        return <p className="text-sm">{users?.phone}</p>;
      case "action":
        return (
          <div className="flex items-center gap-3">
            <div className="tooltip" data-tip={`email ${users?.fullname}`}>
              {" "}
              <Mail
                className="text-green-500 cursor-pointer"
                onClick={() => window.open(`mailto:${users?.email}`, "_blank")}
                size={20}
              />
            </div>
            <div
              className="tooltip tooltip-left"
              data-tip={`phone ${users?.fullname}`}
            >
              {" "}
              <Phone
                className="text-blue-500"
                onClick={() => window.open(`tel:${users?.phone}`, "_blank")}
                size={20}
              />
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <TableBody
        tableColumns={adminUsersColumn}
        tableData={recentUsers}
        renderCell={renderCell}
      />
    </>
  );
}