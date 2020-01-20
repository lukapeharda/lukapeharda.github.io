import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function Podcasts() {
    const colors = ['red', 'blue', 'green', 'yellow'];

    const data = useStaticQuery(graphql`
        query PodcastsQuery {
            allPodcastsJson(
                sort: {
                  fields: [recommendationYear]
                  order: DESC
                }
              ) {
                edges {
                    node {
                        url
                        title
                        description
                        recommendationYear
                    }
                }
            }
        }
    `);

    return (
        <div className="flex flex-wrap -mx-4">
            { data.allPodcastsJson.edges.map((podcast, index) => (
                <div className="w-full py-2 px-4" key={ podcast.node.title }>
                    <h3>
                        <OutboundLink className={ `text-white p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ podcast.node.url } title={ podcast.node.title } target="_blank">{ podcast.node.title }</OutboundLink>
                    </h3>

                    <p className="text-gray-100 mt-2">{ podcast.node.description }</p>
                </div>
            )) }
        </div>
    );
}

export default Podcasts;