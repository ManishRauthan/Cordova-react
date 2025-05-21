import { Letterwithimage } from "../Utils/Letterwithimage";

function Video(props) {
  const match = Letterwithimage.find((items) => items.letter == props.detail);
  console.log("Video component received:", props.detail);
  return (
    <div className="flex justify-center">
      <div className="bg-blue-100  w-120 h-120 m-10 rounded-2xl">
        {match && (
          <img
            src={match.img}
            alt={match.letter}
            className="w-120 h-120  rounded-2xl "
          />
        )}
      </div>
    </div>
  );
}

export default Video;
