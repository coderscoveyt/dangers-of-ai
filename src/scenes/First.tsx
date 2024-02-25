import {AbsoluteFill, Img, staticFile, Sequence, Video, Audio} from 'remotion';
import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

const logo = staticFile(`/logo.jpg`)
const vid1 = staticFile(`/stock-footage/screens.mp4`);
const alice = staticFile(`/alice.png`) // 1300 offset
const cleverbot = staticFile(`/cleverbot.png`) // 1650 offset
const dataflow = staticFile(`/stock-footage/dataflow.mp4`)

const sequential = staticFile(`/sequential-mech.png`)
const selfAtt = staticFile(`/self-attention.jpg`)
const scratch = staticFile(`/scratch.mp3`)

// DIF: 6480
export const First: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={180}>
        <AbsoluteFill className="bg-gray-100 items-center justify-center">
          <div className="m-10" />
          <Img src={logo} className="rounded-full" />
          <div className="m-3" />
          <Title titleText={"Coders Cove"} titleColor={"white"} />
          <Subtitle titleText={"Concerns with AI"} titleColor={"white"} />
        </AbsoluteFill>
      </Sequence>
      <Sequence from={180} durationInFrames={2520}>
        <Video src={vid1} loop />
        <Sequence from={1300} durationInFrames={500}>
          <Img src={alice} style={{ width: "48%" }} />
          <Sequence from={350}>
            <Img src={cleverbot} className="absolute" style={{ width: "48%", right: 0, height: '100%' }} />
          </Sequence>
        </Sequence>
      </Sequence>
      <Sequence from={2700}>
        <Video src={dataflow} loop />
        <Sequence from={3650}>
          <Audio src={scratch} />
        </Sequence>
      </Sequence>
      <Sequence from={5150} durationInFrames={250}>
        <Img src={sequential} style={{ width: "48%" }} />
        <Sequence from={30}>
          <div className="absolute top-0 arrowholder" style={{ left: "48.25%" }}>
            <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p>
            <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p> <p>→</p>
          </div>
          <Img src={selfAtt} className="absolute" style={{ width: "48%", right: 0 }}/>
        </Sequence>
      </Sequence>
    </>
  )
}
