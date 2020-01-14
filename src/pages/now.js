import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    const prev = new Date('2019-11-14');
    const now = new Date('2020-01-14');
    return (
        <Layout>
            <SEO
                title="Now"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'now']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content">
                <p className="text-white text-xl">This isn't an <Link className="border-b border-e6n-red hover:bg-e6n-red" to="/about">about</Link> page.</p>
                <p className="text-white text-xl">It's <OutboundLink className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://nownownow.com/about" target="_blank">now</OutboundLink> page. It tells you what I'm working on at the moment and what are my current interests.</p>

                <h1 className="text-white italic text-4xl mt-8">What I'm doing right <span className="text-e6n-yellow">now</span></h1>
                <p className="text-gray-500 text-sm pb-4">{ now.toDateString() }</p>

                <p className="text-white text-xl">Working on funnel stats and funnel steps A/B variation testing for <OutboundLink href="https://optimizepress.com" className="border-b border-e6n-green hover:bg-e6n-green" target="_blank">OptimizePress WordPress Page Builder</OutboundLink>.</p>
                <p className="text-white text-xl">I'm adding new features to <OutboundLink href="https://photile.co" className="border-b border-e6n-red hover:bg-e6n-red" target="_blank">Photile.co</OutboundLink> and working on its landing page describing potential use cases.</p>

                <h2 className="text-white italic text-2xl mt-8">Previous update</h2>
                <p className="text-gray-500 text-sm pb-4">{ prev.toDateString() }</p>

                <p className="text-white text-xl">Currently I'm learning <OutboundLink href="https://www.gatsbyjs.org" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Gatsby</OutboundLink> and <OutboundLink href="https://tailwindcss.com" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">Tailwind CSS</OutboundLink> and working on my own portfolio page (which you are currently reading).</p>
                <p className="text-white text-xl">Implementing <span className="text-e6n-blue">PayPal</span> subscriptions to <OutboundLink href="https://www.optimizepress.com" target="_blank">OptimizePress</OutboundLink> checkout because PayPal is still a thing in a lot of countries and preferred method of payment for a lot of people. Now if only it wasn't such a mess to integrate...</p>
            </div>
        </Layout>
    );
}

export default NowPage;
