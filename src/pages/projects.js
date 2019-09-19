import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/projects";
import photileImage from "../images/photile-1.jpg";
// import konstruoImage from "../images/konstruo-screens-1.png";
import konstruoImage from "../images/konstruo-web-1.png";

function ProjectsPage() {
    const projects = [{
        id: 'photile',
        title: 'Photile.co',
        url: 'https://photile.co',
        description: "<p>Photile is a web app providing registered Instagram users means for generating photo grid (tile, mosaic) from their own photos.</p><p>Select number of rows, columns and filter out unwanted photos.</p>",
        image: photileImage,
        technologies: ['go', 'react', 'redux', 'serverless', 'now.sh'],
        color: 'red',
        hoverColor: 'blue',
    }, {
        id: 'konstruo',
        title: 'Konstruo',
        url: 'https://konstruo.online',
        description: '<p>Construction Resource Management SaaS</p><p>Manage workers, their timesheets, vacation and medical leave days. Manage construction sites, its photos and contacts.</p><p>Manage expenses, receipts, suppliers and rented out tools and equipment. Create quotes and invoices.</p>',
        image: konstruoImage,
        technologies: ['php', 'laravel', 'vuejs', 'saas'],
        color: 'green',
        hoverColor: 'blue',
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
