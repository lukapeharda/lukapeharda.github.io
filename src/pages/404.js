import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
        <SEO
            title="404"
            keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', '404']}
        />

        <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
            <h1 className="text-white text-4xl italic mb-4">Oh dear! We got a 404</h1>

            <p className="text-white text-xl">That means that either page is missing, or I forgot to implement something :)</p>
        </div>
    </Layout>
  );
}

export default NotFoundPage;
