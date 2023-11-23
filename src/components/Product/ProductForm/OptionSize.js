import clsx from "clsx";

function OptionSize({ id, setCurrentSize, size, currentSize, styleActive }) {
  return (
    <li>
      <button
        onClick={() => setCurrentSize(size)}
        type="button"
        className={clsx(currentSize.name === size.name && styleActive)}
      >
        {size.name}
      </button>
    </li>
  );
}

export default OptionSize;
