import React from "react";
import { Button, Drawer, Space, List, Skeleton } from "antd";

const ModalCar = ({ placement, onClose, open }) => {
  return (
    <>
      <Drawer
        title="Carrito de compras"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose}>Comprar</Button>
          </Space>
        }
      >
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          renderItem={(item) => (
            <List.Item>
              <Skeleton>
                <List.Item.Meta title="hola" description="hola descripcion" />
                <div>precio</div>
              </Skeleton>
            </List.Item>
          )}
        />
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Drawer>
    </>
  );
};
export default ModalCar;
