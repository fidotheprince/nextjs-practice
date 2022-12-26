import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"


export default function ArticleList({articles}) {
  return (
    <div className={articleStyles.grid}>
    
    {articles.map((article) => (
      <ArticleItem article={article}/>
    ))}

    </div>
  )
}
