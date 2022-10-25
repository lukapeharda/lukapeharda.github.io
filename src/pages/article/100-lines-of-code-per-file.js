import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, TweetLink } from "../../components/partials/article";

function HundredLinesOfCodePerFile() {
    return (
        <Layout>
            <SEO
                title="100 lines of code per file | by Luka Peharda"
                keywords={['100', 'refactoring', 'code', 'lines', 'luka', 'peharda']}
                description="It has gotten to my attention that one of the biggest dev companies in the region has a pull-request requirement that checks whether each file committed is under 100 lines long. It seems like a pretty stupid requirement, right?"
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">100 lines of code per file</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-10-25").toDateString() }</div>

                    <Paragraph>It has gotten to my attention that one of the biggest dev companies in the region has a pull-request requirement that checks whether each file committed is under 100 lines long.</Paragraph>
                    <Paragraph>It seems like a pretty stupid requirement, right?</Paragraph>
                    <Paragraph><em>Then I tried it.</em></Paragraph>

                    <Divider></Divider>

                    <Paragraph>I had a class that was 133 lines long and I want to see whether I can get it under 100. As the class was already "doing one thing" it didn't make sense to refactor it and split it into two files.</Paragraph>
                    <Paragraph>First to go were the comments 😀 Method docblocks were replaced with proper type declarations and return types. To preserve the readability, variable and method names had to be changed to be self-explanatory although a bit longer. Conditionals were extracted into separate methods.</Paragraph>
                    <Paragraph>Multiple simple <em>IFs</em> were combined into one, which did hurt readability a bit but it saved 5 lines 😀</Paragraph>
                    <Paragraph>Somewhat duplicated code was extracted and parametrized which allowed me to reuse methods in several locations.</Paragraph>
                    <Paragraph>And I got to 99 lines 🚀</Paragraph>

                    <Divider></Divider>

                    <Paragraph>I was skeptical about this requirement when I started but now I see its benefits. It makes you think about your code a bit more and forces you to make it more readable while also removing clutter from your files. And as strange as this may sound, it was fun doing it 😆</Paragraph>

                    <Divider></Divider>

                   <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `100 lines of code per file on https://lukapeharda.com/article/100-lines-of-code-per-file/ by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>

                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/unexpected-benefits-of-estimations/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="Unexpected benefits of estimations">
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

export default HundredLinesOfCodePerFile;
