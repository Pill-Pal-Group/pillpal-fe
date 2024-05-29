import React from "react";
import Dialog from "../../../components/dialog";
import { Button, Checkbox, Form, Input, Select } from "antd";

const AddPharmaceutical = ({ onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>ADD PHARMACEUTICAL</h2>
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

        {/* <Form.Item> */}
        <Select
          style={{ width: "100%" }}
          options={[{ value: "sample", label: <span>sample</span> }]}
          defaultValue={{ value: "sample", label: <span>Nation</span> }}
        />
        {/* </Form.Item> */}
        <Form.Item
          name="active"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Active</Checkbox>
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

export default AddPharmaceutical;
