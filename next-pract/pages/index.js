import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

/* Example of request to our backend API */

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/articles')
  const articles = await res.json();
  /**
   * expose fetch data to component via
   * setting to props
   */
  return {
    props: { articles }
  }
}

/* Example of request to an external API */

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json();
//   /**
//    * expose fetch data to component via
//    * setting to props
//    */
//   return {
//     props: { articles }
//   }
// }