import { ITrack } from "@/types/tracks";
import { Pause, PlayArrow, Delete } from "@mui/icons-material";
import { Card, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <Card
      className={styles.track}
      onClick={() => {
        router.push("/tracks/" + track._id);
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
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
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};
