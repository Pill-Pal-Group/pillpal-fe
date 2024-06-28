import { Card, Col, Descriptions, Row, Spin, Table, Typography } from "antd";
import React from "react";
import "./style.css";
<<<<<<< HEAD
import { useMedicineId } from "../../hooks/useMedicinesApi";
=======
import { useGetMedicine } from "../../hooks/useMedicineApi";
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const { Title, Text } = Typography;

function ProductDetail() {
  const { id } = useParams();
<<<<<<< HEAD
  const { data, error, isLoading } = useMedicineId(id);
  if (isLoading)
    return <div style={{ textAlign: 'center', margin: '0 auto' }}>
      <Spin size="large" />
    </div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  const medicine = data.data;
=======

  const { data, isLoading } = useGetMedicine(id);

  if (isLoading) return <div>Loading...</div>;
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
  return (
    // <div className="product-details-container">
    //   <Title
    //     level={2}
    //     style={{
    //       textAlign: "center",
    //       backgroundColor: "#77a942",
    //       color: "#fff",
    //       padding: "10px 0",
    //     }}
    //   >
    //     Augmentin 625mg
    //   </Title>

    //   <Row gutter={[16, 16]} justify="center" style={{ margin: "20px 0" }}>
    //     <Col span={8}>
    //       <Card
    //         hoverable
    //         cover={
    //           <img
    //             alt="Augmentin 625mg"
    //             src="https://cdn.tgdd.vn/Products/Images/2504/174340/laroche-posay-effaclar-purifying-foaming-gel-200ml-070323-050348-600x600.jpg"
    //           />
    //         }
    //       />
    //     </Col>
    //     <Col span={16}>
    //       <Descriptions bordered column={1} size="small">
    //         <Descriptions.Item label="Tên Thuốc">
    //           Augmentin 625mg
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Số Đăng Ký">
    //           VN-20619-16
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Hoạt Chất - Nồng độ/ hàm lượng">
    //           Amoxicillin (dưới dạng Amoxicillin trihydrate): 500mg
    //           <br />
    //           Acid clavulanic (dưới dạng Kali clavulanate): 125mg
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Dạng Bào Chế">
    //           Viên nén bao phim
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Quy cách đóng gói">
    //           Hộp 2 vỉ x 7 viên
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Hạn sử dụng">24 tháng</Descriptions.Item>
    //         <Descriptions.Item label="Công ty Sản Xuất">
    //           SmithKline Beecham Pharmaceuticals
    //           <br />
    //           Clarendon Road, Worthing, West Sussex BN14 8QH, UK
    //         </Descriptions.Item>
    //         <Descriptions.Item label="Công ty Đăng Ký">
    //           GlaxoSmithKline Pte. Ltd.
    //           <br />
    //           150 Beach Road, # 21-00 Gateway West, Singapore 189720 Singapore
    //         </Descriptions.Item>
    //       </Descriptions>
    //     </Col>
    //   </Row>

    //   <Title level={4} style={{ marginTop: "20px" }}>
    //     Giá bán buôn kê khai
    //   </Title>
    //   <Table
    //     bordered
    //     pagination={false}
    //     dataSource={[
    //       {
    //         key: "1",
    //         date: "21/08/2019",
    //         company: "CÔNG TY TNHH ZUILI LIFE PHARMA VIỆT NAM",
    //         packaging: "Hộp 2 vỉ x 7 viên",
    //         price: "12,564",
    //       },
    //       {
    //         key: "2",
    //         date: "24/11/2016",
    //         company: "Công ty cổ phần Dược liệu TW 2",
    //         packaging: "Hộp 2 vỉ x 7 viên",
    //         price: "12,564",
    //       },
    //     ]}
    //     columns={[
    //       { title: "Ngày kê khai", dataIndex: "date", key: "date" },
    //       { title: "Đơn vị kê khai", dataIndex: "company", key: "company" },
    //       {
    //         title: "Quy cách đóng gói",
    //         dataIndex: "packaging",
    //         key: "packaging",
    //       },
    //       { title: "Giá kê khai", dataIndex: "price", key: "price" },
    //       {
    //         title: "ĐVT",
    //         dataIndex: "unit",
    //         key: "unit",
    //         render: () => "Viên",
    //       },
    //     ]}
    //   />

    //   <Title level={4} style={{ marginTop: "20px" }}>
    //     Giá trúng thầu
    //   </Title>
    //   <Table
    //     bordered
    //     pagination={false}
    //     dataSource={[
    //       {
    //         key: "1",
    //         date: "14/06/2020",
    //         hospital: "Sở Tư Pháp tỉnh Thái Nguyên - TT ĐV bán đấu giá Tài sản",
    //         packaging: "Hộp 2 vỉ x 7 viên nén bao phim, Uống",
    //         price: "11,936",
    //       },
    //       {
    //         key: "2",
    //         date: "12/07/2023",
    //         hospital: "SYT TP.HCM",
    //         packaging: "Hộp 2 vỉ x 7 viên",
    //         price: "11,936",
    //       },
    //       {
    //         key: "3",
    //         date: "28/11/2019",
    //         hospital: "SYT Đồng Nai",
    //         packaging: "Hộp 2 vỉ x 7 viên",
    //         price: "11,936",
    //       },
    //     ]}
    //     columns={[
    //       { title: "Ngày quyết định", dataIndex: "date", key: "date" },
    //       {
    //         title: "Bệnh viện / Sở y tế",
    //         dataIndex: "hospital",
    //         key: "hospital",
    //       },
    //       {
    //         title: "Quy cách đóng gói",
    //         dataIndex: "packaging",
    //         key: "packaging",
    //       },
    //       {
    //         title: "Đơn vị tính",
    //         dataIndex: "unit",
    //         key: "unit",
    //         render: () => "Viên",
    //       },
    //       { title: "Giá", dataIndex: "price", key: "price" },
    //     ]}
    //   />

    //   <Title
    //     level={4}
    //     style={{
    //       marginTop: "20px",
    //       backgroundColor: "#004fa2",
    //       color: "#fff",
    //       padding: "10px 0",
    //     }}
    //   >
    //     Thuốc có cùng công ty sản xuất
    //   </Title>
    //   <Row gutter={[16, 16]} justify="center">
    //     <Col span={8}>
    //       <Card title="Augmentin 1g" hoverable>
    //         <p>Amoxicillin (dưới dạng Amoxicillin trihydrate) 875 mg</p>
    //         <p>Acid clavulanic (dưới dạng kali clavulanat) 125 mg</p>
    //         <p>SmithKline Beecham Pharmaceuticals - UK</p>
    //         <p>Giá bán buôn kê khai: 20,797/Viên</p>
    //       </Card>
    //     </Col>
    //     <Col span={8}>
    //       <Card title="Augmentin 1g tablets" hoverable>
    //         <p>Amoxicillin, Acid clavulanic</p>
    //         <p>SmithKline Beecham Pharmaceuticals - UK</p>
    //         <p>Giá bán buôn kê khai: 20,797/Viên</p>
    //       </Card>
    //     </Col>
    //     <Col span={8}>
    //       <Card title="Augmentin 625mg tablets" hoverable>
    //         <p>Amoxicillin trihydrate, Clavulanate kali</p>
    //         <p>SmithKline Beecham Pharmaceuticals - UK</p>
    //         <p>Giá bán buôn kê khai: 12,564/Viên</p>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
    <div className="product-details-container">
<<<<<<< HEAD
      <div>
        <Title
          level={2}
          style={{
            textAlign: "center",
            backgroundColor: "#77a942",
            color: "#fff",
            padding: "10px 0",
          }}
        >
          {medicine.medicineName}
        </Title>

        <Row gutter={[16, 16]} justify="center" style={{ margin: "20px 0" }}>
          <Col span={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={medicine.medicineName}
                  src={medicine.image}
                />
              }
            />
          </Col>
          <Col span={16}>
            <Descriptions bordered column={1} size="small">
              <Descriptions.Item label="Tên Thuốc">
                {medicine.medicineName}
              </Descriptions.Item>
              <Descriptions.Item label="Số Đăng Ký">
                {medicine.registrationNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Hoạt Chất - Nồng độ/ hàm lượng">
                {medicine.specification.detail}
                <br />
                {medicine.specification.typeName}
              </Descriptions.Item>
              <Descriptions.Item label="Dạng Bào Chế">
                {medicine.dosageForm}
              </Descriptions.Item>
              <Descriptions.Item label="Quy cách đóng gói">
                {medicine.packaging}
              </Descriptions.Item>
              <Descriptions.Item label="Hạn sử dụng">{medicine.expiryDate}</Descriptions.Item>
              <Descriptions.Item label="Công ty Sản Xuất">
                
                <br />
                
              </Descriptions.Item>
              <Descriptions.Item label="Công ty Đăng Ký">
                
                <br />
              
              </Descriptions.Item>
            </Descriptions> 
          </Col>
        </Row>
      </div>
=======
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
>>>>>>> 6dcbf6324d96ad23b5f941f32b3bdac2f418d609
    </div>
  );
}

export default ProductDetail;
