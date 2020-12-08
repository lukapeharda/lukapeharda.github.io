import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo from '../components/logo';

function IndexPage() {
  return (
    <Layout>
        <SEO
            title="Home"
            keywords={['luka', 'peharda', 'lukapeharda']}
        />

        <div className="h-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center py-6">
                <Logo width="400" height="400"></Logo>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-8 py-6">
                <div className="text-white light-mode:text-gray-800 text-center md:text-left">
                    <h2 className="text-4xl italic pb-4">Hi!</h2>
                    <p className="text-3xl">My name is Luka Peharda and I'am a <span className="text-e6n-red">PHP</span> &amp; <span className="text-e6n-blue">JS</span> developer with over 10 years of experience!</p>
                </div>
            </div>
        </div>
    </Layout>
  );
}

export default IndexPage;
