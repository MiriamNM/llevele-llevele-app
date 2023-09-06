import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { GetAllProducts } from '../../Services/Products';

const MainVendor = () => {
  const [data, setData] = useState([]);

  const { Meta } = Card;

  useEffect(() => {
    GetAllProducts()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      <div className="flex items-center justify-center flex-wrap md:pt-4 sm-pt-4">
        {data.map(product => {
          return (
            <Card
              key={product.id}
              hoverable
              style={{ width: 240 }}
              // cover={
              //   <img
              //     alt="example"
              //     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              //   />
              // }
              className="mb-4 mr-4" 
            >
              <Meta title={product.name} description={`${product.description} - $${product.price}`} />
            </Card>
          )
        })}
      </div>
    </main>
  );
};

export default MainVendor;
