import { TrackList } from "@/components/TrackList";
import { MainLayout } from "@/layouts/MainLayout";
import { ITrack } from "@/types/tracks";
import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

const TracksPage = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "2",
      name: "Маша",
      artist: "Серега Пират",
      listens: 5,
      text: "SWAAAAAG",
      picture:
        "http://localhost:5000/image/02974d8e-174c-4f36-ae46-9831ce1b50bc.jpg",
      audio:
        "http://localhost:5000/audio/98416d34-3794-4e52-9128-936337f55cb1.mp3",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: "900px" }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <h1>Список треков</h1>
              <Button
                onClick={() => {
                  router.push("/tracks/create");
                }}
              >
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default TracksPage;
