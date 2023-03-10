import { FileUpload } from "@/components/FileUpload";
import { StepWrapper } from "@/components/StepWrapper";
import { MainLayout } from "@/layouts/MainLayout";
import { Grid, Button, TextField } from "@mui/material";
import { useState } from "react";

const CreateTrackPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const goPrevStep = () => {
    setActiveStep((step) => step - 1);
  };
  const goNextStep = () => {
    if (activeStep !== 2) setActiveStep((step) => step + 1);
  };
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField label="Название трека" style={{ marginTop: 10 }} />
            <TextField label="Имя испонителя" style={{ marginTop: 10 }} />
            <TextField
              label="Слова к треку"
              style={{ marginTop: 10 }}
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept={"image/*"}>
            <Button>Загрузите обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept={"audio/*"}>
            <Button>Загрузите трек</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={"space-between"}>
        <Button disabled={activeStep < 1} onClick={goPrevStep}>
          Назад
        </Button>
        <Button onClick={goNextStep}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default CreateTrackPage;
