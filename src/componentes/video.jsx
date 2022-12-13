import videoMp4 from '../assets/videos/video.mp4';
import videoWebm from '../assets/videos/video.webm';

const Video = () => {
    return(
        <video autoPlay muted loop className='position-fixed'>
            <source src={videoMp4} type="video/mp4"></source>
            <source src={videoWebm} type="video/webm"></source>
        </video>
    )
}

export default Video;