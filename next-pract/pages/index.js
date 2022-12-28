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

  /**
   * Important to note that only absolute URLS are included
   */
  
  const res = await fetch(process.env.DEVPATH + 'api/articles')
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