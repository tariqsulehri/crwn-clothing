import React from "react";
import CollectionPreview from "../../components/collection/collection-preview.component";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop">
        {collection.map((item) => (
          <div key={item.id}>
            <h1> {item.title.toUpperCase()} </h1>
            <CollectionPreview items={item.items} />
          </div>
        ))}
      </div>
    );
  }
}

export default ShopPage;
