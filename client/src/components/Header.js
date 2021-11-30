/* eslint-disable import/no-anonymous-default-export */
import Header from "../ui/header";
import Subheader from "./Subheader";
import MainHeader from "./MainHeader";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header>
        {isMenuOpen ? <MobileNav onClose={() => setIsMenuOpen(false)} /> : null}
        <Subheader></Subheader>
        <MainHeader onOpen={() => setIsMenuOpen(true)}></MainHeader>
      </Header>
    </>
  );
};
