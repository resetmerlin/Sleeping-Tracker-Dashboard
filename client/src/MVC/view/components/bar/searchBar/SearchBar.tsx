/* eslint-disable tailwindcss/no-custom-classname */
export default function SearchBar() {
  return (
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
  );
}
