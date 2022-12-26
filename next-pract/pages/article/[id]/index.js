import Link from 'next/link'
import { useRouter } from 'next/router'

export default function article({ article }) {
    // const router = useRouter()
    // const { id } = router.query;
    // console.log(id);
  return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go Back</Link>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: { article }
    }
}