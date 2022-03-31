import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function NowPage() {
    const now = new Date('2022-03-24');
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

                <p className="text-white light-mode:text-gray-800 text-xl">Currently, I'm implementing new payment flows and updating old ones (with the knowledge accrued from <OutboundLink href="https://optimizepress.com/" className="border-b border-e6n-red hover:bg-e6n-red" target="_blank">OptimizePress</OutboundLink>) to <OutboundLink href="https://kourses.com/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Kourses</OutboundLink>, our SaaS product for creating courses (which is now in closed beta). As 3D Secure 2 and PSD2 are ramping up it was about time to handle required authorization flows.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">I'm working on adding extra membership features so you can build whole membership site in one place.</p>
            </div>
        </Layout>
    );
}

export default NowPage;
