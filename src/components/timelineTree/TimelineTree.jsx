import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import 'react-vertical-timeline-component/style.min.css';
import './TimelineTree.css';
import taylorswift from '../assets/taylorswift.jpg';
import evermore from '../assets/evermore.jpg';
import folklore from '../assets/folklore.jpg';
import lover from '../assets/lover.jpg';
import reputation from '../assets/reputation.jpg';
import taylorswift1989 from '../assets/taylorswift1989.jpg';
import red from '../assets/red.jpg';
import speaknow from '../assets/speaknow.jpg';
import fearless from '../assets/fearless.jpg';
import midnights from '../assets/midnights.jpg';

const AlbumTimelineElement = ({ albumInfo }) => {
  const [currentVideo, setCurrentVideo] = useState('');

  const handleButtonClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: albumInfo.background, color: '#fff' }}
      contentArrowStyle={{ borderRight: `7px solid ${albumInfo.background}` }}
      date="2011 - present"
      iconStyle={{ background: albumInfo.background, color: '#fff' }}
      icon={<MusicNoteIcon />}
    >
      <h3 className="vertical-timeline-element-title">{albumInfo.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{albumInfo.subtitle}</h4>
      <p>{albumInfo.description}</p>
      <img src={albumInfo.cover} alt="Album Cover" style={{ width: '20%', height: '20%' }} />

      <div className="buttons-container">
        {albumInfo.videos.map((video, index) => (
          <button key={index} className="hover-button" onClick={() => handleButtonClick(video.url)}>
            Video {index + 1}
          </button>
        ))}
      </div>

      {currentVideo && (
        <div className="youtube-player">
          <iframe
            title="YouTube Video"
            src={currentVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const albumsData = [
  {
    title: 'Midnights',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: midnights,
    background: 'rgb(100,121,147,255)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  // Add more album objects with similar structure here...
  {
    title: 'Evermore',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: evermore,
    background: 'rgba(188,111,75,255)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Folklore',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: folklore,
    background: 'rgb(172,164,164)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Lover',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: lover,
    background: 'rgb(230,172,150)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Reputation',
    // subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: reputation,
    background: 'rgb(108,116,115)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: '1989',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: taylorswift1989,
    background: 'rgb(138,139,140)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Red',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: red,
    background: 'rgba(193,34,22,255)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Speak Now',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: speaknow,
    background: 'rgb(75,8,110,255)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Fearless',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: fearless,
    background: 'rgb(170,149,124)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
  {
    title: 'Taylor Swift',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: taylorswift,
    background: 'rgba(56,90,65,255)',
    videos: [
      { url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { url: 'https://www.youtube.com/embed/exampleVideoId2' },
    ],
  },
];

const TimelineTree = () => {
  return (
    <div className="timeline-wrapper">
      <VerticalTimeline>
        {albumsData.map((albumInfo, index) => (
          <AlbumTimelineElement key={index} albumInfo={albumInfo} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineTree;
