import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Articles() {
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
                        <OutboundLink className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ article.node.url } title={ article.node.title } target="_blank">{ article.node.title }</OutboundLink>
                    </h3>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mt-2">{ new Date(article.node.date).toDateString() }</div>
                    <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ article.node.excerpt }</p>
                </div>
            )) }
        </div>
    );
}

export default Articles;