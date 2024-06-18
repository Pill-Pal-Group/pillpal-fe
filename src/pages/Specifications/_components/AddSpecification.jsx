import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Dialog from "../../../components/dialog";
import {
  useCreateSpecification,
  useGetSpecificationById,
  useUpdateSpecification,
} from "../../../hooks/useSpecificationApi";
const AddSpecification = ({ onClose, id = null }) => {
  const queryClient = useQueryClient();

  // API: CREATE SPECIFICATION
  const { mutate: createMutate, isLoading: createLoading } =
    useCreateSpecification();

  // API: UPDATE SPECIFICATION
  const { mutate: updateMutate, isLoading: updateLoading } =
    useUpdateSpecification(id);

  // API: GET DETAIL SPECIFICATION
  const { data: initData, isLoading: initLoading } =
    useGetSpecificationById(id);

  const [form] = Form.useForm();
  const [body, setBody] = useState({
    typeName: "",
    detail: "",
  });

  useEffect(() => {
    if (id && initData) {
      setBody(initData);
      form.setFieldsValue(initData); // Explicitly set form values
    }
  }, [id, initData]);

  const OnSubmit = () => {
    if (id) {
      updateMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getSpecificationList");
          queryClient.invalidateQueries(["getSpecificationById", id]);
          onClose();
        },
      });
    } else {
      createMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getSpecificationList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>
        {id ? "CHỈNH SỬA" : "THÊM"} ĐẶC TÍNH
      </h2>
      <Form
        form={form}
        onFinish={OnSubmit}
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
        <Form.Item label="Tên đặc tính" name="typeName">
          <Input
            onChange={(e) => setBody({ ...body, typeName: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Ghi chú" name="detail">
          <Input
            onChange={(e) => setBody({ ...body, detail: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default AddSpecification;
