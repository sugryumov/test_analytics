import { FC } from "react";
import styles from "./index.module.css";

interface IErrorProps {
  message: string;
}

export const Error: FC<IErrorProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};
