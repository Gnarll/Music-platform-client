import { MainLayout } from "@/layouts/MainLayout";
import { ITrack } from "@/types/tracks";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";

const TrackPage = () => {
  const router = useRouter();
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
    <MainLayout>
      <Button
        onClick={() => {
          router.push("/tracks");
        }}
        variant="outlined"
        style={{ fontSize: 32 }}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Ваш комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <div>{comment.username}</div>
              <div>{comment.text}</div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
