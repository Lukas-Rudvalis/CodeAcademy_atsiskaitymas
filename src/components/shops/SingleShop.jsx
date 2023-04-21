import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from '../ui/ShopCard';
import Title from '../ui/Title';
import styled from 'styled-components';

function SingleShop({ item }) {
  const { imageUrl, startYear, shopName, town, description } = item;
  return (
    <ShopCard>
      <CardTop className="mb20">
        <Img src={imageUrl} alt="shop" />
        <Outline />
      </CardTop>
      <CartBottom>
        <ShopTitle className="tac" h={2} fz={3}>
          {shopName}
        </ShopTitle>
        <div className="flex mb20">
          <Text>{town}</Text>
          <Text>{startYear}</Text>
        </div>
        <Description>{description}</Description>
      </CartBottom>
    </ShopCard>
  );
}

const ShopTitle = styled(Title)`
  color: var(--dark-gray);
`;

const Text = styled.p`
  color: var(--dark-gray);
  font-size: 20px;
`;

const CardTop = styled.div`
  position: relative;
`;

const Outline = styled.div`
  border-radius: 50px 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid var(--brown);
  bottom: -10px;
  right: -15px;
  z-index: -10;
`;

const Description = styled.p`
  color: var(--gray);
  font-size: 18px;
`;

const CartBottom = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

const Img = styled.img`
  object-fit: cover;
  max-height: 200px;
  border-radius: 50px 0;
`;

SingleShop.propTypes = {
  item: PropTypes.object,
};

export default SingleShop;
