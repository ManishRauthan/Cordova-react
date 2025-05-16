import { Link } from "react-router-dom";

function Lessons() {
  return (
    <>
      <div className="bg-blue-100 realtive mt-[-60px]">
        <div className="flex justify-center mt-15">
          <img
            src="\images\kidsactivitiesplace-logo.png"
            className="mt-15"
          ></img>
        </div>
        <div className="flex justify-center">
          <div className="relative flex flex-wrap justify-center items-center w-300 h-230 m-10 ">
            <Link to="/phonics">
              <img
                src="\images\8558022.jpg"
                class="w-120 h-90 rounded-2xl m-10 hover:scale-110 hover:shadow-2xl "
              ></img>
            </Link>

            <Link to="/pronunciation">
              <img
                src="\images\43138.jpg"
                class="w-120 h-90 rounded-2xl m-10 hover:scale-110 hover:shadow-2xl"
              ></img>
            </Link>
            <a
              href="https://www.youtube.com/@CordovaJoyfulLearning/videos"
              target="_blank"
            >
              <img
                src="\images\3784896.jpg"
                class="w-120 h-90 rounded-2xl m-10 hover:scale-110 hover:shadow-2xl"
              ></img>
            </a>
            <a href="https://cordova.co.in/Home/Index" target="_blank">
              <img
                src="\images\39492.jpg"
                class="w-120 h-90 rounded-2xl m-10 hover:scale-110 hover:shadow-2xl"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lessons;
