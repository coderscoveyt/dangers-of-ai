import {AbsoluteFill, Img, staticFile, Series, Audio, useCurrentFrame} from 'remotion';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import { First } from './scenes/First';
import { Second } from './scenes/Second';
import { Third } from './scenes/Third';

const logo = staticFile(`/logo.jpg`)
const part1 = staticFile(`/Part 1.m4a`)
const part2 = staticFile(`/Part 2.m4a`)
const part3 = staticFile(`/Part 3.m4a`)
const part4 = staticFile(`/Part 4.m4a`)

const crushedDreams = staticFile(`/music/crushed-dreams.mp3`)
const lastPlaceOnEarth = staticFile(`/music/last-place-on-earth.mp3`)
const error = staticFile(`/music/error.mp3`)

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = () => {
	const frame = useCurrentFrame();
	return (
		<>
			<Series>
				<Series.Sequence durationInFrames={6480}>
					<First />
					<Audio src={part1} startFrom={0} />
					<Audio src={crushedDreams} startFrom={0} volume={0.01} loop />
				</Series.Sequence>
				<Series.Sequence durationInFrames={8670}>
					<Second />
					<Audio src={part2} startFrom={60} muted={frame > 12458 && frame < 12479} />
					<Audio src={lastPlaceOnEarth} volume={0.001} startFrom={60} loop />
				</Series.Sequence>
				<Series.Sequence durationInFrames={8000}>
					<AbsoluteFill className="bg-gray-100 items-center justify-center">
						<Third />
					</AbsoluteFill>
					<Audio src={part3} />
					<Audio src={error} volume={0.01} loop />
				</Series.Sequence>
				<Series.Sequence durationInFrames={690}>
					<AbsoluteFill className="bg-gray-100 items-center justify-center">
						<div className="m-10" />
						<Img src={logo} className="rounded-full" />
						<div className="m-3" />
					</AbsoluteFill>
					<Audio src={part4} />
				</Series.Sequence>
			</Series>
		</>
	);
};
