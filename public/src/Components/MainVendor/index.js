import React from 'react';
import { Card } from 'antd';

const MainVendor = () => {
  const { Meta } = Card;
  return (
    <main className="flex flex-col p-10">
      <h2 className="text-red font-medium text-5xl">Productos</h2>
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

export default MainVendor;
