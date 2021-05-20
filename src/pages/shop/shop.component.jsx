import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collections/collection.component";
import "./shop.styles.scss";

// const ShopPage = ({ collections }) => (
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
