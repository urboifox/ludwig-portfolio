/* eslint-disable react/prop-types */
const Video = ({ img, link, embeded }) => {
  return (
    <>
      {link === "" ? (
        <div className="w-full aspect-auto relative max-w-full h-full !hover:scale-[1]">
          <img
            className="object-cover w-full max-w-full h-full !hover:scale-[1]"
            src={img}
            alt="placeholer"
          />
          <div className="uppercase tracking-widest absolute z-40 text-white font-montserrat font-bold flex items-center justify-center text-[30px] md:text-[50px] top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]">
            Coming soon
          </div>
        </div>
      ) : (
        <div className="aspect-video">
          {embeded ? (
            <iframe
              className="w-full max-w-full h-full"
              src={link}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              src={link}
              controls
              controlsList="nodownload"
              loop
              autoPlay
              className="w-full h-full max-w-full"
            ></video>
          )}
        </div>
      )}
    </>
  );
};

export default Video;
