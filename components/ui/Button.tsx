"use client";
import { MouseEventHandler, ReactNode } from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  type?: "button" | "reset" | "submit" | undefined;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function Button({ type, children, onClick, disabled }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={pending}
      className="bg-slate-800 text-white px-3 py-2 font-semibold cursor-pointer rounded-md shadow"
    >
      {children}
    </button>
  );
}

export default Button;
