import React, { ReactNode } from "react";
import { Container, Stepper, Step, StepLabel, Grid, Card } from "@mui/material";

interface StepWrapperProps {
  activeStep: number;
  children: ReactNode;
}
export const StepWrapper: React.FC<StepWrapperProps> = ({
  activeStep,
  children,
}) => {
  const steps = [
    "Информация о треке",
    "Загрузите обложку",
    "Загрузите сам трек",
  ];

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index} completed={activeStep > index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Grid
        container
        justifyContent={"center"}
        style={{ margin: "70px 0", height: 270 }}
      >
        <Card style={{ width: 600, padding: "5px" }}>{children}</Card>
      </Grid>
    </Container>
  );
};
