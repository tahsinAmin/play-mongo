import baseUrl from "../../helpers/baseUrl";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Player({ player }) {
  const router = useRouter();
  const a = player.name.split(" ");
  // console.log(a);
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className=''>
      <div className='flex h-auto'>
        {/* <div className='sidebar fixed flex-none bg-blue-700 text-white h-screen p-2 flex flex-col justify-center z-50'>
          <label htmlFor=''>
            <span className='ti-menu'></span>
          </label>
        </div> */}

        <div className='main flex-grow'>
          <div className='flex flex-col'>
            {/* <header className=' flex-none flex items-center justify-between my-2 w-11/12 mx-auto'>
              <div className='brand flex items-center'>
                <div className='relative h-10 w-6 cursor-pointer my-auto'>
                  <Image
                    src='/img/logo.jpg'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                  />
                </div>
                <p>NBA</p>
              </div>
              <div className='nav-menu'>
                <ul className='flex space-x-4 justify-between uppercase'>
                  <li>
                    <a href=''>Scores</a>
                  </li>
                  <li>
                    <a href=''>Schedule</a>
                  </li>
                  <li>
                    <a href=''>News</a>
                  </li>
                  <li>
                    <a href=''>Players</a>
                  </li>
                  <li>
                    <a href=''>Teams</a>
                  </li>
                </ul>
              </div>
              <div className='user'>
                <div className='relative h-10 w-10 cursor-pointer my-auto'>
                  <Image
                    src='/img/2.jpg'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                  />
                </div>
              </div>
            </header> */}
            <div className='flex-grow bg-gray-200'>
              <div className='main-content w-11/12 mx-auto py-8'>
                <div className='content-1 grid grid-cols-3 gap-3 '>
                  <div className='side-content'>
                    <motion.div
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className='fav flex items-center space-x-2'
                    >
                      <div className='circle-bg flex justify-center items-center align-middle border-2 border-gray-200 bg-gray-300 rounded-full p-2'>
                        <span className='ti-star'></span>
                      </div>
                      <span>Favourites</span>
                    </motion.div>

                    <motion.h1
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className='font-semibold text-5xl my-7 line leading-20'
                    >
                      {a[0]}
                      <br />
                      {a[1]}
                      {/* Paul <br /> George */}
                    </motion.h1>

                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className='team flex items-center space-x-1'
                    >
                      <div className='relative h-10 w-10 cursor-pointer my-auto'>
                        <Image
                          src='/img/logo-sm.png'
                          layout='fill'
                          objectFit='cover'
                          className='rounded-full'
                        />
                      </div>
                      <span>LA Clippers</span>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.7, delay: 2 }}
                      className='features flex space-x-20 mt-7'
                    >
                      <div className='feature'>
                        <p className='font-semibold'>HEIGHT</p>
                        <h2 className='font-semibold text-xl'>
                          {parseInt(player.height * 3.28084)}
                          <small>ft</small>
                          {parseInt(
                            ((player.height * 3.28084) %
                              parseInt(player.height * 3.28084)) +
                              1
                          )}
                          <small>in</small>
                        </h2>
                        <p>/{player.height}m</p>
                      </div>
                      <div className='feature'>
                        <p className='font-semibold'>WEIGHT</p>
                        <h2 className='font-semibold text-xl'>
                          {player.mass * 2.21}
                          <small>lbs</small>
                        </h2>
                        <p>/{player.mass}Kg</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className='middle'>
                    <div className='text-center flex justify-center items-center'>
                      <div className='relative h-36 w-full cursor-pointer my-auto'>
                        <Image
                          src={player.mediaUrl[2]}
                          // onError={(e) => {
                          //   e.target.onerror = null;
                          //   e.target.src = "/img/4.png";
                          // }}
                          layout='fill'
                          objectFit='cover'
                          className=''
                        />
                      </div>
                    </div>
                    <div className='relative'>
                      <div className='paul absolute z-40 scale-125 -translate-y-24 h-[568px] w-[420px] cursor-pointer my-auto'>
                        <Image
                          // src='/img/sc2.png'
                          src={player.mediaUrl[1]}
                          layout='fill'
                          objectFit='cover'
                          className=' absolute'
                        />
                      </div>
                      <h1
                        className='absolute -top-14 z-50 text-9xl  text-red-500 font-bold left-6'
                        style={{ fontFamily: "Teko" }}
                      >
                        {player.jno}
                      </h1>
                      <div className='absolute -top-10 translate-x-18 h-[400px] w-[400px] rounded-full border-gray-200 border-2 z-30'></div>
                    </div>
                  </div>
                  <div className='side-content'>
                    <div className='flex flex-row-reverse'>
                      <div>
                        <h3 className='text-md font-semibold mb-2'>
                          LAST GAME
                        </h3>
                        <div className='game-card rounded-md '>
                          <motion.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className='bg-white p-3 rounded-md'
                          >
                            <h3 className='title text-md font-semibold text-center'>
                              LEAGUE PASS
                            </h3>
                            <div className='game-teams flex justify-between mt-4'>
                              <div className='game-team px-8 flex flex-col justify-center items-center'>
                                <h1 className='font-semibold text-2xl flex items-center space-x-3'>
                                  <div className='relative h-12 w-12 cursor-pointer my-auto'>
                                    <Image
                                      src='/img/logo2-sm.png'
                                      layout='fill'
                                      objectFit='contain'
                                      className=''
                                    />
                                  </div>
                                  <p>101</p>
                                </h1>
                                <b>4-8</b>
                              </div>
                              <div className='game-team flex flex-col justify-center items-center'>
                                <b>FINAL</b>
                              </div>

                              <div className='game-team px-8 flex flex-col justify-center items-center'>
                                <h1 className='font-semibold text-2xl flex justify-center items-center space-x-2'>
                                  <div className='relative h-10 w-10 cursor-pointer my-auto'>
                                    <Image
                                      src='/img/logo-sm.png'
                                      layout='fill'
                                      objectFit='cover'
                                      className=''
                                    />
                                  </div>
                                  <p>120</p>
                                </h1>
                                <b>4-8</b>
                              </div>
                            </div>
                            <div className='text-center date flex space-x-2 items-center justify-center font-semibold'>
                              <span className='ti-calendar'></span>
                              <span className='text-sm'>05/02/2020</span>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className='highlights mt-4 flex space-x-3 overflow-scroll scrollbar-hide'
                          >
                            <div className='rounded-md h-card relative h-[150px] w-[220px]  cursor-pointer hover:scale-105 transform transition duration-300 ease-out '>
                              <Image
                                src='/img/2.jpg'
                                layout='fill'
                                objectFit='cover'
                                className='rounded-md'
                              />
                              <div className='rounded-md h-card-over absolute h-full w-full bg-black bg-opacity-50'>
                                <div className='h-card-content relative h-full w-full'>
                                  <div className='h-card-bottom absolute bottom-0 left-0 text-white border-t-2 border-white w-full p-2 flex'>
                                    <div className='h-card-control'>
                                      <span className='ti-control-play'></span>
                                    </div>
                                    <div className='h-card-title'>
                                      <p className='pl-2 text-xs'>
                                        Paul can't wait to get in front of the
                                        crowd.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='rounded-md h-card h-[150px] w-[200px] cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                              <Image
                                src='/img/1.jpg'
                                layout='fill'
                                objectFit='cover'
                                className='rounded-md'
                              />
                              <div className='rounded-md h-card-over absolute h-full w-full  bg-black bg-opacity-50'>
                                <div className='h-card-bottom absolute bottom-0 left-0 text-white border-t-2 border-white w-full p-2 flex'>
                                  <div className='h-card-control'>
                                    <span className='ti-control-play'></span>
                                  </div>
                                  <div className='h-card-title '>
                                    <p className='pl-2 text-xs'>
                                      Paul can't wait to get in front of the
                                      crowd.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-300 py-2 px-8 min-h-[38vh]'>
                <div className='content-2  bg-gray-300 py-2 min-h-[38vh]'>
                  <div className='flex-grid flex justify-between mt-16'>
                    <div className='flex w-4/12'>
                      <table className='w-9/12 mx-auto'>
                        <tbody>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              BORN
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              05/02/1990
                            </td>
                          </tr>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              AGE
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              29 Years
                            </td>
                          </tr>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              FROM
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              Freshna State
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='flex w-4/12'>
                      <table className='w-9/12 mx-auto'>
                        <tbody>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              NBA DEBUTE
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              {player.debut}
                            </td>
                          </tr>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              YEARS IN NBA
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              9
                            </td>
                          </tr>
                          <tr>
                            <th className='border-b-2 border-gray-500 py-4 px-1 text-left'>
                              PREVIOUSLY
                            </th>
                            <td className='border-b-2 border-gray-500 py-4 px-1'>
                              LAC 2019-21
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className='points absolute w-4/7 bottom-8 transform translate-x-96 pl-28 grid grid-cols-3 gap-x-7 z-50'>
                    <motion.div
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.9 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className='points-card rounded-lg text-center text-white bg-blue-900'
                    >
                      <div className='points-title text-xs uppercase py-2 px-3 font-semibold border-b-2 border-gray-100'>
                        <p>Points per Game</p>
                      </div>
                      <div className='points-body py-6 flex justify-center items-center'>
                        <h2 className='text-3xl'>
                          {player.ppg}{" "}
                          <span className=' text-sm ti-arrow-up'></span>
                        </h2>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.9 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className='points-card rounded-lg text-center text-white bg-gray-800'
                    >
                      <div className='points-title text-xs uppercase py-2 px-3 font-semibold border-b-2 border-gray-100'>
                        <p>Rebounds per Game</p>
                      </div>
                      <div className='points-body py-6 flex justify-center items-center'>
                        <h2 className='text-3xl'>
                          {player.rpg}{" "}
                          <span className=' text-sm ti-arrow-up'></span>
                        </h2>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.9 }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className='points-card rounded-lg text-center text-white bg-blue-900'
                    >
                      <div className='points-title text-xs uppercase py-2 px-3 font-semibold border-b-2 border-gray-100'>
                        <p>Assists per Game</p>
                      </div>
                      <div className='points-body py-6 flex justify-center items-center'>
                        <h2 className='text-3xl'>
                          {player.apg}{" "}
                          <span className='text-sm ti-arrow-up'></span>
                        </h2>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch(`${baseUrl}/api/players`);
  const players = await res.json();

  // Get the paths we want to pre-render based on products
  const paths = players.map((player) => ({
    params: { id: player._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the product `id`.
  // If the route is like /products/1, then params.id is 1
  const res = await fetch(`${baseUrl}/api/player/${params.id}`);
  const player = await res.json();

  // Pass product data to the page via props
  return { props: { player } };
}
