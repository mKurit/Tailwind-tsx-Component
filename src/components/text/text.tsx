import { useEffect, useState } from "react";

export default (props: any) => {
  const [fontSize, setFontSize] = useState(props.size ? `text-${props.size}` : "text-base");
  const [fontWeight, setFontWeight] = useState(
    props.wight ? `font-${props.weight}` : "font-medium"
  );

  useEffect(() => {
    setFontSize(props.size ? `text-${props.size}` : "text-base");
    setFontWeight(props.wight ? props.weight : "medium");
  });

  return (
    <>
      <span
        className={`${fontSize} ${fontWeight} ${props.className}`}
      >
        {props.children}
      </span>
    </>
  );
};
