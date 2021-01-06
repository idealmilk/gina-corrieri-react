import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth } from './../../firebase/utils'
import { handleAddProduct } from './products.helpers';
import productTypes from './products.types';

export function* addProduct({ payload: {
  productCategory,
  productName,
  productThumbnail,
  productPrice
}}) {

  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
  } catch (err) {
    // console.log(err);
  }

}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export default function* productSagas() {
  yield all([
    call(onAddProductStart)
  ])
}
