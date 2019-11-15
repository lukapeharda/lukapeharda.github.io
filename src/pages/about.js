import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'about']}
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black">
                <h1 className="text-white text-4xl italic mb-4">About me</h1>
                <p className="text-white text-xl">My name is Luka Peharda and I'am a <span className="text-e6n-red">PHP</span> &amp; <span className="text-e6n-blue">JS</span> developer with over 10 years of experience!</p>
                <p className="text-white text-xl">Currently I'm working for <a href="https://optimizepress.com" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">OptimizePress</a> crafting bespoke checkout experience and integrating a lot of externals services and APIs into a seamless flow.</p>
                <p className="text-white text-xl">Beside working on OptimizePress payment system, I'm also developing <a href="https://kourses.com/" className="border-b border-e6n-green hover:bg-e6n-green" target="_blank">Kourses</a>, an online course &amp; membership platform.</p>

                <p className="text-white text-xl">You can check some of my personal projects <Link className="border-b border-e6n-yellow hover:bg-e6n-yellow" to="/projects">here</Link> and links to my social network profiles are in the bottom <span className="hidden md:inline">right</span> of the page.</p>

                <p className="text-white text-xl">I'm also a co-organiser of a local developer meetup called <a href="https://www.meetup.com/en-AU/Devz-Meetup-Vara%C5%BEdin/" target="_blank" className="border-b border-e6n-red hover:bg-e6n-red">Devz Meetup Varaždin</a>.</p>

                <p className="text-white text-xl">Programming is more than a work for me. It is a calling :-) A mean to express myself creatively and to harness my brain power to create something that potenitally a lot of people will use. I won't lie, it can be frustrating, there are good and bad days, but more often than not it is exceptionally fullfilling.</p>

                <h3 className="text-white text-3xl mt-6 mb-4 italic">My hobbies &amp; "helmets"</h3>
                <p className="text-white text-xl">I like hiking, biking, cycling and boarding - mostly on snow but now and then I board different kinds of terrain :-).</p>
                <p className="text-white text-xl mb-2">Depending on the season I tend to either ride MTB up &amp; down the mountains, ride motorcycle or (in winter) snowboard.</p>
                <div className="flex -mx-2 mt-8">
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/a6530f4befd5bad047fa0cc0f25116de/5E39F76E/t51.2885-15/e35/60111456_447958889109990_6961973080108333119_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 bg-e6n-black bottom-0 right-0">Motorcycle Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/0473956c18163d00f02a7017df121cd9/5DFDEA2C/t51.2885-15/e35/54512279_358388658219582_909290742526483030_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 bg-e6n-black bottom-0 right-0">MTB Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/510d66588a4db32d09cd89ddf360d338/5E398082/t51.2885-15/e35/53683220_2005211763116871_4516240807228970445_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=103" />
                            <span className="absolute px-2 py-1 text-sm text-gray-500 bg-e6n-black bottom-0 right-0">Snowboarding Helmet</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 text-xs mt-2">And do pretend there aren't any drinks in the photos :)</p>
            </div>
        </Layout>
    );
}

export default AboutPage;


