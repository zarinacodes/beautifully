/* eslint-disable import/no-anonymous-default-export */
import MainHeader from "../ui/mainheader";
import Logo from "../ui/logo";
import Menu from "../ui/menu";
import Search from "../ui/search";
import Favorites from "../ui/favorites";
import Cart from "../ui/cart";
import Container from "../ui/container";
import MobileSearch from "../ui/mobilesearch";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import { useProductContext } from "./useProductContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default ({ onOpen }) => {
  const { likedProducts, setSearch, search } = useProductContext();
  const numberOfLikes = likedProducts.length;
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [isSearched, setIsSearched] = useState(false);
  const handleClick = () => {
    setIsSearched(!isSearched);
  };
  const likeCounter =
    numberOfLikes <= 0 ? (
      <Favorites>
        <HeartIcon />
      </Favorites>
    ) : (
      <Favorites>
        <HeartIcon />
        <Favorites.LikeCounter>{numberOfLikes}</Favorites.LikeCounter>
      </Favorites>
    );
  const mobileSearch = isSearched ? (
    <>
      <Search.Icon onClick={handleClick}>
        <SearchIcon />
      </Search.Icon>
      <MobileSearch onChange={handleSearch} value={search} />
    </>
  ) : (
    <Search.Icon onClick={handleClick}>
      <SearchIcon />
    </Search.Icon>
  );
  return (
    <MainHeader>
      <MainHeader.Menu>
        <MenuAlt2Icon onClick={onOpen} />
      </MainHeader.Menu>
      <Link to="/">
        <Logo />
      </Link>
      <Menu>
        <Menu.List>
          <Menu.Item modifiers="bold">
            <Menu.Anchor to="/him">Men's</Menu.Anchor>
          </Menu.Item>
          <Menu.Item modifiers={["bold", "divider"]}>
            <Menu.Anchor to="/her">Women's</Menu.Anchor>
          </Menu.Item>
          <Menu.Item>Activities</Menu.Item>
          <Menu.Item>Brands</Menu.Item>
        </Menu.List>
      </Menu>
      <Container>
        {mobileSearch}
        <Search
          placeholder="Search..."
          onChange={handleSearch}
          value={search}
        />
      </Container>
      <Container>
        {likeCounter}
        <Cart>
          <ShoppingBagIcon />
        </Cart>
      </Container>
    </MainHeader>
  );
};
