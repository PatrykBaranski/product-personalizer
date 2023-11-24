import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm/ProductForm";
const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentSize, setCurrentSize] = useState(sizes[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const price = useMemo(
    () => basePrice + currentSize.additionalPrice,
    [basePrice, currentSize.additionalPrice]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Name:", title);
    console.log("Color:", currentColor);
    console.log("Size:", currentSize.name);
    console.log("Price", price);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          submitHandler={submitHandler}
          colors={colors}
          sizes={sizes}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number,
};

export default Product;
