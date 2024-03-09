const Video = () => {
  return (
    <div className="p-1 sm:p-5">
      <div className="space-y-5 md:space-y-0 gap-5 md:flex">
        <iframe
          width="590"
          height="315"
          src="https://www.youtube.com/embed/GyO1MtLhyt0?si=6Kvo2ej3ywDtcNDD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="590"
          height="315"
          src="https://www.youtube.com/embed/biO6z-pst34?si=jA63l5mlDqmnp0Gn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Video;
