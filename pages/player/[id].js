import baseUrl from "../../helpers/baseUrl";

export default function Player({ player }) {
  return (
    <div>
      <h1>{player.name}</h1>
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
