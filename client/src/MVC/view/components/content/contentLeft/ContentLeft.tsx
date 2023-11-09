import { PropsWithChildren } from "react";

export default function ContentLeft({ children }: PropsWithChildren) {
  return (
    <div id="content__left" className="my-4		flex	flex-col justify-between p-5">
      <div>
        <span className="text-7xl ">
          Personal sleep <br /> tracking.
        </span>
        <p className=" my-4	text-4xl font-light	">
          acheive better sleep patterns <br /> or improved overall well-
          <br />
          being.
        </p>
      </div>

      {children}
    </div>
  );
}
