import React from "react";
import { Link } from "gatsby";
import Highlight from 'react-highlight';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Paragraph, Divider, TweetLink, OutLink, Subtitle } from "../../components/partials/article";

function GenerateTailwindCSSColorPalette() {
    return (
        <Layout>
            <SEO
                title="How to generate a full Tailwind CSS palette from a single color | by Luka Peharda"
                keywords={['tailwind', 'css', 'color', 'palette', 'generate', 'luka', 'peharda']}
                description="Learn how to generate Tailwind CSS color palette from a single user selected base color easily"
            />

            <div className="relative h-full w-full bg-e6n-black light-mode:bg-white">
                <div className="xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content mb-24 md:mb-0">
                    <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-0">How to generate a full Tailwind CSS palette from a single color</h1>
                    <div className="text-gray-500 light-mode:text-gray-800 text-xs mb-4">{ new Date("2022-04-27").toDateString() }</div>

                    <Paragraph>
                        You have an app where you allow users to select their brand color in order to style their website. Naturally, you use different shades of the color in your design - in some places you use ligher ones, and in other darker ones.
                    </Paragraph>

                    <Paragraph>
                        There are a lot of color generators and app that generate Tailwind CSS color palette for you. Here are some of my favorites:
                    </Paragraph>

                    <Paragraph>
                        <ul className="list-disc pl-4">
                            <li className="pb-4"><OutLink color="green" href="https://uicolors.app/create">Create Tailwind CSS color families</OutLink></li>
                            <li className="pb-4"><OutLink color="yellow" href="https://colorbox.io/">ColorBox</OutLink></li>
                            <li className="pb-4"><OutLink color="blue" href="https://tailwindcss.com/docs/customizing-colors#generating-colors">Generating Colors (from Tailwind CSS docs)</OutLink></li>
                        </ul>
                    </Paragraph>

                    <Divider></Divider>

                    <Paragraph>
                        Problem is, you want to have a simple UI and the thought of forcing users to select all possible shades gives you a headache.
                    </Paragraph>

                    <Divider></Divider>

                    <Subtitle>Solution 1. "Opacity"</Subtitle>

                    <Paragraph>Official <OutLink color="red" href="https://www.youtube.com/watch?v=MAtaT8BZEAo">theming video from Tailwind CSS</OutLink> suggests adding a single (<em>brand</em>) color and then modify opacity (either text opacity or background opacity) to have lighter shades of your color.</Paragraph>

                    <Highlight className="language-html my-6">
{
`<h1 class="text-brand text-opacity-75">Howdy</h1>`
}
                    </Highlight>

                    <Paragraph>Under the hood Tailwind CSS uses CSS variables to modify alpha channel of the color (<em>A in RGBA color model</em>) which is pretty smart. Please watch the above YouTube video to see more detailed explanation but the gist of it is this:</Paragraph>

                    <Highlight className="language-css my-6">
{
`.text-brand {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 0, --tw-text-opacity);
}`
}
                    </Highlight>

                    <Paragraph>This is fine and dandy but what to do when you want to have darker colors as well? You could start with a darker color and have a greater range. Can you tell your users to select "darker" color? No. You can't. You shouldn't.</Paragraph>

                    <Divider></Divider>

                    <Subtitle>Solution 2. "HSL"</Subtitle>

                    <Paragraph>For this reason I've been playing with <em>HSL</em> color model (<em>where H stands for hue, S for saturation and L for lightness</em>). By changing the <em>L</em> values (lightness) of a base color I was able to get OK looking palette for the whole range - both lighter and darker.</Paragraph>

                    <Paragraph>I've written a PHP package called <OutLink color="green" href="https://github.com/lukapeharda/tailwindcss-color-palette-generator">Tailwind CSS Color Palette Generator</OutLink> to use exactly this to generate a full palette.</Paragraph>

                    <Paragraph>It is easy to generate a palette by specifying your base color:</Paragraph>

                    <Highlight className="language-php my-6">
{
`use LukaPeharda\\TailwindCssColorPaletteGenerator\\Color;
use LukaPeharda\\TailwindCssColorPaletteGenerator\\PaletteGenerator;

// Create base color from hex
$baseColor = Color::fromHex('#ffff00');

// or from RGB
$baseColor = Color::fromRgb(255, 255, 0);

// or from HSL
$baseColor = Color::fromHsl(60, 100, 50);

// Generate a palette
$paletteGenerator = new PaletteGenerator;
$paletteGenerator->setBaseColor($baseColor);
$palette = $paletteGenerator->getPalette();`
}
                    </Highlight>

                    <Paragraph>Generated <code className="hljs-literal">$palette</code> will be an array where keys are Tailwind CSS color steps and values <code className="hljs-literal">Color</code> objects:</Paragraph>
                    <Highlight className="language-php my-6">
{
`$palette = [
    50 => Color,
    100 => Color,
    200 => Color,
    300 => Color,
    ...
];`
}
                    </Highlight>

                    <Paragraph>You can then loop over it to generate CSS variables or use it anyway you see fit:</Paragraph>
                    <Highlight className="language-php my-6">
{
`foreach ($palette as $key => $color) {
    echo '--color-brand-' . $key . ': #' . $color->getHex() . ';';
}`
}
                    </Highlight>

                    <Paragraph>Extend color settings in your <code className="hljs-literal">tailwind.config.js</code> file and add <code className="hljs-literal">brand</code> color palette:</Paragraph>
                    <Highlight className="language-js my-6">
{
`module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: 'var(--color-brand-50, #F5F3FF)',
                    100: 'var(--color-brand-100, #EDE9FE)',
                    200: 'var(--color-brand-200, #DDD6FE)',
                    300: 'var(--color-brand-300, #C4B5FD)',
                    400: 'var(--color-brand-400, #A78BFA)',
                    500: 'var(--color-brand-500, #8B5CF6)',
                    600: 'var(--color-brand-600, #7C3AED)',
                    700: 'var(--color-brand-700, #6D28D9)',
                    800: 'var(--color-brand-800, #5B21B6)',
                    900: 'var(--color-brand-900, #4C1D95)',
                }
            }
        }
    }
}`
}
                    </Highlight>

                    <Paragraph>Afterwards you can use your color as regular CSS Tailwind class, for example as <code className="hljs-literal">text-brand-100</code> or <code className="hljs-literal">bg-brand-300</code>.</Paragraph>
                    <Paragraph>Documentation and settings for fine tunning can be found <OutLink color="yellow" href="https://github.com/lukapeharda/tailwindcss-color-palette-generator">here</OutLink>.</Paragraph>

                    <Divider></Divider>

                    <Paragraph>Generated palettes are not as great as the ones from the official Tailwind CSS color palettes but hey, those were carefully hand picked.</Paragraph>

                    <Paragraph>
                        If you like this article consider <TweetLink className="border-b border-e6n-blue hover:bg-e6n-blue" text={ `How to generate a full Tailwind CSS palette from a single color on https://lukapeharda.com/article/how-to-generate-a-full-Tailwind-CSS-palette-from-a-single-color/ by @lukapeharda` }>tweeting</TweetLink> or check out my other <Link to="/articles" className="border-b border-e6n-red hover:bg-e6n-red">articles</Link>.
                    </Paragraph>
                </div>
                <div className="absolute bg-white flex justify-around bottom-0 right-0">
                    <Link to="/article/why-wrapping-3rd-party-calls-to-external-service-is-always-a-good-idea/" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" title="Why wrapping 3rd-party calls to external services is always a good idea">
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

export default GenerateTailwindCSSColorPalette;