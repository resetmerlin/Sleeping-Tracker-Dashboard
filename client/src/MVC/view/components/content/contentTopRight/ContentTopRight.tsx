import { PropsWithChildren } from "react";

export default function ContentTopRight({ children }: PropsWithChildren) {
  return (
    <div
      id="content__right-top"
      className="	my-4		flex flex-col items-center justify-center	 rounded-[1rem] bg-cover p-5 text-white"
    >
      <span className="rounded-[4rem] border	 px-2		text-3xl">
        Sleep statistics.
      </span>
      {children}
    </div>
  );
}
