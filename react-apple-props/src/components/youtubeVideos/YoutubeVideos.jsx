import React, { useState, useEffect } from "react";

export default function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=5&order=date&key=AIzaSyB5Vl5ywezEbeuZkJP9pvhWO8E_Gf6DfEs"
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <div className="videos">
      {videos.map((video, index) => {
        let vidId = video.id.videoId;
        return (
          <div className="video" key={vidId || index}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${vidId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        );
      })}
    </div>
  );
}
