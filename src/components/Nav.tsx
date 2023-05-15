import React, { useEffect } from "react";
import styles from "./Nav.module.css";
import { Button } from "react-bootstrap";
import * as data from "./links.json";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useShoppingCart } from "../context/ShoppingCartContext";
const linkString = JSON.stringify(data);
const links = JSON.parse(linkString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles["links-container"]}>
      {links.map((links: Link) => {
        return (
          <div key={links.href} className={styles["link"]}>
            <a href={links.href}>{links.label}</a>
          </div>
        );
      })}
    </div>
  );
};

const Navbar: React.FC<{}> = () => {
  const { cartItems, openCart } = useShoppingCart();
  return (
    <nav className={`navbar sticky-top navbar-light bg-light ${styles.navbar}`}>
      {/* <div className={styles["logo-container"]}>
        <span>Logo</span>
      </div> */}
      <Links links={links} />
      <Button
        style={{
          width: "3rem",
          height: "3rem",
          position: "relative",
          marginRight: "20px",
        }}
        variant={"outline-primary"}
        className={"rounded-circle"}
        onClick={openCart}
      >
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 14V14.75H20.0856L20.2276 14.1819L19.5 14ZM6.5 14L5.77239 14.1819L5.91442 14.75H6.5V14ZM22 4L22.7276 4.1819L22.9606 3.25H22V4ZM1.5 1V0.25C1.20899 0.25 0.944243 0.418345 0.820808 0.681883C0.697373 0.945422 0.737532 1.25658 0.923834 1.48014L1.5 1ZM3.25 1L3.97761 0.818098C3.89414 0.484223 3.59415 0.25 3.25 0.25V1ZM19.5 13.25H6.5V14.75H19.5V13.25ZM7.22761 13.8181L4.72761 3.8181L3.27239 4.1819L5.77239 14.1819L7.22761 13.8181ZM4 4.75H22V3.25H4V4.75ZM21.2724 3.8181L18.7724 13.8181L20.2276 14.1819L22.7276 4.1819L21.2724 3.8181ZM1.5 1.75H3.25V0.25H1.5V1.75ZM2.52239 1.1819L3.27239 4.1819L4.72761 3.8181L3.97761 0.818098L2.52239 1.1819ZM4.57617 3.51986L2.07617 0.519862L0.923834 1.48014L3.42383 4.48014L4.57617 3.51986ZM7.25 17.5C7.25 17.9142 6.91421 18.25 6.5 18.25V19.75C7.74264 19.75 8.75 18.7426 8.75 17.5H7.25ZM6.5 18.25C6.08579 18.25 5.75 17.9142 5.75 17.5H4.25C4.25 18.7426 5.25736 19.75 6.5 19.75V18.25ZM5.75 17.5C5.75 17.0858 6.08579 16.75 6.5 16.75V15.25C5.25736 15.25 4.25 16.2574 4.25 17.5H5.75ZM6.5 16.75C6.91421 16.75 7.25 17.0858 7.25 17.5H8.75C8.75 16.2574 7.74264 15.25 6.5 15.25V16.75ZM20.25 17.5C20.25 17.9142 19.9142 18.25 19.5 18.25V19.75C20.7426 19.75 21.75 18.7426 21.75 17.5H20.25ZM19.5 18.25C19.0858 18.25 18.75 17.9142 18.75 17.5H17.25C17.25 18.7426 18.2574 19.75 19.5 19.75V18.25ZM18.75 17.5C18.75 17.0858 19.0858 16.75 19.5 16.75V15.25C18.2574 15.25 17.25 16.2574 17.25 17.5H18.75ZM19.5 16.75C19.9142 16.75 20.25 17.0858 20.25 17.5H21.75C21.75 16.2574 20.7426 15.25 19.5 15.25V16.75Z"
            fill="black"
          />
        </svg>
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%,25%)",
          }}
        >
          {cartItems.length}
        </div>
      </Button>
    </nav>
  );
};

export default Navbar;
