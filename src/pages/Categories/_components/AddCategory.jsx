import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Dialog from "../../../components/dialog";
import {
  useCreateCategory,
  useGetCategoryById,
  useUpdateCategory,
} from "../../../hooks/useCategoryApi";
const AddCategory = ({ onClose, id = null }) => {
  const queryClient = useQueryClient();

  // API: CREATE NATION
  const { mutate: createMutate, isLoading: createLoading } =
    useCreateCategory();

  // API: UPDATE NATION
  const { mutate: updateMutate, isLoading: updateLoading } =
    useUpdateCategory(id);

  // API: GET DETAIL NATION
  const { data: initData, isLoading: initLoading } = useGetCategoryById(id);

  const [form] = Form.useForm();
  const [body, setBody] = useState({
    categoryName: "",
  });

  useEffect(() => {
    if (id && initData) {
      setBody(initData);
      form.setFieldsValue(initData);
    }
  }, [id, initData]);

  const OnSubmit = () => {
    if (id) {
      updateMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getCategoryList");
          queryClient.invalidateQueries(["getCategoryById", id]);
          onClose();
        },
      });
    } else {
      createMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getCategoryList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>
        {id ? "CHỈNH SỬA" : "THÊM"} DANH MỤC
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
        <Form.Item label="Tên" name="categoryName">
          <Input
            onChange={(e) => setBody({ ...body, categoryName: e.target.value })}
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

export default AddCategory;
