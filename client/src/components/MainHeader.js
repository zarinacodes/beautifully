/* eslint-disable import/no-anonymous-default-export */
import MainHeader from "../ui/mainheader";
import Logo from "../ui/logo";
import Menu from "../ui/menu";
import Search from "../ui/search";
import Favorites from "../ui/favorites";
import Cart from "../ui/cart";
import Container from "../ui/container";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { MenuAlt2Icon } from "@heroicons/react/outline";

export default ({ onOpen }) => {
  return (
    <MainHeader>
      <MainHeader.Menu>
        <MenuAlt2Icon onClick={onOpen} />
      </MainHeader.Menu>
      <Logo />
      <Menu>
        <Menu.List>
          <Menu.Item modifiers="bold">Men's</Menu.Item>
          <Menu.Item modifiers={["bold", "divider"]}>Women's</Menu.Item>
          <Menu.Item>Activities</Menu.Item>
          <Menu.Item>Brands</Menu.Item>
        </Menu.List>
      </Menu>
      <Container>
        <Search.Icon>
          <SearchIcon />
        </Search.Icon>
        <Search placeholder="Search..."></Search>
      </Container>
      <Container>
        <Favorites>
          <HeartIcon />
        </Favorites>
        <Cart>
          <ShoppingBagIcon />
        </Cart>
      </Container>
    </MainHeader>
  );
};
