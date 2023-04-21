import React from 'react';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import ShopsList from '../components/shops/ShopsList';
import { collection, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';

function ShopsPage() {
  const ref = collection(db, 'shops');
  const q = query(ref);
  const [value, loading, error] = useCollection(q);
  const docsWithUid =
    value && value.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));

  return (
    <ShopsContainer>
      <Title fz={4} className="tac mb20">
        Shops
      </Title>
      <ShopsList list={docsWithUid} />
    </ShopsContainer>
  );
}

const ShopsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ShopsPage;
