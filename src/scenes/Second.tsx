import {AbsoluteFill, Img, staticFile, Sequence, Video, Audio} from 'remotion';

const bgvideo = staticFile(`/stock-footage/red-particles.mp4`)
const censor = staticFile(`/censor.mp3`)
const edge = staticFile(`/edge.svg`)
const chrome = staticFile(`/chrome.svg`)
const copilot = staticFile(`/copilot.webp`)
const napalm = staticFile(`/napalm.webp`)
const prompt1 = staticFile(`/prompt1.png`)
const prompt2 = staticFile(`/prompt2.png`)
const fools = staticFile(`/fools.png`)
const misinformation = staticFile(`/misinformation.png`)
const deepfakes = staticFile(`/deepfakes.png`)
const virus = staticFile(`/virus.png`)
const accuracy = staticFile(`/accuracy.png`)
const nazis = staticFile(`/diversenazis.png`)
const medicaladvice = staticFile(`/medicaladvice.png`)
const memory = staticFile(`/memory.png`)

export const Second: React.FC = () => {
  return (
    <>
      <AbsoluteFill className="bg-gray-100 items-center justify-center">
        <Sequence durationInFrames={8670}>
          <Video loop src={bgvideo} />
          <Sequence from={100} durationInFrames={130}>
            <Img src={chrome} className="w-1/2 h-1/2 absolute" style={{ left: 0, top: '25%' }} />
            <Sequence from={20}>
              <h1 className='absolute' style={{ fontSize: "12rem", top: "30%", left: '45%' }}>→</h1>
              <Img src={edge} className="w-1/2 h-1/2 absolute" style={{ right: 0, top: '25%' }} />
            </Sequence>
          </Sequence>
          <Sequence from={330} durationInFrames={30}>
          <h1 className="text-9xl absolute top-2/3 right-0 text-stone-300">Urban VPN*</h1>
          </Sequence>
          <Sequence from={500} durationInFrames={60} className="flex justify-center">
            <Img src={copilot} />
          </Sequence>
          <Sequence from={850} durationInFrames={120} className="flex justify-center">
            <Img src={prompt1} />
          </Sequence>
          <Sequence from={1100} durationInFrames={60}>
            <h1 className="text-9xl absolute top-1/3 text-stone-300 w-full" style={{ left: "20%" }}>The code I got worked, btw</h1>
          </Sequence>
          <Sequence from={1350} durationInFrames={120} className='flex justify-center'>
            <Img src={prompt2} style={{ height: "80%" }} />
            <h1 className="text-7xl absolute bottom-0 text-stone-300" style={{ width: "80%" }}>
            They actually enabled it as I was making the video
            </h1>
          </Sequence>
          <Sequence from={1920} durationInFrames={90} className='flex justify-center'>
            <h1 className="text-7xl absolute text-stone-300" style={{ top: "0", width: "80%" }}>- Ethics</h1>
            <h1 className="text-7xl absolute text-stone-300" style={{ top: "20%", width: "80%" }}>- Accuracy</h1>
            <h1 className="text-7xl absolute text-stone-300" style={{ top: "40%", width: "80%" }}>- Environment</h1>
            <h1 className="text-7xl absolute text-stone-300" style={{ top: "60%", width: "80%" }}>- Privacy</h1>
            <h1 className="text-7xl absolute text-stone-300" style={{ top: "80%", width: "80%" }}>- Jobs & subsistance</h1>
          </Sequence>
          <Sequence from={2590} durationInFrames={120}>
            <Img src={fools} />
          </Sequence>
          <Sequence from={3570} durationInFrames={500} className="flex justify-center">
            <Img src={misinformation} className="w-full" />
            <Sequence from={60}>
              <Img className="w-full" src={deepfakes} />
              <Sequence from={170}>
                <Img className="w-full" src={virus} />
                <h1 className="bg-black text-7xl absolute text-stone-300" style={{ top: "80%" }}>A reverse client/server tcp with sockets in Python</h1>
                <Sequence from={120}>
                  <Img className="w-full" src={napalm} />
                </Sequence>
              </Sequence>
            </Sequence>
          </Sequence>
          <Sequence from={4790} durationInFrames={150}>
            <Img src={accuracy} />
          </Sequence>
          <Sequence from={5250} durationInFrames={120}>
            <h1 className="text-6xl absolute top-1/3 ml-10">
              It refused to generate images of white people, even when given prompt such as vikings, US senators, Scottish people and even "N*zis"
            </h1>
          </Sequence>
          <Sequence from={5700} durationInFrames={120} className='flex justify-center'>
            <Img src={nazis} />
          </Sequence>
          <Sequence from={5980} durationInFrames={30}>
            <h1 className="text-9xl text-stone-200 absolute right-0 bottom-0">N*zi soldiers</h1>
            <Audio src={censor} />
          </Sequence>
          <Sequence from={6500} durationInFrames={210}>
            <Img src={medicaladvice} style={{ height: "85%", width: "100vw" }} />
            <h1 className="text-6xl text-center text-stone-200 bg-black absolute bottom-0 left-0">
              Sike, they enabled the medical advice module in the meantime
            </h1>
          </Sequence>
          <Sequence from={7890} durationInFrames={130} className='flex justify-center'>
            <Img src={memory} />
          </Sequence>
        </Sequence>
      </AbsoluteFill>
    </>
  )
}