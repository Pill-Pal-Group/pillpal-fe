export const pathEnToVi = (path) => {
  switch (path) {
    case "dosages":
      return "Liều lượng";
    case "dashboard":
      return "Bảng điều khiển";
    case "products":
      return "Thuốc";
    case "pharmaceuticals":
      return "Công ty dược phẩm";
    case "specifications":
      return "Đặc tính";
    case "brands":
      return "Thương hiệu";
    case "active-ingredient":
      return "Thành phần hoạt chất";
    case "nation":
      return "Quốc gia";
    case "categories":
      return "Danh mục";
    default:
      return "";
  }
};
