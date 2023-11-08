import Chart from "../chart/Chart";
import ChartPie from "../chart/chartPie/ChartPie";

export default function Content() {
  return (
    <div
      id="content"
      className="flex  h-[55rem] w-[98%]  rounded-[1rem] bg-white	"
    >
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

        <Chart color="black" />
      </div>

      <div
        id="content__right-top"
        className="	my-4		flex flex-col items-center justify-center	 rounded-[1rem] bg-cover p-5 text-white"
      >
        <span className="rounded-[4rem] border	 px-2		text-3xl">
          Sleep statistics.
        </span>
        <ChartPie />
      </div>
    </div>
  );
}
