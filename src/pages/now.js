import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    const now = new Date('2021-11-26');
    return (
        <Layout>
            <SEO
                title="Now"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'now']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content">
                <p className="text-white light-mode:text-gray-800 text-xl">This isn't an <Link className="border-b border-e6n-red hover:bg-e6n-red" to="/about">about</Link> page.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">It's <OutboundLink className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://nownownow.com/about/" target="_blank">now</OutboundLink> page. It tells you what I'm working on at the moment and what are my current interests.</p>

                <h1 className="text-white light-mode:text-gray-800 italic text-4xl mt-8">What I'm doing right <span className="text-e6n-yellow">now</span></h1>
                <p className="text-gray-500 light-mode:text-gray-800 text-sm pb-4">{ now.toDateString() }</p>

                <p className="text-white light-mode:text-gray-800 text-xl">After a couple months of hiatus, I'm back working on <OutboundLink href="https://kourses.com/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Kourses</OutboundLink>, <span className="text-gray-500">our unreleased membership SaaS product.</span> Currently, I'm working on API and integrating it with our own <OutboundLink href="https://optimizepress.com/" className="border-b border-e6n-red hover:bg-e6n-red" target="_blank">OptimizePress</OutboundLink> members' hub to give customers extra content and value. This means that we are starting to eat our own dog food and use our product :-)</p>

                <p className="text-white light-mode:text-gray-800 text-xl">As winter has arrived improvment of my MTB skills have moved from real life to PS4 and Riders Republic :-D</p>
            </div>
        </Layout>
    );
}

export default NowPage;
