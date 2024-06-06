import { Card, Col, Descriptions, Row, Table, Typography } from "antd";
import React from "react";
import "./style.css";
import { useGetMedicine } from "../../hooks/useMedicineApi";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const { Title, Text } = Typography;

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading } = useGetMedicine(id);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="product-details-container">
      <Title
        level={2}
        style={{
          textAlign: "center",
          backgroundColor: "#77a942",
          color: "#fff",
          padding: "10px 0",
        }}
      >
        {data.medicineName}
      </Title>

      <Row gutter={[16, 16]} justify="center" style={{ margin: "20px 0" }}>
        <Col span={8}>
          <Card hoverable cover={<img src={data.image} />} />
        </Col>
        <Col span={16}>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Tên Thuốc">
              {data.medicineName}
            </Descriptions.Item>
            <Descriptions.Item label="Hoạt Chất - Nồng độ/ hàm lượng">
              {/* {data.activeIngredients.map(v=> v.ingredientInformation).join("<br />")}               */}
            </Descriptions.Item>
            <Descriptions.Item label="Dạng Bào Chế">
              {data.dosageForms.map((v) => v.formName).join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Quy cách đóng gói">
              {data.specification.typeName} {data.specification.detail}
            </Descriptions.Item>
            <Descriptions.Item label="Công ty Sản Xuất">
              {data.pharmaceuticalCompanies
                .map((v) => v.companyName)
                .join("<br />")}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Title level={4} style={{ marginTop: "20px" }}>
        Giá bán buôn kê khai
      </Title>
      <Table
        bordered
        pagination={false}
        dataSource={[
          {
            key: "1",
            date: "21/08/2019",
            company: "CÔNG TY TNHH ZUILI LIFE PHARMA VIỆT NAM",
            packaging: "Hộp 2 vỉ x 7 viên",
            price: "12,564",
          },
          {
            key: "2",
            date: "24/11/2016",
            company: "Công ty cổ phần Dược liệu TW 2",
            packaging: "Hộp 2 vỉ x 7 viên",
            price: "12,564",
          },
        ]}
        columns={[
          { title: "Ngày kê khai", dataIndex: "date", key: "date" },
          { title: "Đơn vị kê khai", dataIndex: "company", key: "company" },
          {
            title: "Quy cách đóng gói",
            dataIndex: "packaging",
            key: "packaging",
          },
          { title: "Giá kê khai", dataIndex: "price", key: "price" },
          {
            title: "ĐVT",
            dataIndex: "unit",
            key: "unit",
            render: () => "Viên",
          },
        ]}
      />

      <Title level={4} style={{ marginTop: "20px" }}>
        Giá trúng thầu
      </Title>
      <Table
        bordered
        pagination={false}
        dataSource={[
          {
            key: "1",
            date: "14/06/2020",
            hospital: "Sở Tư Pháp tỉnh Thái Nguyên - TT ĐV bán đấu giá Tài sản",
            packaging: "Hộp 2 vỉ x 7 viên nén bao phim, Uống",
            price: "11,936",
          },
          {
            key: "2",
            date: "12/07/2023",
            hospital: "SYT TP.HCM",
            packaging: "Hộp 2 vỉ x 7 viên",
            price: "11,936",
          },
          {
            key: "3",
            date: "28/11/2019",
            hospital: "SYT Đồng Nai",
            packaging: "Hộp 2 vỉ x 7 viên",
            price: "11,936",
          },
        ]}
        columns={[
          { title: "Ngày quyết định", dataIndex: "date", key: "date" },
          {
            title: "Bệnh viện / Sở y tế",
            dataIndex: "hospital",
            key: "hospital",
          },
          {
            title: "Quy cách đóng gói",
            dataIndex: "packaging",
            key: "packaging",
          },
          {
            title: "Đơn vị tính",
            dataIndex: "unit",
            key: "unit",
            render: () => "Viên",
          },
          { title: "Giá", dataIndex: "price", key: "price" },
        ]}
      />

      <Title
        level={4}
        style={{
          marginTop: "20px",
          backgroundColor: "#004fa2",
          color: "#fff",
          padding: "10px 0",
        }}
      >
        Thuốc có cùng công ty sản xuất
      </Title>
      <Row gutter={[16, 16]} justify="center">
        <Col span={8}>
          <Card title="Augmentin 1g" hoverable>
            <p>Amoxicillin (dưới dạng Amoxicillin trihydrate) 875 mg</p>
            <p>Acid clavulanic (dưới dạng kali clavulanat) 125 mg</p>
            <p>SmithKline Beecham Pharmaceuticals - UK</p>
            <p>Giá bán buôn kê khai: 20,797/Viên</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Augmentin 1g tablets" hoverable>
            <p>Amoxicillin, Acid clavulanic</p>
            <p>SmithKline Beecham Pharmaceuticals - UK</p>
            <p>Giá bán buôn kê khai: 20,797/Viên</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Augmentin 625mg tablets" hoverable>
            <p>Amoxicillin trihydrate, Clavulanate kali</p>
            <p>SmithKline Beecham Pharmaceuticals - UK</p>
            <p>Giá bán buôn kê khai: 12,564/Viên</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
