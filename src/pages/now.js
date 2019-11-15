import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    let now = new Date('2019-11-14');
    return (
        <Layout>
            <SEO
                title="Now"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'now']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content">
                <p className="text-white text-xl">This isn't an <Link className="border-b border-e6n-red hover:bg-e6n-red" to="/about">about</Link> page.</p>
                <p className="text-white text-xl">It's <a className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://nownownow.com/about" target="_blank">now</a> page. It tells you what I'm working on at the moment and what are my current interests.</p>
                <p className="text-gray-500 text-sm">Last updated: { now.toDateString() }</p>

                <h1 className="text-white italic text-4xl mt-8 pb-6">What I'm doing right <span className="text-e6n-yellow">now</span></h1>

                <p className="text-white text-xl">Currently I'm learning <a href="https://www.gatsbyjs.org" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Gatsby</a> and <a href="https://tailwindcss.com" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">Tailwind CSS</a> and working on my own portfolio page (which you are currently reading).</p>
                <p className="text-white text-xl">Implementing <span className="text-e6n-blue">PayPal</span> subscriptions to <a href="https://www.optimizepress.com" target="_blank">OptimizePress</a> checkout because PayPal is still a thing in a lot of countries and preferred method of payment for a lot of people. Now if only it wasn't such a mess to integrate...</p>
            </div>
        </Layout>
    );
}

export default NowPage;
