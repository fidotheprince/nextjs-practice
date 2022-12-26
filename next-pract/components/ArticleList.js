import articleStyles from "../styles/Article.module.css"


export default function ArticleList({articles}) {
  return (
    <div className={articleStyles.grid}>
    
    {articles.map((article) => (
        <h4>
          {article.title}
        </h4>
    ))}

    </div>
  )
}
