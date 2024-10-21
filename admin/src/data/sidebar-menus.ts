import { title } from "process";
import {
  Dashboard,
  Categories,
  Coupons,
  Orders,
  Pages,
  Products,
  Profile,
  Reviews,
  Setting,
  Leaf,
  StuffUser,
} from "@/svg";
const sidebar_menu: Array<ISidebarMenus> = [
  {
    title: "MAIN",
    items: [
      {
        id: 1,
        icon: Dashboard,
        link: "/dashboard",
        title: "Dashboard",
      },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      {
        id: 2,
        icon: Products,
        link: "/product-list",
        title: "Product List",
      },
      {
        id: 3,
        icon: Products,
        link: "/product-grid",
        title: "Product Grid",
      },
      {
        id: 4,
        icon: Products,
        link: "/add-product",
        title: "Add Product",
      },
      {
        id: 5,
        icon: Categories,
        link: "/category",
        title: "Category",
      },
      {
        id: 6,
        icon: Orders,
        link: "/orders",
        title: "Orders",
      },
      {
        id: 7,
        icon: Leaf,
        link: "/brands",
        title: "Brand",
      },
      {
        id: 8,
        icon: Coupons,
        link: "/coupon",
        title: "Coupons",
      },
    ],
  },
  {
    title: "STAFF",
    items: [
      {
        id: 9,
        icon: Profile,
        link: "/profile",
        title: "Profile",
      },
      {
        id: 10,
        icon: StuffUser,
        link: "/our-staff",
        title: "Our Staff",
      },
    ],
  },
  
];

export default sidebar_menu;
