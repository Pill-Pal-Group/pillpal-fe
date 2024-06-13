import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Dialog from "../../../components/dialog";
import {
  useCreateActiveIngredient,
  useGetActiveIngredientById,
  useUpdateActiveIngredient,
} from "../../../hooks/useActiveIngredientApi";

const AddActiveIngredient = ({ onClose, id = null }) => {
  const queryClient = useQueryClient();
  const [body, setBody] = useState({
    ingredientName: "",
    ingredientInformation: "",
  });
  const [form] = Form.useForm();

  // API: CREATE ACTIVE INGREDIENT
  const { mutate, isLoading } = useCreateActiveIngredient();

  // API: UPDATE ACTIVE INGREDIENT
  const { mutate: updateMutate, isLoading: updateLoading } =
    useUpdateActiveIngredient(id);

  // API: GET ACTIVE INGREDIENT
  const { data: initData, isLoading: initLoading } =
    useGetActiveIngredientById(id);

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
          queryClient.invalidateQueries("getActiveIngredientList");
          queryClient.invalidateQueries(["getActiveIngredientById", id]);
          onClose();
        },
      });
    } else {
      mutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getActiveIngredientList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>
        {id ? "UPDATE" : "ADD"} ACTIVE INGREDIENT
      </h2>
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
          <Form.Item label="Name" name="ingredientName">
            <Input
              onChange={(e) =>
                setBody({ ...body, ingredientName: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Information" name="ingredientInformation">
            <Input
              onChange={(e) =>
                setBody({ ...body, ingredientInformation: e.target.value })
              }
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

export default AddActiveIngredient;
