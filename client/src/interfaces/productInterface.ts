export interface productData {
  _id: string;
  imageUrl: string;
  name: string;
  address: string;
  count: number;
  size: Size;
  comments: Array<string>;
  weight: string;
}

interface Size {
  width: number;
  height: number;
}

export interface ModalData {
  product?: productData;
  handleClose: Function;
}
