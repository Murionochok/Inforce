import { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productReducer";
import { AppDispatch, RootState } from "../../redux/store";
import { Box, Button } from "@mui/material";
import Product from "../Product/Product";
import { productData } from "../../interfaces/productInterface";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productData = Object.values(
    useSelector((state: RootState) => state.products.products.items)
  );
  console.log(productData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Box className={styles.main}>
      <Box className={styles.buttonSection}>
        <Button>Add product</Button>
      </Box>
      <Box>
        {productData.map((product: productData) => (
          <Product
            _id={product._id}
            name={product.name}
            imageUrl={product.imageUrl}
            address={product.address}
            count={product.count}
            size={{ width: product.size.width, height: product.size.height }}
            comments={product.comments}
            weight={product.weight}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;
