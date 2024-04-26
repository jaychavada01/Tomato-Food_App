import { assets } from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>For Better experience Download <br /> Tomato App</p>
      <div className="platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};
export default AppDownload;
