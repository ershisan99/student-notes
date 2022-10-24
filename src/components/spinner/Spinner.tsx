import React, { CSSProperties, FC } from "react";
import s from "./spinner.module.css";
type Props = { styles?: CSSProperties };
export const Spinner: FC<Props> = ({ styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        ...styles,
      }}
    >
      <span className={s.loader} />
    </div>
  );
};
