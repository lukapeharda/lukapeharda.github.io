import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    let now = new Date('2019-06-19');
    return (
        <Layout>
            <SEO
                title="Now"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'now']}
            />

            <div className="h-full w-full p-4 md:p-8">
                <p className="text-white text-xl pb-4">This isn't an <Link className="border-b border-e6n-red hover:bg-e6n-red" to="/about">about</Link> page. <br />It's <a className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://nownownow.com/about" target="_blank">now</a> page. It tells you what I'm working on at the moment and what are my current interests.</p>
                <p className="text-white text-sm">Last updated: { now.toDateString() }</p>

                <h1 className="text-white text-3xl mt-6 pb-4">What I'm doing right <span className="text-e6n-yellow">now</span></h1>

                <p className="text-white text-xl">Currently I'm learning <a href="https://www.gatsbyjs.org" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Gatsby</a> and <a href="https://tailwindcss.com" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">Tailwind CSS</a> and working on my own portfolio page (which you are currently reading).</p>
                <p className="text-white text-xl pb-4">Planing a workshop for local meetup group <a href="https://www.meetup.com/MeCoDe/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Me&lt;CoDe/&gt;</a> with a name "Create and publish a custom Composer package".</p>
            </div>
        </Layout>
    );
}

export default NowPage;
