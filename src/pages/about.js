import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import helmet from "../images/dog-illustration.svg";

function AboutPage() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'about']}
            />

            <div className="h-full w-full p-4 md:p-8 text-content">
                <p className="text-white text-xl">My name is Luka Peharda and I'am a <span className="border-b border-e6n-red">PHP</span> &amp; <span className="border-b border-e6n-blue">JS</span> developer with over 10 years of experience!</p>
                <p className="text-white text-xl">Currently I'm working for <a href="https://optimizepress.com" className="border-b border-e6n-blue hover:bg-e6n-blue">OptimizePress</a> crafting bespoke checkout experience and integrating a lot of externals services and APIs.</p>

                <p className="text-white text-xl">You can check some of my personal projects <Link className="border-b border-e6n-yellow hover:bg-e6n-yellow" to="/projects">here</Link>. </p>

                <h3 className="text-white text-2xl mt-6 mb-2">My hobbies / helmets</h3>
                <p className="text-white text-xl mb-2">Depending on the season I tend to either ride MTB up & down the mountains, ride motorcycle or (in winter) snowboard.</p>
                <div className="flex -mx-2">
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/a6530f4befd5bad047fa0cc0f25116de/5E39F76E/t51.2885-15/e35/60111456_447958889109990_6961973080108333119_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106" />
                            <span className="absolute px-2 py-1 text-sm text-e6n-black bg-white bottom-0 right-0">Motorcycle Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/0473956c18163d00f02a7017df121cd9/5DFDEA2C/t51.2885-15/e35/54512279_358388658219582_909290742526483030_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106" />
                            <span className="absolute px-2 py-1 text-sm text-e6n-black bg-white bottom-0 right-0">MTB Helmet</span>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="relative">
                            <img src="https://scontent-vie1-1.cdninstagram.com/vp/510d66588a4db32d09cd89ddf360d338/5E398082/t51.2885-15/e35/53683220_2005211763116871_4516240807228970445_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=103" />
                            <span className="absolute px-2 py-1 text-sm text-e6n-black bg-white bottom-0 right-0">Snowboarding Helmet</span>
                        </div>
                    </div>
                </div>
                <p className="text-white text-xs mt-2">And do pretend there aren't any drinks in the photos :)</p>
            </div>
        </Layout>
    );
}

export default AboutPage;


