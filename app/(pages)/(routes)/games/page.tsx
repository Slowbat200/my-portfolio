import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const games = [
  {
    name: 'Hangman',
    description: 'A console-style hangman game.',
    preview: '/hangman-preview.png', // You can replace this with your preview image path
    link: '/hangman', // Adjust this if your route is different
  },
  // Add more games here as needed
];

const GamesPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-16 bg-[#FFF7ED] dark:bg-[#2D3748]'>
      <h1 className='text-3xl font-bold mb-10'>Games</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        {games.map((game) => (
          <Card
            key={game.name}
            className='w-80 shadow-lg border border-[#4A5568]'
          >
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col items-center gap-4'>
              <div className='w-fit h-fit bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center overflow-hidden'>
                <Image
                  src={game.preview}
                  alt={game.name + ' preview'}
                  width={480}
                  height={240}
                  className='object-contain'
                />
              </div>
              <Link href={game.link} className='w-full'>
                <Button className='w-full'>Play</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
