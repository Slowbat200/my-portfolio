import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function AlternateTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline
      position={matches ? 'right' : 'right'}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Beggining of the journey</Typography>
          <Typography className='text-justify'>
            My journey as a web developer began in 2022, when I was in my third
            year of high school studying IT, where I first discovered the beauty
            of HTML, CSS and Javascript. I started to focus more on that and
            started creating simple projects.{' '}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>End of the school</Typography>
          <Typography className='text-justify'>
            In my fourth year, I started discovering technologies that were new
            to me, such as the React library, the TailwindCSS framework, and the
            MongoDB database.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Opening my potentional</Typography>
          <Typography className='text-justify'>
            After graduation, I fully started learning, for me, new technologies
            such as Supabase database, Next.js framework, Typescript or
            Shadcn/ui and many more. In the beginning I did a lot of just
            Front-end development, but now I can create a Fullstack website.{' '}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Presence</Typography>
          <Typography className='text-justify'>
            I am currently working on projects that I am developing both in
            Front-end and Backend. On my Github you can find for example the
            ApexIntel project, which works as a Sass library. Where you can
            interact with AI that is linked to OpenAI, generate images and code
            also using OpenAI and generate short videos and music using AI
            models. Unfortunately at the moment the main part of the site is
            unavailable due to a change of database provider.{' '}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
