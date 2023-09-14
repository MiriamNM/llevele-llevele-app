import React from "react";
import { Button, Drawer, Space, Table } from "antd";
import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const ModalCar = ({
  onClose,
  open,
  addProduct,
  onAddProduct,
  onDeleteCartProduct,
}) => {
  const columns = [
    {
      dataIndex: "id",
      id: "id",
      render: (id) => <CloseCircleOutlined onClick={() => onDeleteCartProduct({ id })} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      dataIndex: "id",
      id: "id",
      render: (id) => <PlusCircleOutlined onClick={() => onAddProduct({ id })} />,
    },
  ];

  return (
    <>
      <Drawer
        title="Carrito de compras"
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
        <Table
          columns={columns}
          dataSource={addProduct}
        />
      </Drawer>
    </>
  );
};
export default ModalCar;
