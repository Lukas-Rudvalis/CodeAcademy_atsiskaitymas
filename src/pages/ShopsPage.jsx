import React, { useState } from 'react';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import ShopsList from '../components/shops/ShopsList';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Popup from '../components/ui/Popup';
import Button from '../components/ui/Button';

function ShopsPage() {
  const [filter, setFilter] = useState('All');

  const ref = collection(db, 'shops');
  const q = query(ref, orderBy('timestamp', 'desc'));
  const [value, loading, error] = useCollection(q);
  const docsWithUid =
    value &&
    value.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

  // get unique towns
  const uTowns = ['All'];
  docsWithUid?.forEach((doc) => {
    if (!uTowns.includes(doc.town)) uTowns.push(doc.town);
  });

  const filteredDocsWithUid =
    filter === 'All'
      ? docsWithUid
      : docsWithUid?.filter((doc) => doc.town === filter);

  return (
    <>
      {error && <Popup type="error">{error.code}</Popup>}
      {loading && <Popup type="info">Loading...</Popup>}
      {value?.size && <Popup type="success">Loaded successfully</Popup>}
      <Container>
        <Filters className="mb20">
          {uTowns.map((town) => (
            <li key={town}>
              <FilterBtn
                isActive={town === filter}
                onClick={() => setFilter(town)}
              >
                {town}
              </FilterBtn>
            </li>
          ))}
        </Filters>
      </Container>
      <ShopsContainer>
        <Title fz={4} className="tac mb20">
          Shops
        </Title>
        {value?.size === 0 && !loading && (
          <Text>
            There are no shops yet. Create one <Link to={'/add'}>here</Link>{' '}
          </Text>
        )}
        {value && <ShopsList list={filteredDocsWithUid} />}
      </ShopsContainer>
    </>
  );
}

const FilterBtn = styled(Button)`
  font-size: 14px;
  padding: 3px 10px;

  ${({ isActive }) => activeFilterStyle[isActive]};
`;

const activeFilterStyle = {
  true: css`
    background-color: var(--brown);
    border-color: var(--brown);
    &:hover {
      background-color: var(--brown-hover);
      border-color: var(--brown-hover);
    }
  `,
};

const Filters = styled.ul`
  display: flex;
  gap: 10px;
`;

const ShopsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  color: var(--gray);
  a {
    text-decoration: underline;
  }
`;

export default ShopsPage;
