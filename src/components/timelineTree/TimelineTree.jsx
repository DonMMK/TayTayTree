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

  // Function to change button color on hover
  const handleMouseEnter = (event, color) => {
    event.target.style.backgroundColor = color;
  };

  // Function to revert button color when mouse leaves
  const handleMouseLeave = (event, color) => {
    event.target.style.backgroundColor = color;
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
      <img src={albumInfo.cover} alt="Album Cover" style={{ width: '40%', height: '40%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <div className="buttons-container">
        {albumInfo.videos.map((video, index) => (
          <button
            key={index}
            className="hover-button"
            onClick={() => handleButtonClick(video.url)}
            style={{ backgroundColor: albumInfo.buttonColor }}
            onMouseEnter={(e) => handleMouseEnter(e, albumInfo.buttonHoverColor)}
            onMouseLeave={(e) => handleMouseLeave(e, albumInfo.buttonColor)}
          >
            {video.name}
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
    buttonColor: 'rgb(120, 141, 167)', // Default button background color
    buttonHoverColor: 'rgb(80, 101, 127)', // Button hover background color
    videos: [
      { name: 'Midnight rain', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Anti-Hero',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Maroon', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  // Add more album objects with similar structure here...
  {
    title: 'Evermore',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: evermore,
    background: 'rgba(188,111,75,255)',
    buttonColor: 'rgb(239, 162, 126)', // Default button background color
    buttonHoverColor: 'rgb(137, 60, 24)', // Button hover background color
    videos: [
      { name: 'Evermore', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Willow',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Long Story Short', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Closure', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Folklore',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: folklore,
    background: 'rgb(172,164,164)',
    buttonColor: 'rgb(223, 215, 215)', // Default button background color
    buttonHoverColor: 'rgb(121, 113, 113)', // Button hover background color
    videos: [
      { name: 'Cardigan', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'This is Me Trying',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Invisible String', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'August', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Lover',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: lover,
    background: 'rgba(116,154,175,255)',
    buttonColor: 'rgb(167, 205, 226)', // Default button background color
    buttonHoverColor: 'rgb(65, 103, 124)', // Button hover background color
    videos: [
      { name: 'The Archer', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Cruel Summer',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Lover', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Daylight', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Reputation',
    // subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: reputation,
    background: 'rgb(108,116,115)',
    buttonColor: 'rgb(159, 167, 166)', // Default button background color
    buttonHoverColor: 'rgb(57, 65, 64)', // Button hover background color
    videos: [
      { name: 'Dont Blame Me', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Delicate',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Look What You Made Me Do', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Gateway Car', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: '1989',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: taylorswift1989,
    background: 'rgb(138,139,140)',
    buttonColor: 'rgb(189, 190, 191)', // Default button background color
    buttonHoverColor: 'rgb(87, 88, 89)', // Button hover background color
    videos: [
      { name: 'Blank Space', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Style',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Out Of the Woods', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Shake It Off', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Bad Blood', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Wildest Dreams', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Red',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: red,
    background: 'rgba(193,34,22,255)',
    buttonColor: 'rgb(244, 85, 73)', // Default button background color
    buttonHoverColor: 'rgb(142, 0, 0)', // Button hover background color
    videos: [
      { name: 'Red', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'I Knew You Were Trouble',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'All Too Well', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: '22', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'We Are Never Ever Getting Back Together', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Starlight', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Speak Now',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: speaknow,
    background: 'rgb(75,8,110,255)',
    buttonColor: 'rgb(126, 59, 161)', // Default button background color
    buttonHoverColor: 'rgb(24, 0, 59)', // Button hover background color
    videos: [
      { name: 'Back To December', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Back To December',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Back To December', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Back To December', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Enchanted', url: 'https://www.youtube.com/embed/exampleVideoId4'},
      { name: 'Dear John', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Fearless',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: fearless,
    background: 'rgb(170,149,124)',
    buttonColor: 'rgb(221, 200, 175)', // Default button background color
    buttonHoverColor: 'rgb(119, 98, 73)', // Button hover background color
    videos: [
      { name: 'Midnight rain', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Anti-Hero',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Maroon', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
    ],
  },
  {
    title: 'Taylor Swift',
    subtitle: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    cover: taylorswift,
    background: 'rgba(56,90,65,255)',
    buttonColor: 'rgb(107, 141, 116)', // Default button background color
    buttonHoverColor: 'rgb(5, 39, 14)', // Button hover background color
    videos: [
      { name: 'Midnight rain', url: 'https://www.youtube.com/embed/exampleVideoId1' },
      { name: 'Anti-Hero',url: 'https://www.youtube.com/embed/exampleVideoId2' },
      { name: 'Maroon', url: 'https://www.youtube.com/embed/exampleVideoId3'},
      { name: 'Bejeweled', url: 'https://www.youtube.com/embed/exampleVideoId4'},
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
