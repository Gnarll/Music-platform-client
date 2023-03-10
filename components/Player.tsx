import { IconButton, Grid } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "@/types/tracks";
import { TrackProgress } from "./TrackProgress";

export const Player = () => {
  const active = false;
  const track: ITrack = {
    _id: "1",
    name: "Мой топор",
    artist: "Серега Пират",
    listens: 3,
    text: "SHIIIISH",
    picture:
      "http://localhost:5000/image/bbcb8b57-68fb-4e2b-9a1d-c71e7c75a338.jpg",
    audio:
      "http://localhost:5000/audio/84813c2c-4758-4bf9-9c7a-c81f7561dfc1.mp3",
    comments: [],
  };
  return (
    <div className={styles.player}>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "grey" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};
