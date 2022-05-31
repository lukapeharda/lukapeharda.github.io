import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, TweetLink, OutLink } from "../../components/partials/article";

function UnexpectedBenefitsOfEstimations() {
    return (
        <Layout>
            <SEO
                title="Unexpected benefits of estimations | by Luka Peharda"
                keywords={['estimation', 'benefit', 'beat', 'procrastination', 'luka', 'peharda']}
                description="Did you know you can use the estimation to jump-start and beat procrastination? Reasons for the procrastination can be because we don't know how to do something or even what needs to be done."
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Unexpected benefits of estimations</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-05-31").toDateString() }</div>

                    <Paragraph>I yet have to meet a developer that likes doing estimations. And don't get me started on sticking with them.</Paragraph>
                    <Paragraph>I get that they are necessary for management to make plans but that does not mean I have to like them or enjoy doing them. No matter how hard I try my estimations are never correct.</Paragraph>
                    <Paragraph><span className="italic text-gray-500 light-mode:text-gray-800">I've been using <OutLink color="yellow" href="https://www.fool.com/the-ascent/small-business/project-management/articles/three-point-estimating/">the three-point estimation technique</OutLink> lately.</span></Paragraph>
                    <Paragraph>Did you know you can use the estimation to jump-start and beat procrastination? No? Read on. You did? Well, why didn't you share it with me?</Paragraph>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4">What is procrastination?</h2>

                    <Paragraph><span class="italic">"<OutLink color="blue" href="https://www.verywellmind.com/the-psychology-of-procrastination-2795944">Procrastination</OutLink> is the act of delaying or putting off tasks until the last minute, or past their deadline."</span></Paragraph>
                    <Paragraph>Why? I'll leave that up to you as each of us have a large number of different reasons for it.</Paragraph>
                    <Paragraph>In some cases, reasons for the procrastination can be because we don't know how to do something or even what needs to be done. Or we are intimidated by the size of the task in front of us. And this is where estimation kicks in!</Paragraph>


                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4">How estimation can help?</h2>

                    <Paragraph>Well, when doing an estimation you'll have to get all information on what it is that you are building. You'll have to fill all missing gaps and deal with all ambiguous requirements.</Paragraph>
                    <Paragraph>You'll split a large task into smaller manageable pieces. <span className="italic text-gray-500 light-mode:text-gray-800">And you'll be able to procrastinate over a large number of smaller tasks.</span></Paragraph>
                    <Paragraph>By doing that, the task will be manageable and our motivation will slightly improve.</Paragraph>
                    <Paragraph></Paragraph>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4">Additional benefits</h2>

                    <Paragraph>Usually, the best cure for procrastination is to just start working. Doing as small a chunk of work as possible. Guess what? By doing the estimation you've done exactly that! You've started working on your task. And now nobody can stop you.</Paragraph>
                    <Paragraph>Not only that, but by providing the estimation number you'll be "going public" with it and now a much larger audience could "hold you accountable".</Paragraph>

                    <Divider></Divider>

                    <Paragraph><span className="text-gray-500 light-mode:text-gray-800">This article is a part of my personal pledge to write at least one article per month for a whole year. As you can see, I've written this article on the last day of May which means that I'm struggling with procrastination as well so if you know any good tips please let me know!</span></Paragraph>

                    <Divider></Divider>

                    <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `Unexpected benefits of estimations on https://lukapeharda.com/article/unexpected-benefits-of-estimations/ by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>

                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/how-to-generate-a-full-Tailwind-CSS-palette-from-a-single-color/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="How to generate a full Tailwind CSS palette from a single color">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                    </Link>
                    <a className="inline-block p-6 text-e6n-black focus:outline-none cursor-not-allowed">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                    </a>
                </div>
            </div>
        </Layout>
    );
}

export default UnexpectedBenefitsOfEstimations;
