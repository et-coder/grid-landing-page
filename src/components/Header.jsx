import { menu } from "../constants";
const Header = () => {
  return (
    <header className="flex items-center h-[72px] border-b border-b-white/30 p-5 text-white">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1 text-[14px] font-medium">
          <span className="inline-block rounded-full w-2 h-2 bg-white"></span>
          Bridge Collective
        </div>
        <img src={menu} alt="Menu" />
      </div>
    </header>
  );
};

export default Header;
