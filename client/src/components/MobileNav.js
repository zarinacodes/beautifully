/* eslint-disable import/no-anonymous-default-export */
import MobileNav from "../ui/mobilenav";
import Logo from "../ui/logo";
import { XIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default ({ onClose }) => {
  return (
    <MobileNav>
      <MobileNav.MobileHeader>
        <Logo modifiers="bigger" />
        <XIcon onClick={onClose} />
      </MobileNav.MobileHeader>
      <MobileNav.Menu>
        <MobileNav.MenuItem modifiers="bold">
          Women's Clothing <ChevronRightIcon />
        </MobileNav.MenuItem>
        <MobileNav.MenuItem modifiers="bold">
          Men's Clothing <ChevronRightIcon />
        </MobileNav.MenuItem>
        <MobileNav.MenuItem>
          Activities
          <ChevronRightIcon />
        </MobileNav.MenuItem>
        <MobileNav.MenuItem>
          Brands <ChevronRightIcon />
        </MobileNav.MenuItem>
      </MobileNav.Menu>
      <MobileNav.ClientsInfo>
        <li>My orders</li>
        <li>Support</li>
      </MobileNav.ClientsInfo>
      <MobileNav.Country>🇬🇧 United Kingdom</MobileNav.Country>
    </MobileNav>
  );
};
