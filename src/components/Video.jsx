/* eslint-disable react/prop-types */
const Video = ({ link, embeded }) => {
  return (
    <>
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
    </>
  );
};

export default Video;
