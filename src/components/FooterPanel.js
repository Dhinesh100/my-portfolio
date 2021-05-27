import React from "react";
import "./styles/FooterPanel.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© DHINESH GV &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;