/* eslint-disable tailwindcss/no-custom-classname */

export default function Bar() {
  return (
    <div className="flex h-32 w-[98%]	 items-center justify-evenly rounded-[5px] bg-white	text-2xl">
      <div className=" barSelect	relative  h-16 w-96 rounded-[25px] ">
        <select
          id="ecosystem"
          className="	h-full 	w-full appearance-none rounded-[25px] bg-[#F6F6F6] px-3"
        >
          <option value="dog">about our ecosystem</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div className=" barSelect	relative  h-16 w-72	 rounded-[25px]">
        <select
          id="ecosystem"
          className="	h-full	w-full appearance-none rounded-[25px] bg-[#F6F6F6] px-3 "
        >
          <option value="dog">services</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div className=" 	relative  h-16 w-[34rem] rounded-[25px]  ">
        <input
          id="ecosystem"
          className="	h-full 	w-full  rounded-[25px] bg-[#F6F6F6] px-3.5	focus:border-0"
          placeholder="search"
        />
        <div className="absolute right-[-10px] top-0 flex h-14 w-14 items-center justify-center	rounded-[50%]	bg-white	">
          <i className="bx bx-search" />
        </div>
      </div>
      <div className="flex justify-evenly">
        <button
          className="mx-1 h-16	 w-40 rounded-[25px] border-2	"
          type="button"
        >
          tracking
        </button>
        <button
          className="mx-1 h-16	 w-48 rounded-[25px] border-2	"
          type="button"
        >
          smart alarm
        </button>
        <button
          className="mx-1 h-16	 w-48 rounded-[25px] border-2	"
          type="button"
        >
          sleep diary
        </button>
      </div>
    </div>
  );
}
