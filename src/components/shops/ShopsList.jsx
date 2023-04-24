import React from 'react';
import PropTypes from 'prop-types';
import SingleShop from './SingleShop';
import Grid from '../ui/Grid';

function ShopsList({ list }) {
  return (
    <Grid className="mb20">
      {list?.map((shop) => (
        <li key={shop.uid}>
          <SingleShop item={shop} />
        </li>
      ))}
    </Grid>
  );
}

ShopsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default ShopsList;
