import { logout } from "../../../../../action/auth";
import { signOut } from "next-auth/react";
export enum Link {
  SUPPORT = "/support",
  FUNDRAISERS = "/fundraisers",
  SOCIAL = "/social",
  Merch = "/merch",
  CART = "/merch/cart",
  LOGOUT = "/",
}

export enum Text {
  SUPPORT = "nav_support",
  FUNDRAISERS = "nav_fundraisers",
  SOCIAL = "nav_social",
  Merch = "nav_merch",
  CART = "nav_cart",
  LOGOUT = "nav_logout",
}

export const navLinks = [
  { text: Text.Merch, link: Link.Merch },
  { text: Text.SUPPORT, link: Link.SUPPORT },
  { text: Text.FUNDRAISERS, link: Link.FUNDRAISERS },
  { text: Text.SOCIAL, link: Link.SOCIAL },
  { text: Text.CART, link: Link.CART },
  { text: Text.LOGOUT, link: Link.LOGOUT, onClick: signOut },
];
