import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Articles from "../components/articles";

function ArticlesPage(data) {
    return (
        <Layout>
            <SEO
                title="Articles"
                keywords={['lukapeharda', 'lukapeharda.com', 'articles']}
            />

            <div className="h-full w-full p-4 md:p-8">
                <h1 className="text-white text-4xl italic">Articles</h1>

                <Articles />
            </div>
        </Layout>
    );
}

export default ArticlesPage;
