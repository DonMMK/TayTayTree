import React , {useRef} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
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


// Define handleButtonClick outside of the timelineTree component
const handleButtonClick = (buttonName) => {
  // Define the action you want to perform when a button is clicked
  console.log(`Button clicked: ${buttonName}`);
  // You can perform any action or state update based on the button click
};

const VideoTimelineElement = () => {
  const playerRef = useRef(null);

  // Function to start playing the video
  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  // Function to pause the video
  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };
}

export function timelineTree() {
  return (
    <div className="timeline-wrapper">
      <VerticalTimeline>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(100,121,147,255)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid rgb(100,121,147,255)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(100,121,147,255)', color: '#fff' }}
      icon={<MusicNoteIcon />}
      onMouseEnter={VideoTimelineElement.playVideo}  // Start playing the video on hover
      onMouseLeave={VideoTimelineElement.pauseVideo} // Pause the video when the mouse leaves
    >
      <h3 className="vertical-timeline-element-title">Midnights</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      <img src={midnights} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
  
      <div className="buttons-container">
        <button className="hover-button" onClick={() => handleButtonClick('Button 1')}>
          Button 1
        </button>
        <button className="hover-button" onClick={() => handleButtonClick('Button 2')}>
          Button 2
        </button>
      </div>
  
      {/* Embed the YouTube video */}
      <div className="youtube-player">
        <iframe
          ref={VideoTimelineElement.playerRef}
          title="Taylor Swift YouTube Video"
          src={`https://www.youtube.com/embed/VuNIsY6JdUw?autoplay=0&enablejsapi=1`}  // Replace with your video ID
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgba(188,111,75,255)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(188,111,75,255)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgba(188,111,75,255)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Evermore</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={evermore} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(172,164,164)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(172,164,164)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(172,164,164)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Folklore</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={folklore} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(230,172,150)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(230,172,150)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(230,172,150)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Lover</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={lover} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(108,116,115)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(108,116,115)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(108,116,115)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Reputation</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={reputation} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(138,139,140)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(138,139,140)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(138,139,140)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">1989</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={taylorswift1989} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgba(193,34,22,255)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(193,34,22,255)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgba(193,34,22,255)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Red</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={red} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(75,8,110,255)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(75,8,110,255)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(75,8,110,255)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Speak Now</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={speaknow} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(170,149,124)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(170,149,124)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(170,149,124)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Fearless</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={fearless} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgba(56,90,65,255)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgba(56,90,65,255)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgba(56,90,65,255)', color: '#fff' }}
        icon={<MusicNoteIcon />}
      >
        <h3 className="vertical-timeline-element-title">Taylor Swift</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        <img src={taylorswift} alt="Album Cover" style={{ width: '20%', height: '20%' }} />
      </VerticalTimelineElement>


    </VerticalTimeline>
    </div>
  );
}

export default timelineTree;

