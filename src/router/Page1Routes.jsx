import { Page1 } from "../Page1";
import Page1DetailA from "../Page1DetailA";
import Page1DetailB from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />,
  },
  {
    path: "/Page1DetailA",
    exact: false,
    children: <Page1DetailA />,
  },
  {
    path: "/Page1DetailB",
    exact: true,
    children: <Page1DetailB />,
  },
];
