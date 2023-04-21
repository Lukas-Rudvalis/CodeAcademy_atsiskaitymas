import React from 'react';
import AddShopForm from '../components/shops/AddShopForm';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase/firebase';

function AddShopPage() {
  function addShop(sObj) {
    const ref = collection(db, 'shops');
    addDoc(ref, sObj).then(() => {
      console.log('added shop');
    });
  }

  return (
    <div>
      <AddShopForm onAddShop={addShop} />
    </div>
  );
}

export default AddShopPage;
