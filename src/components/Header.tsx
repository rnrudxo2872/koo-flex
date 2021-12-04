import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Col,
  List,
  Logo,
  Nav,
  Item,
  Pointer,
  SearchWrapper,
  SearchInput,
  SearchSvg,
} from "../styleds/Header.styled";
import { LogoVariant, NavVariant } from "../variants/Header.variants";

function Header() {
  const [onSearch, setOnSearch] = useState(false);
  const HomeMatch = useRouteMatch("/");
  const TvMatch = useRouteMatch("/tv");
  const { scrollY } = useViewportScroll();
  const NavAnimation = useAnimation();
  const LogoAnimation = useAnimation();
  const SvgAnimation = useAnimation();
  const PointerId = "HeaderPointer";

  const OnClickSearch = () => {
    if (onSearch) {
      SvgAnimation.start({ x: 0 });
    } else {
      SvgAnimation.start({ x: -240 });
    }
    setOnSearch((prev) => !prev);
  };

  useEffect(() => {
    function scrollingPage() {
      if (scrollY.get() > 0) {
        NavAnimation.start("scroll");
        SvgAnimation.start({ fill: "white" });
      } else {
        NavAnimation.start("init");
        SvgAnimation.start({ fill: "black" });
      }
    }

    const HeaderBackgroundChange = scrollY.onChange(scrollingPage);

    return () => {
      HeaderBackgroundChange();
    };
  }, [NavAnimation, scrollY]);

  const OnLogoHoverEnd = () => {
    LogoAnimation.start("end");
  };

  return (
    <Nav variants={NavVariant} animate={NavAnimation} initial={"init"}>
      <Col>
        <Logo
          variants={LogoVariant}
          animate={LogoAnimation}
          initial={"init"}
          whileHover={"hover"}
          onHoverEnd={OnLogoHoverEnd}
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"></motion.path>
        </Logo>
        <List>
          <Item>
            <Link to="/">Home</Link>
            {HomeMatch?.isExact && <Pointer layoutId={PointerId} />}
          </Item>
          <Item>
            <Link to="/tv">TV Shows</Link>
            {TvMatch && <Pointer layoutId={PointerId} />}
          </Item>
          <Item>
            <Link to="/movies">Movies</Link>
            {null && <Pointer layoutId={PointerId} />}
          </Item>
          <Item>
            <Link to="/new-popular">New & Popular</Link>
            {null && <Pointer layoutId={PointerId} />}
          </Item>
          <Item>
            <Link to="/mylist">My List</Link>
            {null && <Pointer layoutId={PointerId} />}
          </Item>
        </List>
      </Col>
      <Col>
        <SearchWrapper>
          <SearchInput
            initial={{ scaleX: 0 }}
            animate={{ scaleX: onSearch ? 1 : 0 }}
            placeholder="search content"
          />
          <SearchSvg
            onClick={OnClickSearch}
            animate={SvgAnimation}
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </SearchSvg>
        </SearchWrapper>
      </Col>
    </Nav>
  );
}

export default Header;
