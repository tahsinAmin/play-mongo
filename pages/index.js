import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import baseUrl from "../helpers/baseUrl";

export default function Home({ players }) {
  const playerList = players.map((player) => {
    return (
      <div
        key={player._id}
        className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700'
      >
        <div className='relative h-56 w-full'>
          <Image
            className='rounded-t-lg'
            src={player.media}
            layout='fill'
            objectFit='contain'
            alt={player.name}
          />
        </div>
        <div className='p-5'>
          <a href='#'>
            <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
            <span className='font-bold'>PPG</span> {player.ppg}
          </p>
          <p className='font-normal text-gray-700 mb-3 dark:text-gray-400'>
            <span className='font-bold'>APG</span> {player.apg}
          </p>
          <Link href={"player/[id]"} as={`player/${player._id}`}>
            <a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Read more
              <svg
                className='-mr-1 ml-2 h-4 w-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    );
  });
  console.log(players);
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-wrap md:space-x-2 space-y-2 md:space-y-0'>
        {playerList}
      </main>
      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/players`);
  const data = await res.json();
  return {
    props: { players: data }, // will be passed to the page component as props
  };
}

// how to add another column in mongo db? Wnated to add the jersey number.
// = https://www.youtube.com/watch?v=x96OwF3jQrg
