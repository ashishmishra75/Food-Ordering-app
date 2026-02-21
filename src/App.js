import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resList = [
  {
    id: "608598",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/7627473d-4b55-4426-a842-b409665ec1e7_608598.JPG",
    locality: "Sharda Nagar",
    cuisines: ["Pizzas"],
    costForTwo: "₹350 for two",
    avgRating: 4.2,
    sla: { deliveryTime: 26 },
  },

  {
    id: "123456",
    name: "Domino's Pizza",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/10/sample_dominos.JPG",
    locality: "Kakadeo",
    cuisines: ["Pizzas", "Italian"],
    costForTwo: "₹400 for two",
    avgRating: 4.4,
    sla: { deliveryTime: 30 },
  },

  {
    id: "789012",
    name: "KFC",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/15/sample_kfc.JPG",
    locality: "Civil Lines",
    cuisines: ["Burgers", "Fast Food"],
    costForTwo: "₹500 for two",
    avgRating: 4.1,
    sla: { deliveryTime: 28 },
  },

  {
    id: "456789",
    name: "Burger King",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/18/sample_bk.JPG",
    locality: "Govind Nagar",
    cuisines: ["Burgers", "American"],
    costForTwo: "₹450 for two",
    avgRating: 4.3,
    sla: { deliveryTime: 22 },
  },

  {
    id: "987654",
    name: "Biryani Blues",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/20/sample_biryani.JPG",
    locality: "Arya Nagar",
    cuisines: ["Biryani", "North Indian"],
    costForTwo: "₹600 for two",
    avgRating: 4.5,
    sla: { deliveryTime: 35 },
  },
];

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
