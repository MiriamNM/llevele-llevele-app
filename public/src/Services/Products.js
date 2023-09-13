import axios from 'axios';

export const CreateNewProduct = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/products', data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};

export const GetAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/products');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};

export const DeleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};
