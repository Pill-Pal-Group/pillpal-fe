import React, { useEffect, useMemo, useState } from "react";
import Dialog from "../../../components/dialog";
import { Button, Form, Input, Select } from "antd";
import {
  useCreatePharmaceutical,
  useGetPharmaceuticalById,
  useUpdatePharmaceutical,
} from "../../../hooks/usePharmaceutialApi";
import { useGetNationList } from "../../../hooks/useNationApi";
import { useQueryClient } from "react-query";

const AddPharmaceutical = ({ onClose, id }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  // API: GET NATION LIST
  const { data: nationData = [], isLoading: nationLoading } =
    useGetNationList();

  // API: CREATE PHARMACEUTICAL COMPANY
  const { mutate: createMutate, isLoading: createLoading } =
    useCreatePharmaceutical();

  // API: GET DETAIL PHARMACEUTICAL COMPANY
  const { data: initData, isLoading: initLoading } =
    useGetPharmaceuticalById(id);

  // API: UPDATE PHARMACEUTICAL COMPANY
  const { mutate: updateMutate, isLoading: updateLoading } =
    useUpdatePharmaceutical(id);

  const nationOption = useMemo(() => {
    return nationData.map((nation) => ({
      value: nation.id,
      label: nation.nationName,
    }));
  }, [nationData]);

  useEffect(() => {
    if (initData && id) {
      form.setFieldsValue({
        companyName: initData.companyName,
        nationId: initData.nation.id,
      });
    }
  }, [initData, id, form]);

  const OnSubmit = (values) => {
    if (id) {
      updateMutate(values, {
        onSuccess: () => {
          queryClient.invalidateQueries("getPharmaceuticalList");
          queryClient.invalidateQueries(["getPharmaceuticalById", id]);
          onClose();
        },
      });
    } else {
      createMutate(values, {
        onSuccess: () => {
          queryClient.invalidateQueries("getPharmaceuticalList");
          onClose();
        },
      });
    }
  };

  return (
    <Dialog onClose={onClose}>
      <h2 style={{ textAlign: "center" }}>
        {id ? "UPDATE" : "ADD"} PHARMACEUTICAL
      </h2>
      <Form
        form={form}
        onFinish={OnSubmit}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="companyName"
          rules={[
            { required: true, message: "Please input the company name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nation"
          name="nationId"
          rules={[{ required: true, message: "Please select a nation!" }]}
        >
          <Select style={{ width: "100%" }} options={nationOption} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Dialog>
  );
};

export default AddPharmaceutical;
