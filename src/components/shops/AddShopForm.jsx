import React from 'react';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const inputsData = [
  { id: 1, type: 'text', name: 'shopName', placeholder: 'Shop Name' },
  { id: 2, type: 'text', name: 'town', placeholder: 'Town' },
  { id: 3, type: 'text', name: 'startYear', placeholder: 'Start Year' },
  { id: 4, type: 'textarea', name: 'description', placeholder: 'Description' },
  { id: 5, type: 'text', name: 'imageUrl', placeholder: 'Image URL' },
];

function AddShopForm({ onAddShop, loading }) {
  const formik = useFormik({
    initialValues: {
      // shopName: 'Shop 1',
      // town: 'Vilnius',
      // startYear: '1970',
      // description: 'This is a dummy shop',
      // imageUrl: `https://picsum.photos/id/${Math.ceil(
      //   Math.random() * 1084,
      // )}/200/300`,
      shopName: '',
      town: '',
      startYear: '',
      description: '',
      imageUrl: ``,
    },
    validationSchema: Yup.object({
      shopName: Yup.string()
        .min(4, 'At least 4 symbols')
        .required('Required field'),
      town: Yup.string()
        .min(4, 'At least 4 symbols')
        .required('Required field'),
      startYear: Yup.number()
        .min(4, 'At least 4 digits')
        .moreThan(1969, 'Not earlier than 1970')
        .lessThan(2023, 'Not later than 2022')
        .required('Required field'),
      description: Yup.string()
        .min(6, 'At least 6 symbols')
        .required('Required field'),
      imageUrl: Yup.string()
        .min(5, 'At least 5 symbols')
        .required('Required field'),
    }),
    onSubmit: (values) => {
      if (loading) return;
      values.timestamp = Date.now();
      values.town =
        values.town.charAt(0).toUpperCase() +
        values.town.slice(1).toLowerCase();
      onAddShop(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="flex-form">
      {inputsData.map((iObj) => (
        <div key={iObj.id}>
          <InputField
            type={iObj.type}
            placeholder={iObj.placeholder}
            id={iObj.name}
            value={formik.values[iObj.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched[iObj.name] && formik.errors[iObj.name] ? (
            <ErrorMsg>{formik.errors[iObj.name]}</ErrorMsg>
          ) : null}
        </div>
      ))}
      <Button disabled={loading} type="submit" className="mt20">
        Add
      </Button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--light-gray);
  max-width: 500px;
`;

const ErrorMsg = styled.p`
  color: var(--error);
  font-size: 12px;
  text-align: left;
  margin-left: 20px;
`;

AddShopForm.propTypes = {
  onAddShop: PropTypes.func,
  loading: PropTypes.bool,
};

export default AddShopForm;
