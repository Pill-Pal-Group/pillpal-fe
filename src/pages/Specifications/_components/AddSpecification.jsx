import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import Dialog from "../../../components/dialog";
const AddSpecification = ({ onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>ADD SPECIFICATION</h2>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item label="Name" name="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Detail" name="Detail">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default AddSpecification;
