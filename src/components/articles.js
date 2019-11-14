import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Articles({articles}) {
    const colors = ['red', 'blue', 'green', 'yellow'];

    const data = useStaticQuery(graphql`
        query ArticlesQuery {
            allArticlesJson(
                sort: {
                  fields: [date]
                  order: DESC
                }
              ) {
                edges {
                    node {
                        id
                        url
                        title
                        excerpt
                        date
                    }
                }
            }
        }
    `);

    return (
        <div className="flex flex-wrap -mx-4">
            { data.allArticlesJson.edges.map((article, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 py-2 px-4" key={ article.node.id }>
                    <h3>
                        <a className={ `text-white p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ article.node.url } title={ article.node.title } target="_blank">{ article.node.title }</a>
                    </h3>
                    <div className="text-white text-xs text-gray-500 mt-2">{ new Date(article.node.date).toDateString() }</div>
                    <p className="text-gray-100 mt-2">{ article.node.excerpt }</p>
                </div>
            )) }
        </div>
    );
}

export default Articles;