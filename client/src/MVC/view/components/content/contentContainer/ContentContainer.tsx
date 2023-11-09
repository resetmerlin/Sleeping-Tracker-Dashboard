import { PropsWithChildren } from "react";

export default function ContentContainer({ children }: PropsWithChildren) {
  return (
    <div
      id="content"
      className="flex  h-[55rem] w-[98%]  rounded-[1rem] bg-white	"
    >
      {children}
    </div>
  );
}
