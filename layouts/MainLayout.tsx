import { NavBar } from "@/components/Navbar";
import { Container } from "@mui/material";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
    </>
  );
};
