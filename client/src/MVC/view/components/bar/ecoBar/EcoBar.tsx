export default function EcoBar() {
  return (
    <div className=" barSelect relative h-16 w-96 rounded-[25px] ">
      <select
        id="ecosystem"
        className="	h-full 	w-full appearance-none rounded-[25px] bg-[#F6F6F6] px-3"
      >
        <option value="dog">about our ecosystem</option>
        <option value="cat">Cat</option>
      </select>
    </div>
  );
}
