import React from "react";
import CollectionPreview from "../collections-preview/collections-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} items={items} title={title} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
