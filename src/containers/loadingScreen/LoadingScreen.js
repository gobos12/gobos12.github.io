import "./LoadingScreen.scss";
import {greeting} from "../../portfolio";

const LoadingScreen = () =>
{
    return (
      <div className="loading-screen">
        <div className="loading-container">
            Orion Dobos
        </div>
          <div className="loading-anim">
              <img src={greeting.logo} alt="Idle Robot" width="110" height="100"/>
          </div>
      </div>
    );
}

export default LoadingScreen;
