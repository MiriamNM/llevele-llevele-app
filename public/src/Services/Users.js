import axios from 'axios';

export const CreateNewUser = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/users', data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};