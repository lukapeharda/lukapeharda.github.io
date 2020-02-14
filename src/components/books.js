import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Books() {
    const colors = ['red', 'blue', 'green', 'yellow'];

    const data = useStaticQuery(graphql`
        query BooksQuery {
            allBooksJson(
                sort: {
                  fields: [recommendationYear]
                  order: DESC
                }
              ) {
                edges {
                    node {
                        url
                        title
                        author
                        description
                        recommendationYear
                    }
                }
            }
        }
    `);

    return (
        <div className="flex flex-wrap -mx-4">
            { data.allBooksJson.edges.map((book, index) => (
                <div className="w-full py-2 px-4" key={ book.node.title }>
                    <h3>
                        <OutboundLink className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ book.node.url } title={ book.node.title } target="_blank">{ book.node.title } <span className="text-sm text-gray-500">by { book.node.author }</span></OutboundLink>
                    </h3>

                    <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ book.node.description }</p>
                </div>
            )) }
        </div>
    );
}

export default Books;