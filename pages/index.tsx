import { MainLayout } from "@/layouts/MainLayout";
import React from "react";
import styles from "../styles/index.module.css";

const Index = () => {
  return (
    <MainLayout>
      <div className={styles.center}>
        <h1>Добро пожаловать!</h1>
        <h3>Здесь собраны лучшие треки!</h3>
      </div>
    </MainLayout>
  );
};

export default Index;
