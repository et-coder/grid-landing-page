const Footer = () => (
  <footer className="flex flex-col p-5 text-white/80 text-[14px] font-medium lg:flex-row lg:justify-between lg:px-10">
    <span> &copy; {new Date().getFullYear()} Bridge collective</span>
    <span>Registered charity 123456782</span>
  </footer>
);

export default Footer;
