import React from "react";
import AddProduct from "./Products/AddProduct/AddProduct";
import { Sidebar, SingleProduct } from "../components";
import { useSelector } from "react-redux";
import AllProducts from "./Products/AllProducts/AllProducts";
import MainDashboard from "./MainDashboard/MainDashboard";
import Orders from "./Products/Orders/Orders";

import "./dashboard.css";

import { OptionMenuProvider as AllProductSelectedOption } from "./Products/ContextMenu/ContextMenu";

const Dashboard = () => {
  const selectedTab = useSelector(
    (state) => state.selectedTabReducer.selectedTab
  );
  const renderComponent = () => {
    return selectedTab === "dashboard" ? (
      <MainDashboard />
    ) : selectedTab === "all_products" ? (
      <AllProducts />
    ) : selectedTab === "single_product" ? (
      <SingleProduct />
    ) : selectedTab === "orders" ? (
      <Orders />
    ) : selectedTab === "product_form" ? (
      <AddProduct />
    ) : null;
  };

  return (
    <AllProductSelectedOption>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-view-area" id="dashboardViewArea">
          {/* <div className="page-navigation">
            <p>
              <i class="fas fa-file-alt"></i> Eatme | Food Delivery
            </p>
          </div> */}

          {renderComponent()}
        </div>
      </div>
    </AllProductSelectedOption>
  );
};

export default Dashboard;
