import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/projects";

function ProjectsPage() {
    return (
        <Layout>
            <SEO
                title="Projects"
                keywords={['luka', 'peharda', 'lukapeharda', 'projects', 'photile', 'photile.co']}
            />

            <Projects />
        </Layout>
    );
}

export default ProjectsPage;
