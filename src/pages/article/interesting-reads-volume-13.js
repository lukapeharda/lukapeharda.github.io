import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, Subtitle } from "../../components/partials/article";

function OutLink(props) {
    const { children, href, color } = props;

    return <OutboundLink href={ href } target="_blank" className={ `border-b border-e6n-${color} hover:bg-e6n-${color}` }>{ children }</OutboundLink>
}

function InterestingReadsVolume13Page() {
    return (
        <Layout>
            <SEO
                title="Interesting Reads - volume #13"
                keywords={['articles', 'interesting', 'reads', 'lukapeharda.com', '13']}
                description="Woohoo, we're already at lucky number 13! Featuring articles from @adamwathan, @marcelpociot, @calebporzio and many others"
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Interesting Reads - volume #13</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2020-08-05").toDateString() }</div>

                    <Paragraph>Woohoo, we're already at lucky number 13! Did you know that number 13 is considered lucky to the Chinese?</Paragraph>
                    <Paragraph>Right, better get right into scrolling (and clicking hopefully)! Featuring <OutLink href="https://twitter.com/adamwathan" color="green">@adamwathan</OutLink>, <OutLink href="https://twitter.com/marcelpociot" color="blue">@marcelpociot</OutLink>, <OutLink href="https://twitter.com/calebporzio/" color="yellow">@calebporzio</OutLink> and many others.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://beyondco.de/docs/expose/introduction" color="blue">Expose</OutLink> &amp; <OutLink href="https://laravelplayground.com/" color="blue">Laravel Playground</OutLink></Subtitle>
                    <Paragraph><OutLink href="https://twitter.com/marcelpociot" color="blue">Marcel Pociot</OutLink> was productive in the last couple of months and created <OutLink href="https://beyondco.de/docs/expose/introduction" color="blue">Expose</OutLink>, free open-source tunneling service (ngrok alternative) written in pure PHP. It allows you to share your local websites with others via the internet.</Paragraph>
                    <Paragraph>He also created <OutLink href="https://laravelplayground.com/" color="blue">Laravel Playground</OutLink> - a free-to-use service that allows you to try out Laravel code (and all its features) directly in your browser.</Paragraph>
                    <Paragraph>I greatly admire people who can create and deliver products in such rapid succession. I'd be happy with myself if I was able to create and release one of my side projects. This is why this year I'm trying to work on smaller projects and tools and get my self in "release" state of mind.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/" color="green">Tailwind CSS: From Side-Project Byproduct to Multi-Million Dollar Business</OutLink></Subtitle>
                    <Paragraph>Learn how <OutLink href="https://twitter.com/adamwathan" color="green">Adam Wathan</OutLink> created Tailwind CSS and turned a helper library from his graveyard side projects into a multi-million dollar business. Succinct but inspiring as you never know where your possibility to make a "dent in the universe" lays :-)</Paragraph>
                    <Paragraph>And while we're talking about Tailwind CSS - they recently released a plugin (called <OutLink href="https://github.com/tailwindlabs/tailwindcss-typography" color="green">Tailwind Typography</OutLink>) that provides typographic styling for vanilla HTML you don't control (like from a markdown or a CMS). A lot of users were complaining that Tailwind CSS was hard to use for CMS content (to me it was the only downside to it) and now they've addressed it, and they've fixed it pretty elegantly if I may say so.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://blog.bitsrc.io/features-of-javascript-you-probably-never-used-4c117ba3f025" color="yellow">11+ JavaScript Features You’ve Probably Never Used</OutLink></Subtitle>
                    <Paragraph>Although I'm not a JavaScript developer, the title seems like a clickbait but my curiosity got better of me 🤨 There really are a few features that I've never heard or used before which seems useful and will definitely come in handy. Did you hear or used all of them?</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://github.com/bvaughn/react-error-boundary" color="red">Simple reusable React error boundary component</OutLink></Subtitle>
                    <Paragraph>As the title says it is a simple React error boundary component that can be used to handle all errors thrown during React's lifecycles. Plus it has a pretty nifty helper function for handling async errors. What are the error boundaries I hear you ask? Well, take a look at this <OutLink href="https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react" color="red">Kent C. Dodds article</OutLink> for in detail explanation.</Paragraph>

                    <Divider />

                    <Paragraph>You're already halfway through. Did you click on any of the OutLinks or are you just skimming through? :-) I'll know if you did!</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://www.reddit.com/r/Entrepreneur/comments/hrkctu/in_the_last_two_years_i_read_a_library_of/" color="blue">In the last two years, I read a library of copywriting and content marketing books. Here are my 15 takeaways to write better and faster.</OutLink></Subtitle>
                    <Paragraph>Cool article with a lot of amazing tips for writing. I already included some of the tips in this volume. Can you guess which I've used? :-) <OutLink href="http://www.hemingwayapp.com/" color="blue">Hemingway App</OutLink> (suggested here) is amazing as well - it calculates your text readability and suggests how to make it more so.</Paragraph>
                    <Paragraph>It even suggests replacing some more complicated words with their easier to understand replacements. This is strange because in my writing I wanted to expand my vocabulary and used a wider range of words to appear more knowledgeable - when in doing so I might have turned off some non-native speakers (one of the tips from the article ;-)).</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://www.campaignmonitor.com/blog/email-marketing/2020/07/basecamps-hey-what-you-need-to-know/" color="green">Will Basecamp’s HEY Change Email Marketing Forever?</OutLink></Subtitle>
                    <Paragraph>Overview of how email marketing might change due to Basecamp's HEY email service provider and their screening and non-tracking features. This article provides advice and tips on how to approach these new trends and how to adjust your marketing emails.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://calebporzio.com/i-just-hit-dollar-100000yr-on-github-sponsors-heres-how-i-did-it" color="yellow">I Just Hit $100k/yr On GitHub Sponsors! 🎉❤️ (How I Did It)</OutLink></Subtitle>
                    <Paragraph>Story of how <OutLink href="https://twitter.com/calebporzio/" color="yellow">Caleb Porzio</OutLink> (whose products I've mentioned several times in the last few of the Interesting Reads volumes) got to over $100K on GitHub Sponsors. Besides navigating through the story of how that came to be, he also gives us "nuggets" he picked along the way and some of them might be helpful for just about anybody.</Paragraph>
                    <Paragraph>Caleb is extremely productive lately (<OutLink href="https://laravel-livewire.com/" color="yellow">Laravel Livewire</OutLink>, <OutLink href="https://github.com/alpinejs/alpine" color="yellow">AlpineJs</OutLink>, and <OutLink href="https://github.com/calebporzio/sushi" color="yellow">Sushi</OutLink> to name a few of my favorites) and his success story is an inspiration for how to be (financially) successful when creating open-source software without resorting to creating a SaaS product.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://bulletjournal.com/pages/learn" color="red">The Bullet Journal System</OutLink></Subtitle>
                    <Paragraph>Excellent system for rapid logging that I've started using lately. It relies on just a few concepts but it is pretty powerful.</Paragraph>
                    <Paragraph>It uses bullets paired with different visual symbols (●, ○, and -) to categorize your data entries into tasks, events, or notes.</Paragraph>

                    <Divider />

                    <Subtitle><OutLink href="https://www.mrlacey.com/2020/07/youve-only-added-two-lines-why-did-that.html" color="blue">You've only added two lines - why did that take two days!</OutLink></Subtitle>
                    <Paragraph>A list of great explanations why the number of lines of code does not tell anything about effort, value, or quality of work that was done. I've used almost all of the reasons listed here at one time in my career.</Paragraph>

                    <Divider />

                    <Paragraph>Once more we've come to an end of another volume. This one is the first one I publish on my personal website as I try to move away from Medium.</Paragraph>
                    <Paragraph>If you've found any of the links useful please share.</Paragraph>
                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <a className="inline-block p-6 text-e6n-black focus:outline-none cursor-not-allowed">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                    </a>
                    <Link to="/article/writing-year-in-review-article/" className="inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default InterestingReadsVolume13Page;


