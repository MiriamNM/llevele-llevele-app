import axios from 'axios';

export const CreateNewProductInCart = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/cart', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetAllProductsInCart = async () => {
  try {
    const response = await axios.get('http://localhost:3001/cart');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteProductInCart = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/cart/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
