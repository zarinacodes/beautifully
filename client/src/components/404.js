/* eslint-disable import/no-anonymous-default-export */
import PageNotFound from "../ui/404";
import { Player } from "@lottiefiles/react-lottie-player";

export default () => {
  return (
    <PageNotFound>
      <Player
        src="https://assets10.lottiefiles.com/packages/lf20_lwogigaa.json"
        background="transparent"
        speed="1"
        style={({ width: "100%" }, { height: "90%" })}
        loop
        autoplay
      />
    </PageNotFound>
  );
};
