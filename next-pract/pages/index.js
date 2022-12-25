import Head from 'next/head'

export default function Home({articles}) {
  
  return (
    <div>
      <h1>Welcome to Next</h1>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>

  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();
  /**
   * expose fetch data to component via
   * setting to props
   */
  return {
    props: { articles }
  }
}