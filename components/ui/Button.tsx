import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  children: ReactNode;
  onClick?: () => void;
};

function Button({ type, children, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-slate-800 text-white px-3 py-2 font-semibold cursor-pointer rounded-md"
    >
      {children}
    </button>
  );
}

export default Button;
