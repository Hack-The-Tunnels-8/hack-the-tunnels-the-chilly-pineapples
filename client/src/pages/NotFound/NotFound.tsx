import { Page } from "../../components";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Page>
      <div>
        <h1>404: Not Found</h1>
      </div>

      <div>
        <img src = "https://media3.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47aotaltn7jajah24mro1ggpvhv9bfquhst4p8zb4y&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt = "Image"></img>
      </div>
    </Page>
  );
}

export default NotFound;