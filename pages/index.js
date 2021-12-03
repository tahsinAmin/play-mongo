import Head from 'next/head'


export default function Home(props) {
  
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>Welcome
      <h2>{props.message}</h2></main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch('http://localhost:3000/api/test')
  const data = await res.json()
  console.log(data);
  return {
    props: { message: data.message }, //will be passed to page component as props
  }
}
