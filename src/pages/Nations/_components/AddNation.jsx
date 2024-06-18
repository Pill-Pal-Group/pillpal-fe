import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Dialog from "../../../components/dialog";
import {
  useCreateSpecification,
  useGetSpecificationById,
  useUpdateSpecification,
} from "../../../hooks/useSpecificationApi";
import {
  useCreateNation,
  useGetNationById,
  useUpdateNation,
} from "../../../hooks/useNationApi";
const AddNation = ({ onClose, id = null }) => {
  const queryClient = useQueryClient();

  // API: CREATE NATION
  const { mutate: createMutate, isLoading: createLoading } = useCreateNation();

  // API: UPDATE NATION
  const { mutate: updateMutate, isLoading: updateLoading } =
    useUpdateNation(id);

  // API: GET DETAIL NATION
  const { data: initData, isLoading: initLoading } = useGetNationById(id);

  const [form] = Form.useForm();
  const [body, setBody] = useState({
    nationCode: "",
    nationName: "",
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
          queryClient.invalidateQueries("getNationList");
          queryClient.invalidateQueries(["getNationById", id]);
          onClose();
        },
      });
    } else {
      createMutate(body, {
        onSuccess: () => {
          queryClient.invalidateQueries("getNationList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>
        {id ? "CHỈNH SỬA" : "THÊM"} QUỐC GIA
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
        <Form.Item label="Mã" name="nationCode">
          <Input
            onChange={(e) => setBody({ ...body, nationCode: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Tên quốc gia" name="nationName">
          <Input
            onChange={(e) => setBody({ ...body, nationName: e.target.value })}
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

export default AddNation;
