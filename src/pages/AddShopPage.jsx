import React from 'react';
import AddShopForm from '../components/shops/AddShopForm';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase/firebase';
import Title from '../components/ui/Title';
import Container from '../components/ui/Container';

function AddShopPage() {
  function addShop(sObj) {
    const ref = collection(db, 'shops');
    addDoc(ref, sObj).then(() => {
      console.log('added shop');
    });
  }

  return (
    <Container className="tac">
      <Title fz={4} className="mb20">
        Add Shop
      </Title>
      <AddShopForm onAddShop={addShop} />
    </Container>
  );
}

export default AddShopPage;
