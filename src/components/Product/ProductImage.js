import styles from "./ProductImage.module.scss";
import PropTypes from "prop-types";

function ProductImage({ title, name, color }) {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`}
      />
    </div>
  );
}

ProductImage.propType = {
  title: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default ProductImage;
