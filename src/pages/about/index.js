export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/todo');
    const repo = await res.json()
    return { props: { repo } }
  }

  export default function Page({repo}) {
    console.log(repo);
    return (
        <main>
            <h1>About Us {JSON.stringify(repo)}</h1>
        </main>)
}
