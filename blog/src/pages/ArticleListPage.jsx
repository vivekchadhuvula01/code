import React from 'react';
import { articles } from './article-content';
import { Link } from 'react-router-dom'

const ArticleListPage = () => {

    return (
        <>
            <h1 className='app'> Articles</h1>
            {
                articles.map((article, index) => (
                    <div className='article-list'>
                        <Link to={`/articles/${article.name}`}>
                            <h3 key={index}>{article.title}</h3><span></span>
                            <p key={index}>{article.description.substring(0, 120)}</p>
                        </Link>
                    </div>
                ))
            }

        </>
    )
}

export default ArticleListPage
