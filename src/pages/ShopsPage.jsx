import React from 'react';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import ShopsList from '../components/shops/ShopsList';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Popup from '../components/ui/Popup';

function ShopsPage() {
  const ref = collection(db, 'shops');
  const q = query(ref, orderBy('timestamp', 'desc'));
  const [value, loading, error] = useCollection(q);
  const docsWithUid =
    value &&
    value.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));
  return (
    <>
      {error && <Popup type="error">{error.code}</Popup>}
      {loading && <Popup type="info">Loading...</Popup>}
      {value?.size && <Popup type="success">Loaded successfully</Popup>}
      <ShopsContainer>
        <Title fz={4} className="tac mb20">
          Shops
        </Title>
        {value?.size === 0 && !loading && (
          <Text>
            There are no shops yet. Create one <Link to={'/add'}>here</Link>{' '}
          </Text>
        )}
        {value && <ShopsList list={docsWithUid} />}
      </ShopsContainer>
    </>
  );
}

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
