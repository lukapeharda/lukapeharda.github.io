import React from "react";
import { Link } from "gatsby";
import Highlight from 'react-highlight';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, TweetLink, OutLink } from "../../components/partials/article";

function Wrapping3rdPartyServiceCalls() {
    return (
        <Layout>
            <SEO
                title="Why wrapping 3rd-party calls to external services is always a good idea | by Luka Peharda"
                keywords={['refactoring', 'php', 'wrapping', 'api', 'external', 'facade', 'design', 'pattern', 'luka', 'peharda']}
                description="When using a 3rd-party package that makes calls (or API requests) to an external service it is always a good idea to wrap 3rd-party service with a thin wrapper (Facade)."
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">Why wrapping 3rd-party calls to external services is always a good idea</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-03-31").toDateString() }</div>

                    <Paragraph>When using a 3rd-party package that makes calls (or API requests) to an external service it is always a good idea to wrap 3rd-party service with a thin wrapper (Facade). Why?</Paragraph>
                    <Paragraph>Wrapping it avoids vendor lock-in and tight coupling. Imagine that the API the 3rd-party is using stops working. Now you need to change service calls across your whole project. If wrapped, you only need to modify your code once.</Paragraph>
                    <Paragraph>Another reason is that you can then build and setup the 3rd-party service (or the client) according to your requirements.</Paragraph>
                    <Paragraph>Let me give you an example:</Paragraph>

                    <Highlight className="language-php my-6">
                        {
`...

use Kourses\\Website;
use Mpociot\\VatCalculator\\VatCalculator;

...

class VatHelper
{
    protected $calculator;

    public function __construct(Website $website)
    {
        $calculator = new VatCalculator();
        $calculator->setBusinessCountryCode($website->user->country);

        $this->calculator = $calculator;
    }

    ...
}`
                        }
                    </Highlight>

                    <Paragraph>In my project, I'm using <code className="hljs-literal">driesvints/vat-calculator</code> package to calculate VAT (value-added tax) rate and to validate the EU VAT number. EU VAT number validation is being done by calling an external API.</Paragraph>
                    <Paragraph>As VAT rate calculation needs to take into account your business location, I need to provide the business country code when setting up the calculator. As a product I'm working on is a SaaS, I need to specify this param on each request and can't do it through configuration files (which this package supports). So I'm "building" up the VatCalculator according to my requirements.</Paragraph>
                    <Paragraph>If I did not wrap this service, I would have to configure it each time I call it. Not a big deal I know, but this is a simple example.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>Besides doing a simple "wrapping" I've added a couple of methods that slightly modify 3rd-party service behavior.</Paragraph>

                    <Highlight className="language-php my-6">
                        {
`...

use Kourses\Member;
use Kourses\Errors\VatValidationException;

use Exception;

class VatHelper
{
    ...

    public function isValidVatId(string $vatNumber): bool
    {
        try {
            return $this->calculator->isValidVATNumber($vatNumber);
        } catch (Exception $exception) {
            throw new VatValidationException("VAT validation failed.", 500);
        }
    }

    public function getTaxRate(string $countryCode, string $postalCode = null, string $vatNumber = null): float
    {
        $isCompany = $this->isValidVatId($vatNumber);

        return $this->calculator->getTaxRateForLocation($countryCode, $postalCode, $isCompany);
    }

    public function getTaxRateForMember(Member $member): float
    {
        return $this->getTaxRate($member->country, $member->zip, $member->vat_id);
    }
}`
                        }
                    </Highlight>

                    <Paragraph>In method <code className="hljs-literal">isValidVatId</code> I'm catching a 3rd-party service exception and re-throwing it using a message (and code) that is in sync with my app. Now I don't need to catch 3rd-party package exceptions in my controllers.</Paragraph>
                    <Paragraph>If I decide to change this 3rd-party package I wouldn't have to go through my code and change all mentions of this package.</Paragraph>
                    <Paragraph>In <code className="hljs-literal">getTaxRate</code> method, I've also slightly altered behavior which suits my flow better. I'm validating the VAT number before getting the tax rate for the user's location (as it is dependent on your business location as well as your customers' location).</Paragraph>
                    <Paragraph>Method <code className="hljs-literal">getTaxRateForMember</code> is a simple helper which allows me to easily pass my <code className="hljs-literal">$member</code> object and get its current VAT rate without needing to "spread" required params.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>Using this technique you could easily implement caching in front of external service calls if need be. Here, as the VAT number checked should be different each time I'm not doing that.</Paragraph>
                    <Paragraph>This wrapper borrows from a Facade design pattern, a Proxy, and even a Decorator. If you wish to learn more about design patterns be sure to check out <OutLink href="https://www.mrlacey.com/2020/07/youve-only-added-two-lines-why-did-that.html" color="red">https://refactoring.guru/design-patterns</OutLink> as they have a nice overview of basic patterns as well as real-world examples.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `Why wrapping 3rd-party calls to external services is always a good idea on https://lukapeharda.com/article/why-wrapping-3rd-party-calls-to-external-service-is-always-a-good-idea by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>
                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/refactoring-optional-method-params/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="How to Refactor a Method With Optional Params">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                    </Link>
                    <Link to="/article/how-to-generate-a-full-Tailwind-CSS-palette-from-a-single-color/" className="inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none" title="How to generate a full Tailwind CSS palette from a single color">
                        <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default Wrapping3rdPartyServiceCalls;
