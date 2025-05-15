"use client";

import { useState } from "react";
import styled from "styled-components";
import { alpha } from "@mui/material/styles";

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  margin: 2rem 0;
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const ThumbnailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
  transition: clip-path 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  will-change: clip-path;

  &:hover {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const PlayButton = styled.div`
  width: 68px;
  height: 48px;
  background-color: ${(props) =>
    alpha(
      props.theme.palette.text.primary,
      props.theme.palette.mode === "dark" ? 0.6 : 0.8
    )};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }

  &::after {
    content: "";
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.palette.common.white};
    margin-left: 4px;
  }
`;

interface YouTubePlayerProps {
  videoId: string;
  title: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = () => setIsPlaying(true);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePlay();
    }
  };

  if (isPlaying) {
    return (
      <VideoWrapper>
        <VideoFrame
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>
    );
  }

  return (
    <VideoWrapper>
      <ThumbnailWrapper
        onClick={handlePlay}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Play video: ${title}`}
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        <PlayButton aria-hidden="true" />{" "}
      </ThumbnailWrapper>
    </VideoWrapper>
  );
}
