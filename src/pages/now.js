import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    const prev = new Date('2020-03-30');
    const now = new Date('2020-12-07');
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

                <p className="text-white light-mode:text-gray-800 text-xl">Implementing coupons for subscriptions in <OutboundLink href="https://optimizepress.com/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">OptimizePress Checkouts</OutboundLink> WordPress plugin while refactoring legacy code doing payments. Wraping up subscription implementation and getting it ready for intesive testing before relasing it to customers.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">Working on special upsell scenarios for new <OutboundLink href="https://optimizepress.com/" className="border-b border-e6n-green hover:bg-e6n-green" target="_blank">OptimizePress</OutboundLink> customers which would give them extra template packs when upgrading to larger tier.</p>
            </div>
        </Layout>
    );
}

export default NowPage;
