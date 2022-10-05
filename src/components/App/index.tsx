import { FC } from "react";
import { Header } from "../Header";
import styles from "./index.module.css";

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};
