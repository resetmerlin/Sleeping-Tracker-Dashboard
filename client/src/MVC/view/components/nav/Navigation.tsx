/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable tailwindcss/no-custom-classname */

type IProps = {
  weather: string | null;
  weatherIcon: string | null;
};

export default function Navigation({ weather, weatherIcon }: IProps) {
  return (
    <div className=" flex	h-32 w-full	justify-evenly	rounded-t-[2rem]	bg-[#F6F6F6] 	text-2xl	">
      <div className="flex w-2/5 items-center	 text-5xl">
        <div className="flex flex-col font-light	">
          <span>09.30</span>
          <span className="text-[#A6A6A6]">PM</span>
        </div>
        <img
          src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
          alt={`${weather}`}
        />
        <span className="text-xl font-light">{weather}</span>
      </div>

      <div className="flex h-full items-center justify-center font-medium		">
        <span className="text-4xl">s.Tracker</span>
      </div>

      <div className="flex w-2/5 items-center justify-end	">
        <span
          className="
        border-black	decoration-2	"
        >
          FAQs
        </span>
        <div className="mx-5	flex	w-40 items-center justify-between rounded-[30px] bg-white p-3">
          <button
            className="flex h-14 w-14 items-center justify-center rounded-[50%] bg-black"
            type="button"
          >
            <i className="bx bx-sun text-5xl text-white	" />
          </button>
          <button type="button">
            <i className="bx bx-moon text-5xl" />
          </button>
        </div>
        <span className="font-medium leading-6 text-[#9A9A9A]	">
          light <br /> mode
        </span>
      </div>
    </div>
  );
}
