"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const VideoComponent = ({
  videoUrl,
  thumbnailUrl,
}: {
  videoUrl: string;
  thumbnailUrl: string;
}) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div
      className="w-full aspect-video relative rounded-3xl flex justify-center items-center"
      onClick={() => setPlayVideo(true)}
    >
      {!playVideo && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-3xl">
          <Play
            width={50}
            height={50}
            className="p-3 absolute z-10 bg-white rounded-full"
            color="gray"
          />
        </div>
      )}
      {!playVideo ? (
        <Image
          className="w-full hover:cursor-pointer hover:opacity-95 object-cover rounded-3xl"
          src={thumbnailUrl} // Replace with actual thumbnail URL if it's separate
          // width={500}
          // height={500}
          fill
          alt="Video Thumbnail"
        />
      ) : (
        <video className="rounded-3xl w-full" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
