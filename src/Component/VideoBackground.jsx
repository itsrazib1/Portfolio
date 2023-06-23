
import video from '../../public/img/Macrodots 4k.mp4'; // Adjust the path based on your file location


const VideoBackground = () => {
    return (
        <div>
             <div className="video-background">
      <video className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add other content or components on top of the video background */}
    </div>
        </div>
    );
};

export default VideoBackground;