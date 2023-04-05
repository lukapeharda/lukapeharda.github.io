import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    const now = new Date('2023-04-05');
    return (
        <Layout>
            <SEO
                title="What I'm doing right now"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'now']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content">
                <p className="text-white light-mode:text-gray-800 text-xl">This isn't an <Link className="border-b border-e6n-red hover:bg-e6n-red" to="/about">about</Link> page.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">It's <OutboundLink className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://nownownow.com/about/" target="_blank">now</OutboundLink> page. It tells you what I'm working on at the moment and what are my current interests.</p>

                <h1 className="text-white light-mode:text-gray-800 italic text-4xl mt-8">What I'm doing right <span className="text-e6n-yellow">now</span></h1>
                <p className="text-gray-500 light-mode:text-gray-800 text-sm pb-4">{ now.toDateString() }</p>

                <p className="text-white light-mode:text-gray-800 text-xl">Implementing search experience for <OutboundLink href="https://kourses.com/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Kourses</OutboundLink> using <OutboundLink href="https://www.meilisearch.com/" className="border-b border-e6n-red hover:bg-e6n-red" target="_blank">Meilisearch</OutboundLink>. Currently we are dogfooding<sup>1</sup> Kourses for <OutboundLink href="https://university.optimizepress.com/login" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">OptimizePress University</OutboundLink> but closed beta should be out soon as search is one of the last feature to be added for beta 1.</p>

                <p className="text-gray-500 light-mode:text-gray-800 text-xl"><sup>1</sup> Dogfooding is a term used when you use a product you've built your self as a customer.</p>
            </div>
        </Layout>
    );
}

export default NowPage;
