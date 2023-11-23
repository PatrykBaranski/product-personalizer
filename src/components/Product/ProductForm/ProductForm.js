import styles from "./ProductForm.module.scss";
import Button from "../../Button/Button";
import OptionSize from "./OptionSize";
import OptionColor from "./OptionColor";

function ProductForm({
  submitHandler,
  colors,
  sizes,
  currentColor,
  currentSize,
  setCurrentColor,
  setCurrentSize,
}) {
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((size, i) => (
            <OptionSize
              key={i}
              setCurrentSize={setCurrentSize}
              size={size}
              currentSize={currentSize}
              styleActive={styles.active}
            />
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map((color, i) => (
            <OptionColor
              key={i}
              setCurrentColor={setCurrentColor}
              color={color}
              currentColor={currentColor}
              styleActive={styles.active}
              colorStyle={
                styles[`color${color[0].toUpperCase()}${color.slice(1)}`]
              }
            />
          ))}
        </ul>
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
}

export default ProductForm;
