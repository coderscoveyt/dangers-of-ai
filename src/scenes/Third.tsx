import {AbsoluteFill, Img, staticFile, Sequence, Video, Audio} from 'remotion';

const bgvideo = staticFile(`/stock-footage/red-particles.mp4`)
const gpu = staticFile(`/gpu.jpg`)
const tpu = staticFile(`/tpu.jpg`)
const google = staticFile(`/logos/google.jpg`)
const instagram = staticFile(`/logos/instagram.jpg`)
const meta = staticFile(`/logos/meta.jpg`)
const whatsapp = staticFile(`/logos/whatsapp.png`)
const snapchat = staticFile(`/logos/snapchat.png`)
const x = staticFile(`/logos/x.jpg`)
const apple = staticFile(`/logos/apple.jpg`)
const ai21 = staticFile(`/logos/ai21.jpg`)
const openai = staticFile(`/logos/openai.png`)
const privacy = staticFile(`/privacy.png`)
const memory = staticFile(`/memory.png`)
const jobstaken = staticFile(`/jobstaken.png`)
const cgpvid = staticFile(`/cgpvid.png`)
const extent = staticFile(`/extent.png`)

export const Third: React.FC = () => {
  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <Sequence durationInFrames={8000}>
        <Video loop src={bgvideo} />
        <Sequence from={370} durationInFrames={120}>
          <Img src={gpu} className='w-full' />
        </Sequence>
        <Sequence from={700} durationInFrames={60}>
          <div className="flex flex-col absolute right-0 bottom-0 bg-black w-fit h-fit">
            <h1 className="text-7xl text-stone-200">~70 to 90°C</h1>
            <h1 className="text-7xl text-stone-200">~158 to 194°F</h1>
          </div>
        </Sequence>
        <Sequence from={900} durationInFrames={90}>
          <Img src={tpu} className='w-full' />
        </Sequence>
        <Sequence from={2880} durationInFrames={120}>
          <Img src={google} style={{ width: "30%", height: "30%" }} />
          <Img src={x} style={{ width: "30%", height: "30%" }} />
          <Img src={apple} style={{ width: "30%", height: "30%" }} />
          <Img src={ai21} style={{ width: "30%", height: "30%" }} />
          <Img src={openai} style={{ width: "30%", height: "30%" }} />
          <h1 className="text-9xl text-center text-stone-200 bg-black absolute bottom-0">
            There are more ofc, but these are just a few examples.
          </h1>
        </Sequence>
        <Sequence from={3720} durationInFrames={30}>
          <h1 className="text-8xl text-center py-2 text-stone-200 bg-black bottom-5 left-0 absolute">
            It took me over 50 for the purposes of this video alone
          </h1>
        </Sequence>
        <Sequence from={4270} durationInFrames={90}>
          <Img src={privacy} className='w-full' />
        </Sequence>
        <Sequence from={4410} durationInFrames={90}>
          <Img src={memory} className='w-full' />
        </Sequence>
        <Sequence from={4575} durationInFrames={150}>
          <Img src={instagram} style={{ width: "30%", height: '30%', top: 0, left: 0 }} className='absolute' />
          <Sequence from={15}>
            <Img src={meta} style={{ width: "30%", height: '30%', top: "0%", right: 0 }} className='absolute' />
            <Sequence from={15}>
              <Img style={{ width: "30%", height: '30%', top: "37.5%", left: 0 }} className='absolute' src={whatsapp} />
              <Sequence from={20}>
                <Img style={{ width: "30%", height: '30%', top: "37.5%", right: 0 }} className='absolute' src={snapchat} />
                <Sequence from={15}>
                  <Img style={{ width: "30%", height: '30%', top: "75%", left: 0 }} className='absolute' src={google} />
                  <Sequence from={15}>
                    <Img style={{ width: "30%", height: '30%', top: "75%", right: 0 }} className='absolute' src={x} />
                  </Sequence>
                </Sequence>
              </Sequence>
            </Sequence>
          </Sequence>
        </Sequence>
        <Sequence from={6080} className='flex justify-center' durationInFrames={120}>
          <Img src={jobstaken} />
        </Sequence>
        <Sequence from={6600} className='flex justify-center' durationInFrames={210}>
          <Img src={cgpvid} />
        </Sequence>
        <Sequence from={7780} className='flex justify-center'>
          <Img src={extent} />
        </Sequence>
      </Sequence>
    </AbsoluteFill>
  )
}