import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
import Meta from './Meta'

export default function ArticleItem({article}) {
    
  return (
    /*Demonstrates how to dynamically set a endpoint*/
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <Meta title={article.title} description={article.excerpt} />
        <div className={articleStyles.card}>
            <h2>{article.title} &rarr;</h2>
            <p>{article.excerpt}</p>
        </div>
    </Link>
  )
}
