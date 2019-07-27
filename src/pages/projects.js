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
        description: "Photile is a web app providing registered Instagram users means for generating photo grid (tile, mosaic) from their own photos.",
        image: photileImage,
        technologies: ['go', 'react', 'redux', 'serverless', 'now.sh'],
        color: 'red',
        hoverColor: 'blue',
    }, {
        id: 'konstruo',
        title: 'Konstruo',
        url: 'https://konstruo.online',
        description: "Construction Resource Management SaaS",
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
