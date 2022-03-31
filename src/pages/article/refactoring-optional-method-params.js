import React from "react";
import { Link } from "gatsby";
import Highlight from 'react-highlight';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Bold, Divider, TweetLink } from "../../components/partials/article";

function RefactoringOptionalMethodParams() {
    return (
        <Layout>
            <SEO
                title="How to Refactor a Method With Optional Params"
                keywords={['refactoring', 'php', ]}
                description="While refactoring and optimising legacy code I've ran into a method signature inconsistency which caused performance issues and was being done without developer intention."
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">How to Refactor a Method With Optional Params</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-02-25").toDateString() }</div>

                    <Paragraph>While refactoring and optimising legacy code I've ran into a method signature (optional parameters) inconsistency which caused performance issues as part of the expensive operation was being done without developer intention.</Paragraph>

                    <Highlight className="language-php my-6">
                        {
`class PageRepository
{
    ...
    public function find($pageId, $prerender = false)
    {
        ...
        if ($prerender === true) {
            $page->prerender();
        }
        ...
        return $page;
    }

    public function findOrFail($pageId, $prerender = true)
    {
        $page = $this->find($pageId, $prerender);

        if ($page === null) {
            throw new Exception("Page $pageId not found.");
        }

        return $page
    }
    ...
}`
                        }
                    </Highlight>

                    <Paragraph>Our <code className="hljs-literal">PageRepository::find</code> method had an optional parameter called <code className="hljs-literal">$prerender</code> which was set to <code className="hljs-literal">false</code> by default. The problem is that the method <code className="hljs-literal">PageRepository::findOrFail</code> has the same optional parameter but its default value set to <code className="hljs-literal">true</code>! </Paragraph>

                    <Divider></Divider>

                    <Paragraph>If you're not careful reading method signature and default param values you can easily make a mistake and <Bold>prerender</Bold> a page (which is an expensive operation) without wanting or needing it.</Paragraph>
                    <Paragraph>Methods with optional <Bold>flag</Bold> parameters can potentially be dangerous and can be hard to glance at.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>There are a couple of things that can be done here in order for it to be better and more readable.</Paragraph>

                    <Divider></Divider>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4"><span className="text-e6n-red text-white mr-4">1.</span> Change optional parameter default values to the same value</h2>
                    <Paragraph>This one is a no brainer. Just change the <code className="hljs-literal">PageRepository::findOrFail</code> optional <code className="hljs-literal">$prerender</code> default value to <code className="hljs-literal">false</code> (or vice-versa). </Paragraph>

                    <Divider></Divider>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4"><span className="text-e6n-yellow text-white mr-4">2.</span> Specify optional param value</h2>
                    <Paragraph>Just specify a value explicitly so anyone reading your code (even you a couple of months in the future) will know that you’ve set it and used it intentionally.</Paragraph>
                    <Highlight className="language-php my-6">
                        {
`$pageRepository = new PageRepository();

$page = $pageRepository->find($pageId, false);`
                        }
                    </Highlight>
                    <Paragraph>Or even better, use the variable with a semantic meaning when calling the method.</Paragraph>
                    <Highlight className="language-php my-6">
                        {
`$pageRepository = new PageRepository();

$page = $pageRepository->find($pageId, $prerender = false);`
                        }
                    </Highlight>
                    <Paragraph><em className="text-gray-500">I know that some linters or IDEs may highlight the <code className="hljs-literal">$prerender</code> param but there are several ways to deal with it and I'm leaving it at your discretion to chose a way how to handle it.</em></Paragraph>

                    <Divider></Divider>

                    <h2 className="text-white light-mode:text-gray-800 text-2xl italic mt-8 mb-4"><span className="text-e6n-green text-white mr-4">3.</span> Refactor the method with optional flag parameter into two distinct methods</h2>
                    <Paragraph>Remove the <code className="hljs-literal">$page-&gt;prerender()</code> call from the <code className="hljs-literal">PageRepository::find</code> method and extract it to a separate <code className="hljs-literal">PageRepository::findAndPrerender</code> method.</Paragraph>

                    <Highlight className="language-php my-6">
                        {
`class PageRepository
{
    ...
    public function find($pageId, $prerender = false)
    {
        ...
        if ($prerender === true) {
            $page->prerender();
        }
        ...

        return $page;
    }

    public function findAndPrerender($pageId)
    {
        $page = $this->find($pageId, $prerender);

        if ($page === null) {
            throw new Exception("Page $pageId not found.");
        }

        return $page;
    }
    ...
}`
}
</Highlight>

                    <Paragraph>This way you have to make an intentional effort to chose which functionality (or rather which side-effect) you require.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>This was just a quick refactoring tip which I'm usually <span className="line-through">enforcing</span> suggesting while doing code reviews in order to make code easily understandable and to avoid confusion.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `Refactoring Optional Method Params on https://lukapeharda.com/article/refactoring-optional-method-params by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>
                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/write-before-you-think/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="Write Before You Think">
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

export default RefactoringOptionalMethodParams;
