import { PropsWithChildren } from "react";

export default function BarContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex h-32 w-[98%] items-center justify-evenly rounded-[5px] bg-white	text-2xl">
      {children}
    </div>
  );
}
