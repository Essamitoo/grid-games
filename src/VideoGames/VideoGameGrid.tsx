import {VideoGame} from '../models/video-game'

interface Props {
    games: VideoGame[];
}

const VideoGameGrid = ({games}: Props) => {
  return (
    <div>VideoGameGrid</div>
  )
}

export default VideoGameGrid