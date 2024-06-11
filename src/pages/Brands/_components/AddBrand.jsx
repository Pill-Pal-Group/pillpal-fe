import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import Dialog from "../../../components/dialog";
import { useCreateBrand } from "../../../hooks/useBrandApi";
import { useQueryClient } from "react-query";
const AddBranch = ({ onClose }) => {
  const queryClient = useQueryClient();
  const [body, setBody] = useState({ brandUrl: "", brandLogo: "" });

  const { mutate, isLoading } = useCreateBrand();

  const onCreate = () => {
    mutate(body, {
      onSuccess: () => {
        queryClient.invalidateQueries("getBrandList");
        onClose();
      },
    });
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>ADD BRANCH</h2>
      <Form
        onFinish={onCreate}
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
        <Form.Item label="Link" name="Link">
          <Input
            onChange={(e) => setBody({ ...body, brandUrl: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Logo" name="Logo">
          <Input
            onChange={(e) => setBody({ ...body, brandLogo: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default AddBranch;
