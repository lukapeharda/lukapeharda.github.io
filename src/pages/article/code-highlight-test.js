import React from "react";
import Highlight from 'react-highlight';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, Subtitle } from "../../components/partials/article";

function CodeHighlightTest() {
    return (
        <Layout>
            <SEO
                title="Writing Year in Review Article"
                keywords={['2020', 'review', 'year', 'lukapeharda.com']}
                description="My attempt at writing the Year in Review Article for 2020."
            />

            <link rel="stylesheet" href="/node_modules/highlight.js/styles/stackoverflow-dark.css" />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Code Highlighting Test</h1>

                    <Subtitle>Use Builder::toBase method to return stdClass object from your query</Subtitle>
                    <Paragraph>Use Illuminate\Database\Eloquent\Builder::toBase method when you want or need to return stdClass from you query instead of the model class:</Paragraph>

                    <Highlight className="language-php">
                        {
`$user = App\User::find(1); // $user is an instance of App\User
$user = App\User::toBase()→find(1); // $user is an instance of stdClass`
}
                    </Highlight>

                    <Paragraph>This can be useful in queries where you are modifying the select part of the query and returning aggregates or some computed values.</Paragraph>

                    <Divider></Divider>
                </div>
            </div>
        </Layout>
    );
}

export default CodeHighlightTest;