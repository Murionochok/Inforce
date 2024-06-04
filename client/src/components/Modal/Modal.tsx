import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalData, productData } from "../../interfaces/productInterface";
import { Box, Button, TextField } from "@mui/material";

import styles from "./Modal.module.scss";

export const Modal = ({
  _id,
  imageUrl,
  name,
  count,
  size,
  weight,
  handleClose,
}: ModalData) => {
  const dispatch = useDispatch();
  const [quantity, ChangeQuantity] = useState(1);

  const closePopup = () => {
    handleClose(false);
  };

  //   const handleChange = (event) => {
  //     event.preventDefault();
  //     ChangeQuantity(event.target.value);
  //   };
  //   const handlePush = () => {
  //     dispatch(

  //     );
  //     handleClose(false);
  //   };
  return (
    <Box className={styles.modal}>
      <Box className={styles.body}>
        <Box>
          <h1>Create new product</h1>
        </Box>
        <Box className={styles.inputs}>
          <TextField variant="outlined" label="Image URL" required />
          <TextField variant="outlined" label="Name" required />
          <TextField variant="outlined" label="Count" required />
          <TextField variant="outlined" label="Width" required />
          <TextField variant="outlined" label="Height" required />
          <TextField variant="outlined" label="Weight" required />
        </Box>
        <Box>
          <Button>Submit</Button>
        </Box>
      </Box>
      <Button onClick={closePopup}>X</Button>
    </Box>
  );
};
