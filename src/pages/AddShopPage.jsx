import React, { useState } from 'react';
import AddShopForm from '../components/shops/AddShopForm';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase/firebase';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';
import Popup from '../components/ui/Popup';

function AddShopPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function addShop(sObj) {
    const ref = collection(db, 'shops');
    setError('');
    setSuccess(false);
    setLoading(true);
    addDoc(ref, sObj)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        setError(err);
        // console.warn(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {success && <Popup type="success">Added successfully</Popup>}
      {loading && <Popup type="info">Loading...</Popup>}
      {error && <Popup type="error">{error}</Popup>}
      <Container className="tac">
        <Title fz={4} className="mb20">
          Add Shop
        </Title>
        <AddShopForm onAddShop={addShop} loading={loading} />
      </Container>
    </>
  );
}

export default AddShopPage;
