import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Video } from "./";

/* eslint-disable react/prop-types */
function Projects({ data }) {
  const [video, setVideo] = useState(null);

  const videoHolder = useRef();

  const toggleVideo = (link) => {
    if (video !== null) {
      setVideo(null);
    } else {
      setVideo(link);
    }
  };

  useEffect(() => {
    if (video) {
      setTimeout(() => {
        videoHolder.current.style.opacity = "1";
      }, 200);
    }
  }, [video]);

  return (
    <section className="container paddingY border-b-primary border-b-[1px] max-w-[1000px] gridme mx-auto mt-10">
      {data.map((e) => {
        return (
          <div
            key={nanoid()}
            className="overflow-hidden project relative cursor-pointer flex items-center justify-center"
          >
            {video !== null ? (
              <div className="cursor-default w-full h-[100vh] bg-background z-20 flex items-center justify-center fixed left-0 top-0">
                <div
                  className="w-[50px] cursor-pointer xme aspect-square absolute top-10 right-[10px] md:right-10"
                  onClick={() => {
                    toggleVideo(null);
                  }}
                ></div>
                <div
                  className={`transition-all duration-500 opacity-0 w-[95%] aspect-video md:w-p[80%] lg:w-[60%]`}
                  ref={videoHolder}
                >
                  <Video link={video} embeded={e.embeded} />
                  <p className="text-[16px] mt-6 text-white font-brandonLight">
                    {e.videoText}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            <img
              className="transition duration-300 object-contain"
              src={e.image}
              alt={e.name}
            />
            <div
              onClick={() => {
                toggleVideo(e.video);
              }}
              className="absolute top-0 left-0 flex flex-col opacity-0 hover:opacity-100 transition-all duration-300 items-center justify-center bg-[rgba(0,0,0,0.8)] w-full h-full"
            >
              <h2 className="text-[46px] text-center font-montserrat font-bold uppercase text-white">
                {e.name}
              </h2>
              <p className="text-[24] font-brandonLight text-white">
                {e.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
