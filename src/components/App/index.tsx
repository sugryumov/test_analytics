import { FC } from "react";
import { Cards } from "../Cards";
import { Header } from "../Header";
import styles from "./index.module.css";

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Cards />
    </div>
  );
};
