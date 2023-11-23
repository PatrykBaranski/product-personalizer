import clsx from "clsx";

function OptionColor({
  setCurrentColor,
  color,
  currentColor,
  styleActive,
  colorStyle,
}) {
  return (
    <li>
      <button
        onClick={() => setCurrentColor(color)}
        type="button"
        className={clsx(colorStyle, currentColor === color && styleActive)}
      />
    </li>
  );
}

export default OptionColor;
