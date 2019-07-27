import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/projects";
import photileImage from "../images/photile-1.jpg";

function ProjectsPage() {
    const projects = [{
        id: 'photile',
        title: 'Photile.co',
        url: 'https://photile.co',
        description: "The point is... to live one's life in the full complexity of what one is, which is something much darker, more contradictory, more of a maelstrom of impulses and passions, of cruelty, ecstacy, and madness, than is apparent to the civilized being who glides on the surface and fits smoothly into the world.",
        image: photileImage,
        technologies: ['go', 'react', 'redux', 'serverless', 'now.sh'],
        color: 'red',
        hoverColor: 'blue',
    }, {
        id: 'konstruo',
        title: 'Konstruo',
        url: 'https://konstruo.online',
        description: "The point is... to live one's life in the full complexity of what one is, which is something much darker, more contradictory, more of a maelstrom of impulses and passions, of cruelty, ecstacy, and madness, than is apparent to the civilized being who glides on the surface and fits smoothly into the world.",
        image: '/images/photile-1.jpg',
        technologies: ['php', 'laravel', 'vuejs'],
        color: 'blue',
        hoverColor: 'green',
    }];

    return (
        <Layout>
            <SEO
                title="Projects"
                keywords={['luka', 'peharda', 'lukapeharda', 'projects', 'photile', 'photile.co']}
            />

            <Projects projects={ projects } />
        </Layout>
    );
}

export default ProjectsPage;
