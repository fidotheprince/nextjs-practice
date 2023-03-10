import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

export default function article({ article }) {
    // const router = useRouter()
    // const { id } = router.query;
    // console.log(id);
    console.log(article)
  return (
    <>
        <Meta title={article.title} />
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
    </>
  )
}

//enables you to fetch paths
export const getStaticProps = async (context) => {
    
    const res = await fetch(process.env.DEVPATH + 'api/articles/' + context.params.id)
    const article = await res.json()
    return {
        props: { article }
    }
}

//generates all possible paths;
export const getStaticPaths = async () => {
    const res = await fetch(process.env.DEVPATH + 'api/articles')
    const articles = await res.json()
    //return array of ids;
    const ids = articles.map(article => article.id)
    //establish paths;
    const paths = ids.map(id => ({
        params : {id : id.toString()}
    }))

    return {
        paths,
        fallback: false
    }

}