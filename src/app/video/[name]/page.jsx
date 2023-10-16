
import {getVideoByName} from '../../(server)/api/video/data';
import Video from './video';

export default async function VideoPage({params}) {
    const videoName = params.name;
    const video = await getVideoByName(videoName);
  return (
    <>
    {video ? <Video video={video}/> : 'NOT FOUND'}
    </>
  )
}
