import React from "react";

const Footer = () => {
  return (
    <footer className="py-1.5 flex items-center justify-center absolute bottom-0 left-0 w-full border-t border-slate-800">
      <span className="text-xs text-neutral-400 font-medium tracking-widest">
        &copy; {new Date().getFullYear()} | Designed & Developed By{" "}
        <a href="" className="text-pink-300">
          PRABANJAN
        </a>
      </span>
    </footer>
  );
};

export default Footer;
