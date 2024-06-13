import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Dialog from "../../../components/dialog";
import {
  useCreateBrand,
  useGetBrandById,
  useUpdateBrand,
} from "../../../hooks/useBrandApi";

const AddBranch = ({ onClose, id = null }) => {
  const queryClient = useQueryClient();
  const [body, setBody] = useState({ brandUrl: "", brandLogo: "" });
  const [form] = Form.useForm();

  // API: CREATE BRAND
  const { mutate, isLoading } = useCreateBrand();

  // API: UPDATE BRAND
  const { mutate: updateMutate, isLoading: updateLoading } = useUpdateBrand(id);

  // API: GET BRAND
  const { data: initData, isLoading: initLoading } = useGetBrandById(id);

  useEffect(() => {
    if (id && initData) {
      setBody(initData);
      form.setFieldsValue(initData); // Explicitly set form values
    }
  }, [id, initData]);

  const onCreate = () => {
    if (id) {
      updateMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getBrandList");
          queryClient.invalidateQueries(["getBrandById", id]);
          onClose();
        },
      });
    } else {
      mutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getBrandList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>{id ? "UPDATE" : "ADD"} BRANCH</h2>
      {initLoading ? (
        <p>Loading...</p>
      ) : (
        <Form
          form={form}
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
          <Form.Item label="Link" name="brandUrl">
            <Input
              value={body.brandUrl}
              onChange={(e) => setBody({ ...body, brandUrl: e.target.value })}
            />
          </Form.Item>

          <Form.Item label="Logo" name="brandLogo">
            <Input
              value={body.brandLogo}
              onChange={(e) => setBody({ ...body, brandLogo: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading || updateLoading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Dialog>
  );
};

export default AddBranch;
