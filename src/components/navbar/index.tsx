import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext)!;
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-bold uppercase tracking-[-0.02rem] text-[#A76D5E]">
        <NavLink to={"/"}>DishDiscovery</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 text-[#A76D5E] border border-transparent focus:border-[#A76D5E] transition duration-200 "
        />
      </form>
      {/* <ul className="flex gap-5 "> */}
      {/*   <li> */}
      {/*     <NavLink */}
      {/*       to={"/"} */}
      {/*       className="text-[#413F45] hover:text-[#A76D5E] duration-300" */}
      {/*     > */}
      {/*       Home */}
      {/*     </NavLink> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <NavLink */}
      {/*       to={"/favorites"} */}
      {/*       className="text-[#413F45] hover:text-[#A76D5E] duration-300" */}
      {/*     > */}
      {/*       Favorites */}
      {/*     </NavLink> */}
      {/*   </li> */}
      {/* </ul> */}
    </nav>
  );
}
