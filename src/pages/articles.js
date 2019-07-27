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

            <Articles />
        </Layout>
    );
}

export default ArticlesPage;
