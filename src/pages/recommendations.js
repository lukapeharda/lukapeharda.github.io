import React from "react";

import Layout from "../components/layout";
import Books from "../components/books";
import Podcasts from "../components/podcasts";
import SEO from "../components/seo";

function RecommendationsPage() {
    return (
        <Layout>
            <SEO
                title="Podcast and book recommendations"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'recommendations', 'books', 'podcasts']}
            />

            <div className="h-full w-full p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-3">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-4">Book recommendations</h1>
                    <Books />
                </div>
                <div className="w-full md:w-1/2 md:pl-3">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-4">Podcast recommendations</h1>
                    <Podcasts />
                </div>
            </div>
        </Layout>
    );
}

export default RecommendationsPage;


