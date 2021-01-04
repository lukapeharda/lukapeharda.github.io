import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, Subtitle } from "../../components/partials/article";

function WritingYearInReviewArticlePage() {
    return (
        <Layout>
            <SEO
                title="Writing Year in Review Article"
                keywords={['2020', 'review', 'year', 'lukapeharda.com']}
                description="My attempt at writing the Year in Review Article for 2020."
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
                <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Man Without Goals</h1>
                <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2021-01-04").toDateString() }</div>
                <Subtitle>Writing Year in Review Article</Subtitle>

                <Paragraph>Like the whole internet and their grandma, I started writing a "2020: Year in review" article.</Paragraph>
                <Paragraph><em className="text-gray-500">For those living under a rock, or who do not have a grandma, a "Year in review" article is an overview of your business, professional, personal, and family accomplishments in the last year. "Enlightened" ones tend to sprinkle it with few failures just to appear modest and down to earth :-)</em></Paragraph>
                <Divider></Divider>
                <Paragraph>After finishing a draft of all major sections and subsections my list of accomplishments was turning into a list of failures. Everywhere I just saw things I failed to do. Projects I failed to finish. Or even start. I know that when reading this article, a good friend of mine with whom I usually share my aspirations and ideas (you know who you are) would list my accomplishments from the top of his head.</Paragraph>
                <Divider></Divider>
                <Paragraph>Does that mean that I am a negative person? Unsuccessful person? Or maybe an objective one? :-D Or just a person without a focus, without grit, or clearly defined goals? Do I need to have goals defined when the year starts for me to be able to critically review them? To be able to objectively see which ones I've accomplished and which ones I failed? And to use failed ones as a plan for the next year's goals? Can you be successful without defined goals?</Paragraph>
                <Divider></Divider>
                <Paragraph>Therefore I've decided to skip writing the "Year in review" article and instead write a list of goals in order to check against them objectively at the end of this year :-)</Paragraph>
                <Divider></Divider>
                <Paragraph><em className="text-gray-500">I had a good year. Especially considering the global pandemic with coronavirus. I and my loved ones were and are healthy. Financially and business-wise the year was solid. I've read a lot of books (52 to be exact, one for each week of the year) and learned a lot from them. Had a lot of time to pursue my hobbies and spend time outdoors. Hang out with dear people. Those that are across the "pond" only virtually but hey :-)</em></Paragraph>
            </div>
        </Layout>
    );
}

export default WritingYearInReviewArticlePage;