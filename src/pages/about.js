import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'about']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
                <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-4">About me</h1>
                <p className="text-white light-mode:text-gray-800 text-xl">My name is Luka Peharda and I'am a <span className="text-e6n-red">PHP</span> &amp; <span className="text-e6n-blue">JS</span> developer with over 10 years of experience!</p>
                <p className="text-white light-mode:text-gray-800 text-xl">Currently I'm working for <OutboundLink href="https://optimizepress.com/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">OptimizePress</OutboundLink> crafting bespoke checkout experience and integrating a lot of externals services and APIs into a seamless flow.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">Beside working on OptimizePress payment system, I'm also developing <OutboundLink href="https://kourses.com/" className="border-b border-e6n-green hover:bg-e6n-green" target="_blank">Kourses</OutboundLink>, an online course &amp; membership platform.</p>

                <p className="text-white light-mode:text-gray-800 text-xl">You can check some of my personal projects <Link className="border-b border-e6n-yellow hover:bg-e6n-yellow" to="/projects">here</Link> and links to my social network profiles are in the bottom <span className="hidden md:inline">right</span> of the page.</p>

                <p className="text-white light-mode:text-gray-800 text-xl">I'm also a co-organiser of a local developer meetup called <OutboundLink href="https://www.meetup.com/en-AU/Devz-Meetup-Vara%C5%BEdin/" target="_blank" className="border-b border-e6n-red hover:bg-e6n-red">Devz Meetup Varaždin</OutboundLink>.</p>

                <p className="text-white light-mode:text-gray-800 text-xl">I like to read a lot and listen to podcasts so if interested take a look at my <Link className="border-b border-e6n-green hover:bg-e6n-green" to="/recommendations/">recommendations</Link>.</p>

                <p className="text-white light-mode:text-gray-800 text-xl">Programming is more than a work for me. It is a calling :-) A mean to express myself creatively and to harness my brain power to create something that potenitally a lot of people will use. I won't lie, it can be frustrating, there are good and bad days, but more often than not it is exceptionally fullfilling.</p>

                <h3 className="text-white light-mode:text-gray-800 text-3xl mt-6 mb-4 italic">My hobbies &amp; "helmets"</h3>
                <p className="text-white light-mode:text-gray-800 text-xl">I like hiking, biking, cycling and boarding - mostly on snow but now and then I board different kinds of terrain :-).</p>
                <p className="text-white light-mode:text-gray-800 text-xl mb-2">Depending on the season I tend to either ride MTB up &amp; down the mountains, ride motorcycle or (in winter) snowboard.</p>
                <div className="flex -mx-2 mt-8">
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="/images/lukapeharda-motorcycle-helmet-biltwell.jpg" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 light-mode:text-gray-800 bg-e6n-black light-mode:bg-white bottom-0 right-0">Motorcycle Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="/images/lukapeharda-mtb-helmet-btwin.jpg" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 light-mode:text-gray-800 bg-e6n-black light-mode:bg-white bottom-0 right-0">MTB Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="/images/lukapeharda-snowboarding-helmet-anon.jpg" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 light-mode:text-gray-800 bg-e6n-black light-mode:bg-white bottom-0 right-0">Snowboarding Helmet</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 light-mode:text-gray-800 text-xs mt-2">And do pretend there aren't any drinks in the photos :)</p>
            </div>
        </Layout>
    );
}

export default AboutPage;


