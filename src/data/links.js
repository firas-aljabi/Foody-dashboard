import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaIdBadge, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiPauseCircle,
  FiPlus,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  // {
  //   name: "Dashboard",
  //   icon: <FiHome />,
  //   url: "/Dashboard",
  // },
  // {
  //   name: "Products",
  //   icon: <FiShoppingBag />,
  //   subLinks: [
  //     {
  //       name: "All Products",
  //       url: "/products",
  //     },
  //     {
  //       name: "Add Product",
  //       url: "/products/add",
  //     },
  //     {
  //       name: "Product Category",
  //       url: "/products/categories",
  //     },
    
  //    /* {
  //       name: "Product Ingredients",
  //       url: "/products/ingredients",
  //     },*/
  //   ],
  // },
  {
    name: "Products",
    icon: <FiShoppingBag />,
    url: "/products",
  },
  {
    name: "Add Product",
    icon: <FiPlus />,
    url: "/products/add",
  },
  {
    name: "Product Category",
    icon: <FiLayers />,
    url: "/products/categories",
  },
  {
    name: "Offers",
    icon:  <FiPauseCircle />,
    url: "/Offers",
  },
  {
    name: "Add Offer",
    icon:  <FiPlus />,
    url: "/offer/add",
  },
  // {
  //   name: "Offers",
  //   icon: <FiPauseCircle />,
  //   subLinks: [
  //     {
  //       name: "All Offer",
  //       url: "/Offers",
  //     },
  //     {
  //       name: "Add Offer",
  //       url: "/offer/add",
  //     },
  //   ],
  // },
  // {
  //   name: "Sales",
  //   icon: <BsCurrencyDollar />,
  //   subLinks: [
  //     {
  //       name: "Sales Analytics",
  //       url: "/sales/analysis",
  //     },
  //     {
  //       name: "Product Sales",
  //       url: "/sales",
  //     },
  //   ],
  // },
/*  {
    name: "Orders",
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "All Orders",
        url: "/orders",
      },
    ],
  },*/

 /* {
    name: "Reviews",
    icon: <FiMessageCircle />,
    url: "/reviews",
  },*/
  // {
  //   name: "Settings",
  //   icon: <FiSettings />,
  //   url: "/settings",
  // },
];
