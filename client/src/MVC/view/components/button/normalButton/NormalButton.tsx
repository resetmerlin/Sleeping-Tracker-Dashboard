import React, { PropsWithChildren } from "react";

export default function NormalButton({ children }: PropsWithChildren) {
  return (
    <button className="mx-1 h-16	 w-48 rounded-[25px] border-2	" type="button">
      {children}
    </button>
  );
}
