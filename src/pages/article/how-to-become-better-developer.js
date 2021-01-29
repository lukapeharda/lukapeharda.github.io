import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, Subtitle } from "../../components/partials/article";

function HowToBecomeBetterDeveloper() {
    return (
        <Layout>
            <SEO
                title="How to Become Better (Developer)"
                keywords={['better', 'developer', 'fundamentals', 'mental models', 'teamwork', 'cohesion', 'communication']}
                description="Fundamentals are forever. So it would be wise to invest your time to grow those."
            />

            <div className="h-full w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
                <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">How to Become Better (Developer)</h1>
                <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2021-01-29").toDateString() }</div>

                <Paragraph>Trends, as well as frameworks, comes and goes. Heck, JavaScript frameworks come and go each day 😂 </Paragraph>
                <Paragraph>Fundamentals are forever. So it would be wise to invest your time to grow those.</Paragraph>
                <Paragraph><em className="text-gray-500">Although this article is written for software developers, I believe there are some universal truths here everybody can learn from.</em></Paragraph>

                <Divider></Divider>

                <Subtitle>Fundamentals</Subtitle>
                <Paragraph>
                    <ul className="list-disc pl-4">
                        <li className="pb-4"><span className="text-e6n-red">Teamwork</span> — Great teams build great software so don’t take teamwork and your team for granted. Cultivate and prune your team. And, what is more, try to see situations from a different team member's perspective.</li>
                        <li className="pb-4"><span className="text-e6n-blue">Trust and cohesion</span> — "Team without trust isn't a team: it's just a group of individuals, working together, often making disappointing progress". Teams move at the speed of trust. Be the kind of dependable person you would want to work with.</li>
                        <li className="pb-4"><span className="text-e6n-green">Communication</span> — Communicate honestly and proactively. Do not assume that because you understand something and it is simple and easy for you that everybody else perceives it the same. Listen before speaking.</li>
                        <li className="pb-4"><span className="text-e6n-yellow">Seek Consensus</span> — It is really helpful if the whole team is on the same page so make sure to take the time for your whole team to get aboard. Discussion and disagreement are not necessarily bad as they can lead you to the best solution.</li>
                        <li className="pb-4"><span className="text-e6n-red">Automated Testing</span> — Well-tested code allows you (and your team) to move fast with confidence. And not only that, using TDD (where you write tests simultaneously as you code) can speed up your development by providing faster means of testing (clicking through your UI to test some scenario is tedious, error-prone, and slow).</li>
                        <li className="pb-4"><span className="text-e6n-blue">Clean, understandable, and navigable code and design</span> — Think of the next engineer that will take over your code as your customer. Build code that your successor won’t have any trouble reading, maintaining, and updating. More often than not you will be your own "customer" and you'll have to modify some parts several months later and you'll have trouble navigating your work if not properly taken care of. So imagine how hard this would be for someone else.</li>
                    </ul>
                </Paragraph>

                <Divider></Divider>

                <Subtitle>Multiplicative System</Subtitle>
                <Paragraph>One extra thing to consider is the multiplicative system mental model.</Paragraph>
                <Paragraph>Let's say you value your coding skills as "10", writing clean code as "8", your testing skills as "9" but your communication skills as "0" (because your work should speak for itself, right :)). Then if we do basic multiplication 10 x 8 x 0 x 0 result would be 0!</Paragraph>
                <Paragraph>If you are missing one of the traits for a great developer (great either by your standards or by community standards) your value could be 0. Does not matter whether you're a 10x if you do not know how to communicate with your peers, your PMs. Or if you do not know how to communicate your value to the community.</Paragraph>

                <Divider></Divider>

                <Subtitle>Sources</Subtitle>
                <Paragraph>Here are my sources for this article and links you should visit to learn more:</Paragraph>
                <Paragraph>
                    <ul className="list-disc pl-4">
                        <li className="pb-4"><OutboundLink className="border-b border-e6n-red hover:bg-e6n-red" href="https://www.bti360.com/what-ive-learned-in-45-years-in-the-software-industry/" target="_blank" title="What I’ve Learned in 45 Years in the Software Industry ">What I’ve Learned in 45 Years in the Software Industry </OutboundLink></li>
                        <li className="pb-4"><OutboundLink className="border-b border-e6n-blue hover:bg-e6n-blue" href="https://fs.blog/2016/08/multiplicative-systems/" target="_blank" title="Multiplicative System Mental Model">Multiplicative System Mental Model</OutboundLink></li>
                        <li className="pb-4"><OutboundLink className="border-b border-e6n-green hover:bg-e6n-green" href="https://www.mindtools.com/pages/article/building-trust-team.htm" target="_blank" title="Building Trust Inside Your Team">Building Trust Inside Your Team</OutboundLink></li>
                        <li className="pb-4"><OutboundLink className="border-b border-e6n-yellow hover:bg-e6n-yellow" href="https://en.wikipedia.org/wiki/Curse_of_knowledge" target="_blank" title="Curse of Knowledge">Curse of Knowledge</OutboundLink></li>
                    </ul>
                </Paragraph>
            </div>
        </Layout>
    );
}

export default HowToBecomeBetterDeveloper;
