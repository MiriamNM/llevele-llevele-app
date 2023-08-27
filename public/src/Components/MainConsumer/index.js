import React from 'react';
import { Card } from 'antd';

const MainConsumer = () => {
  const { Meta } = Card;
  return (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
      <div className="flex flex-row py-2">
      <label className="pr-2">Rango de precio:</label> 
        <input
          type="number"
          style={{ borderColor: '#49BEB7' }}
          className="border rounded w-20"
        />
        <p> - </p>
        <input
          type="number"
          style={{ borderColor: '#49BEB7' }}
          className="border rounded w-20"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </main>
  );
};

export default MainConsumer;
