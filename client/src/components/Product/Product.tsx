import { Box } from "@mui/material";
import { productData } from "../../interfaces/productInterface";

import styles from "./Products.module.scss";

export default function Product({
  _id,
  imageUrl,
  name,
  count,
  comments,
  weight,
}: productData) {
  return (
    <Box className={styles.main}>
      <Box className={styles.imageBox}>
        <img src={imageUrl} alt="productImg" />
      </Box>
      <h1>Product name: {name}</h1>
      <h1>Amount: {count}</h1>
      <h1>Mass: {weight}</h1>
    </Box>
  );
}
