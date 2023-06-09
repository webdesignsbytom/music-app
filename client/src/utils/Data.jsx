import { BsMusicNote } from 'react-icons/bs';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { HiOutlineMusicNote } from 'react-icons/hi';
// Audio
import Alt1 from '../assets/Audio/Alt1.mp3';
import Alt2 from '../assets/Audio/Alt2.mp3';
import Alt3 from '../assets/Audio/Alt3.mp3';
import Alt4 from '../assets/Audio/Alt4.mp3';
import Alt5 from '../assets/Audio/Alt5.mp3';
import Alt6 from '../assets/Audio/Alt6.mp3';
import GED1 from '../assets/Audio/GED1.mp3';
import GED2 from '../assets/Audio/GED2.mp3';
import GED3 from '../assets/Audio/GED3.mp3';
import GED4 from '../assets/Audio/GED4.mp3';
import GED5 from '../assets/Audio/GED5.mp3';
// Video
import Video1 from '../assets/video/london.mp4';
import Video2 from '../assets/video/mozart_edit_Original.mp4';
import Video3 from '../assets/video/debussy_edit_1_Original.mp4';
import Video4 from '../assets/video/eco_turnbull_distance_Original.mp4';
import Video5 from '../assets/video/eco_turnbull_cutting_ties_Original.mp4';


export const contactFormTemplate = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  country: 'United Kingdom',
  message: '',
};

export const statusResults = {
  status: false,
  result: 'failed',
  message: '',
};

export const altShiftData = [
  {
    buttonText: `Play`,
    pageNum: '1 - 7',
    title: `Excerpt One`,
    link: `https://github.com/`,
    audio: Alt1,
  },
  {
    buttonText: `Play`,
    pageNum: '21 - 29',
    title: `Excerpt Two`,
    link: `https://github.com/`,
    audio: Alt2,
  },
  {
    buttonText: `Play`,
    pageNum: '32 - 40',
    title: `Excerpt Three`,
    link: `https://github.com/`,
    audio: Alt3,
  },
  {
    buttonText: `Play`,
    pageNum: '24 - 46',
    title: `Excerpt Four`,
    link: `https://github.com/`,
    audio: Alt4,
  },
  {
    buttonText: `Play`,
    pageNum: '65 - 72',
    title: `Excerpt Five`,
    link: `https://github.com/`,
    audio: Alt5,
  },
  {
    buttonText: `Play`,
    pageNum: '77 - 79',
    title: `Excerpt Six`,
    link: `https://github.com/`,
    audio: Alt6,
  },
];

export const gedData = [
  {
    buttonText: `Play`,
    pageNum: '2 - 8',
    title: `Excerpt One`,
    link: `https://github.com/`,
    audio: GED1,
  },
  {
    buttonText: `Play`,
    pageNum: '13 - 18',
    title: `Excerpt Two`,
    link: `https://github.com/`,
    audio: GED2,
  },
  {
    buttonText: `Play`,
    pageNum: '21 - 31',
    title: `Excerpt Three`,
    link: `https://github.com/`,
    audio: GED3,
  },
  {
    buttonText: `Play`,
    pageNum: '33 - 39',
    title: `Excerpt Four`,
    link: `https://github.com/`,
    audio: GED4,
  },
  {
    buttonText: `Play`,
    pageNum: '45 - 50',
    title: `Excerpt Five`,
    link: `https://github.com/`,
    audio: GED5,
  },
];

export const videoData = [
  {
    name: `Distance (piano concerto)`,
    title: `London Philharmonic Orchestra`,
    artist: `Turnbull`,
    videoData: Video1,
    data: ``,
    location: ``,
  },
  {
    name: `Figaro Overture`,
    title: `London Philharmonic Orchestra`,
    artist: `Mozart`,
    videoData: Video2,
    data: ``,
    location: ``,
  },
  {
    name: `Prélude à l'après midi d'un faune`,
    title: `London Philharmonic Orchestra`,
    artist: ``,
    videoData: Video3,
    data: ``,
    location: ``,
  },
  {
    name: `Distance`,
    title: `Piano Concerto `,
    artist: `English Chamber Orchestra - Turnbull`,
    videoData: Video4,
    data: ``,
    location: ``,
  },
  {
    name: `Cutting Ties`,
    title: `Piano Concerto`,
    artist: `English Chamber Orchestra - Turnbull`,
    videoData: Video5,
    data: ``,
    location: ``,
  },
];

export const reviewData = [
  {
    content:
      '“Super colorful..a mix of tonal/cinematic worlds with a modern twist. There is something very fresh about the sound, energy - I like the clarity and detail of orchestration..”',
    name: 'Adam Schoenberg',
    position: 'Composer',
  },
  {
    content:
      '“A colourful, twinkling and imaginative showpiece..with delicate dancing strings lines, intricate woodwind flourishes and shifting rhythms…refreshing and contemporary”',
    name: 'Kansas City Symphony',
    position: 'Orchestra',
  },
  {
    content:
      '“Stuart’s orchestral piece Odyssey is complex yet lyrical..an energetic two part soundscape for orchestra. Stuart manages to conjure up some amazing sounds with the orchestral palette..”',
    name: 'Andrew Trinick, Senior Producer',
    position: 'BBC Scottish Symphony Orchestra',
  },
  {
    content:
      '“…the musical language and narrative is incredibly captivating with a brilliant variety of sound and atmosphere…”',
    name: 'Jonathon Heyward',
    position: 'Conductor',
  },
  {
    content: `“Stuart has an incredible sense for orchestral colour. His musical discourse is perfectly and clearly shaped, stemming directly from the last symphonic pieces of the classical tradition, such as Debussys ‘Jeux’..”`,
    name: `Rani Calderon`,
    position: `Composer and Conductor`,
  },
  {
    content: `“…music with promise and freshness…the textures are transparent and agile…”`,
    name: `Julian Anderson`,
    position: `Composer`,
  },
  {
    content: `“A wonderfully vivid imagination and high degree of technical proficiency…a broad spectrum of orchestral colours..infectious and truly compelling virtuosic energy. Rhythmically intricate and harmonically vibrant”`,
    name: `Joe Phibbs`,
    position: `Composer`,
  },
  {
    content: `“…Stuart Turnbull's Odyssey is a fearless, technicolour showpiece for orchestra. Moving through constantly shifting landscapes, Stuart's highly-charged and excitingly propulsive music lies at that rare intersection of immediacy and intellectual rigour. The orchestral writing is virtuosic and immaculately conceived, with textures which are characterful and brilliantly imaginative. The demands he makes of the orchestra are paid off in full by the verve and the lustre of the music, as the audience is led on this thrilling orchestral adventure…”`,
    name: `Lee Reynalds`,
    position: `Conductor`,
  },
  {
    content: `“The best composition advice I was given was to compose from the heart and it's clear from Stuart's music that he's doing just that”`,
    name: `John Rutter`,
    position: `Composer`,
  },
  {
    content: `“…direct, driven, bright with good shape…”`,
    name: `Helen Grime`,
    position: `Composer`,
  },
  {
    content: `“Very beautiful music”`,
    name: `Farkhad Khudyev`,
    position: `Conductor`,
  },
  {
    content: `“Very beautiful and creative music..”`,
    name: `Luka Faulisi`,
    position: `Violinist`,
  },
  {
    content: `“Fierce music”`,
    name: `Mie Yi Foo`,
    position: `Pianist`,
  },
  {
    content: `“Music that's visceral, a slap in the face..”`,
    name: `Bruno Bower`,
    position: `Educator and Critic`,
  },
  {
    content: `“Music that is tender, dark and bristling..”`,
    name: `Rolf Hind`,
    position: `Pianist`,
  },
];

export const aboutPageContent = [
  {
    title: 'About',
    note: <BsMusicNote size={25} />,
    content: `Stuart Turnbull (b. 1975) is an award-winning British composer, pianist, and conductor. He was raised in a musical family, and after schooling in the south of the UK, he studied Piano Performance at the Royal Conservatoire of Birmingham, graduating with a First Class degree. He was influenced there by the ground-breaking Indian Classical musician, John Mayer, who inspired him with a fascination with rhythm in particular. He continued his studies in composition at the Royal College of Music in London under Julian Anderson and Sir George Benjamin. He is currently pursuing a doctorate in composition.`,
  },
  {
    title: 'Career',
    note: <BsMusicNoteBeamed size={25} />,
    content: `Stuart has taught music at the undergraduate level for many years, and his music is frequently performed, recorded, and broadcast across the UK and further afield. He has been composer-in-residence with a number of UK-based arts organisations and festivals. He specialises in writing choral, orchestral, and chamber music, and his music has been recorded and broadcast by professional ensembles, including the Choir of Selwyn College, Cambridge, Blossom Street, the BBC Singers, the Chamber Choir of Europe, and Siglo D’Oro choir, many UK cathedrals, the BBC Scottish Symphony Orchestra, Kansas City Symphony, London Philharmonic and English Chamber Orchestra (London).`,
  },
  {
    title: 'Personality',
    note: <HiOutlineMusicNote size={25} />,
    content: `Harmonically, Stuart’s music is colourful and imaginative, while always adhering to technically rigorous contrapuntal lines. Recent reviews regularly feature the words captivating, imaginative, refreshing, energetic, and fearless. Of his orchestral work ‘Odyssey’, Stuart says “this work reflects a time in my life when things were changing: I remember the uncertainty, but also the excitement. The music mirrors this: it’s impetuous, twisting and turning, and not staying still. Each new idea runs (often at speed) into the next, without conclusion: another shift, another new direction, another new idea.”`,
  },
];
