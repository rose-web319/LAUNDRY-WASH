import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer">
      <img
        src="/Logo.png"
        alt="logo"
        className="w-[200px] md:auto"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
