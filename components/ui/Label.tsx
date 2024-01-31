import React, { ReactNode } from "react";

type LabelProps = {
  htmlFor: string;
  children: ReactNode;
};
function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="font-semibold">
      {children}
    </label>
  );
}

export default Label;
