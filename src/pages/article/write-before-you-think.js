import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, Subtitle, TweetLink } from "../../components/partials/article";

function WriteBeforeYouThink() {
    return (
        <Layout>
            <SEO
                title="Write Before You Think | by Luka Peharda"
                keywords={['write', 'think', 'solution', 'decision', 'feynman', 'lukapeharda.com', 'luka', 'peharda']}
                description="Writing makes me think clearly and what is more important, more efficiently. And it helps me to structure my thoughts."
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Write Before You Think</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-01-14").toDateString() }</div>
                    <Subtitle>How Writing Helps Me Think Clearly</Subtitle>

                    <Paragraph>A friend of mine published a short post, an Instagram post really, called <span className="text-e6n-green">"Six ethics of life"</span> among which was <span className="text-e6n-blue">"Before you write, THINK."</span> In the context of his post, it makes sense. But it still triggered me and got me thinking.</Paragraph>
                    <Divider></Divider>
                    <Paragraph>There are a lot of scenarios where writing makes me think clearly and what is more important, more efficiently. And it helps me to structure my thoughts.</Paragraph>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4">Solving coding problems</h2>
                    <Paragraph>When I'm stuck on some coding problem or having a hard time debugging an issue I use writing to move everything from my head to make space for thinking and defining a context. Normally I use paper and pencil, but when they aren't available I use Notion.</Paragraph>
                    <Divider></Divider>
                    <Paragraph>I use a process sprawling across a series of steps that guides me to my solution. The process and the steps were influenced by the <a href="https://fs.blog/feynman-technique/" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">Feynman Technique of Learning</a> but were heavily modified.</Paragraph>
                    <Divider></Divider>

                    <Paragraph><span className="text-e6n-red text-white mr-4">1.</span> First, I succinctly describe the problem, often I posit it as a question. This sets a context for me.</Paragraph>
                    <Paragraph><span className="text-e6n-yellow text-white mr-4">2.</span> Then, similarly to Feynman Technique, I write down the stuff I know and stuff that I'm certain is true. In case of debugging an issue, I write down the consequences of the issue at hand, data (or database) state, and code (classes) involved.</Paragraph>
                    <Paragraph><span className="text-e6n-green text-white mr-4">3.</span> I write down the unknowns and things I need to learn more about before making any judgment. And how to convert "unknowns" to "knowns".</Paragraph>
                    <Paragraph><span className="text-e6n-blue text-white mr-4">4.</span> Afterward, I move on to possible causes. After listing the most obvious culprits, I try to look outside the box and come up with barely plausible scenarios. For each of the items here I specify how to validate, confirm or discard the idea.</Paragraph>
                    <Paragraph><span className="text-e6n-red text-white mr-4">5.</span> After clearing these steps pretty much everything is cleared up and there usually aren't any big obstacles for developing a solution.</Paragraph>
                    <Divider></Divider>

                    <Paragraph>Naturally, sometimes these aren't enough so additional steps are added to the process.</Paragraph>
                    <Paragraph><span className="text-e6n-yellow text-white mr-4">6.</span> If the problem at hand is not urgent then I let it simmer for a while and let my unconscious thoughts work on it. I either take a walk, change the working environment (work from a coffee place, work from home), or even sleep on it.</Paragraph>
                    <Paragraph><span className="text-e6n-green text-white mr-4">7.</span> The last step is basically waiting for a solution to strike me in my head :-)</Paragraph>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4">Making decisions</h2>
                    <Paragraph>I use a similar process when I'm stuck at deciding which solution or idea to pursue.</Paragraph>
                    <Paragraph>One difference is using second-order thinking, especially if I'm dealing with legacy code or working on code I didn't write (or forgot about). I tend to really worry about <a href="https://fs.blog/chestertons-fence/" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">Chesterton's Fence</a> kicking me in the but :-)</Paragraph>
                    <Paragraph>The additional benefit of writing down your decision process is that you can easily convert conclusions in your <a href="https://fs.blog/decision-journal/" target="_blank" className="border-b border-e6n-blue hover:bg-e6n-blue">decision diary</a>. You are keeping that, right? How else would you preserve knowledge in your org?</Paragraph>
                    <Paragraph></Paragraph>

                    <Divider></Divider>

                    <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `How to "write before you think" on https://lukapeharda.com/article/write-before-you-think/ by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>
                </div>

                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/how-to-become-better-developer/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="How to become better (developer)">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                    </Link>
                    <Link to="/article/refactoring-optional-method-params/" className="inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none" title="How to Refactor a Method With Optional Params">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default WriteBeforeYouThink;