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
      title: "Borra",
      dataIndex: "id",
      id: "id",
      render: (id) => (
        <CloseCircleOutlined onClick={() => onDeleteCartProduct(id)} />
      ),
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Agrega",
      dataIndex: "id",
      id: "id",
      render: (id, record) => (
        <PlusCircleOutlined
          onClick={() =>
            onAddProduct({
              name: record.name,
              price: record.price,
              quality: record.quality,
              description: record.description,
            })
          }
        />
      ),
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
        <Table columns={columns} dataSource={addProduct} />
      </Drawer>
    </>
  );
};
export default ModalCar;
