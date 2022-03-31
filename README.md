# lukapeharda.com

Personal website of Luka Peharda built using [Gatsby][1] and based on [Gatsby Starter Tailwind][2].

## What is Gatsby?
>"Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps."
-[Gatsby][1]

## What is Tailwind?
>"Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
-[Tailwind][3]

## Get started

Install Gatsby CLI:

```
npm i --global gatsby-cli
```

Install all dependencies:

```
npm install
```

Build stylesheet from Tailwind config and run the project in development mode:

```
npm run develop
```

## Build your site
Use `npm run build` to build your site for production.

## Deploy to Github
Run `npm run deploy` and it will run `gatsby build && gh-pages -d public -b master`.

[1]: https://www.gatsbyjs.org/
[2]: https://github.com/oddstronaut/gatsby-starter-tailwind
[3]: https://tailwindcss.com

## Using `docker compose`

First run `docker compose up -d --build web`.
Then `docker compose run --rm web` after which you should be able to see your website on http://localhost:8000

To deploy it run `docker compose run --rm web bash` and in it `npm run deploy` after which you'll be prompted for GitHub username and password.
