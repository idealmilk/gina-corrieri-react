import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import Modal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import LoadMore from './../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const Admin = props => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('tshirt');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productColour, setProductColour] = useState('');
  const [productNeckline, setProductNeckline] = useState(0);
  const [productLength, setProductLength] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const [productShoulder, setProductShoulder] = useState(0);
  const [productArmhole, setProductArmhole] = useState(0);
  const [productWaist, setProductWaist] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductSize('');
    setProductColour('');
    setProductNeckline(0);
    setProductLength(0);
    setProductWidth(0);
    setProductShoulder(0);
    setProductArmhole(0);
    setProductWaist(0);
    setProductPrice(0);
    setProductDesc('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productSize,
        productColour,
        productNeckline,
        productLength,
        productWidth,
        productShoulder,
        productArmhole,
        productWaist,
        productPrice,
        productDesc,
      })
    );
    resetForm();

  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "tshirt",
                name: "T Shirt"
              }, {
                value: "bag",
                name: "Bag"
              }, {
                value: "trousers",
                name: "Trousers"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Size"
              type="text"
              value={productSize}
              handleChange={e => setProductSize(e.target.value)}
            />

            <FormInput
              label="Colour"
              type="text"
              value={productColour}
              handleChange={e => setProductColour(e.target.value)}
            />

            <FormInput
              label="Neckline"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productNeckline}
              handleChange={e => setProductNeckline(e.target.value)}
            />

            <FormInput
              label="Length"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productLength}
              handleChange={e => setProductLength(e.target.value)}
            />

            <FormInput
              label="Width"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productWidth}
              handleChange={e => setProductWidth(e.target.value)}
            />

            <FormInput
              label="Shoulder"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productShoulder}
              handleChange={e => setProductShoulder(e.target.value)}
            />

            <FormInput
              label="Armhole"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productArmhole}
              handleChange={e => setProductArmhole(e.target.value)}
            />

            <FormInput
              label="Waist"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productWaist}
              handleChange={e => setProductWaist(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

      <div className="manageProducts">

        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            £{productPrice}
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;
