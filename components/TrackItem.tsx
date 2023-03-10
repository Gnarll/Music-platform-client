import { ITrack } from "@/types/tracks";
import { Pause, PlayArrow, Delete } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/TrackItem.module.scss";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  track,
  active = false,
}) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img
        width={60}
        height={60}
        style={{ borderRadius: 30, marginLeft: "5px" }}
        src={track.picture}
      />
      <Grid
        container
        direction={"column"}
        style={{ width: "200px", margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:23</div>}
      <IconButton style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  );
};
