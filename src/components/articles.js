import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function ArticleLink(props) {
    const { href, children, ...other } = props;

    if (href.startsWith('http')) {
        return (
            <OutboundLink href={ href } { ... other }>{ children }</OutboundLink>
        );
    } else {
        return (
            <Link to={ href } { ... other }>{ children }</Link>
        )
    }
}

function Articles() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const articlesPerPage = 6;

    const [index, setIndex] = useState(0);

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

    const maxPages = Math.ceil(data.allArticlesJson.edges.length / articlesPerPage);

    const nextPage = () => {
        if (index < maxPages - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const prevPage = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(maxPages - 1);
        }
    }

    const articles = data.allArticlesJson.edges.slice(index * articlesPerPage, (index * articlesPerPage) + articlesPerPage);

    return (
        <div className="h-full w-full relative p-4 md:p-8">
            <h1 className="text-white text-4xl italic">Articles</h1>
            <div className="flex flex-wrap -mx-4 mb-12 pb-8">
                { articles.map((article, index) => (
                    <div className="w-full md:w-1/2 lg:w-1/3 py-2 px-4" key={ article.node.id }>
                        <h3>
                            <ArticleLink className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ article.node.url } title={ article.node.title.replace('&nbsp;', '') } target="_blank" dangerouslySetInnerHTML={{ __html: article.node.title }}></ArticleLink>
                        </h3>
                        <div className="text-gray-500 light-mode:text-gray-800 text-xs mt-2">{ new Date(article.node.date).toDateString() }</div>
                        <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ article.node.excerpt }</p>
                    </div>
                )) }
            </div>
            <div className="absolute bottom-0 left-0 m-4 md:m-8">
                <span className="text-gray-500 light-mode:text-gray-800">{ `Page ${ index + 1 } of ${maxPages }` }</span>
            </div>
            <div className="absolute bg-white flex justify-around bottom-0 right-0">
                <button type="button" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" onClick={ prevPage }>
                    <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                </button>
                <button type="button" className="inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none" onClick={ nextPage }>
                    <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default Articles;