import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

function ProjectsListPage() {
    return (
        <Layout>
            <SEO
                title="Past, failed and on-going projects"
                keywords={['luka', 'peharda', 'lukapeharda', 'lukapeharda.com', 'projects', 'on-going', 'past', 'failed']}
            />

            <div className="w-full xl:w-1/2 md:w-2/3 p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
                <h1 className="text-white light-mode:text-gray-800 text-4xl italic mb-4">Past, <span className="text-e6n-red">failed</span> and on-going projects</h1>
                <p className="text-white light-mode:text-gray-800 text-xl">List of all my past and on-going projects with updated stats. Inspired by <OutboundLink href="https://joshpigford.com/projects" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">https://joshpigford.com/projects</OutboundLink>.</p>
                <p className="text-white light-mode:text-gray-800 text-xl">I believe it is very important to show your failures and admit your mistakes. So here are few of mine :)</p>
            </div>
            <div className="w-full p-4 md:p-8 text-content bg-e6n-black light-mode:bg-white">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Name</th>
                            <th className="pl-2 text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Year</th>
                            <th className="pl-2 text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red hidden md:table-cell">Description</th>
                            <th className="text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-white light-mode:text-gray-800 text-left py-2">Garbage App</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2">2016.</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2 hidden md:table-cell">App for reporting illegal garbage dumps while hiking or cycling</td>
                            <td className="pt-2"><span className="text-white text-sm px-2 py-1 bg-e6n-red inline-block">Dead</span></td>
                        </tr>
                        <tr>
                            <td className="text-white light-mode:text-gray-800 text-left py-2">Konstruo</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2">2016.</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2 hidden md:table-cell">SaaS for managing resources in a small construction companies</td>
                            <td className="pt-2"><span className="text-white text-sm px-2 py-1 bg-e6n-red inline-block">Dead</span></td>
                        </tr>
                        <tr>
                            <td className="text-white light-mode:text-gray-800 text-left py-2">
                                <OutboundLink href="https://photile.co/" className="border-b border-e6n-blue hover:bg-e6n-blue" target="_blank">Photile</OutboundLink>
                            </td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2">2017.</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2 hidden md:table-cell">Web app for creating photo collages from your Instagram photos quickly and easily</td>
                            <td className="pt-2"><span className="text-white text-sm px-2 py-1 bg-e6n-blue inline-block">Active</span></td>
                        </tr>
                        <tr>
                            <td className="text-white light-mode:text-gray-800 text-left py-2">
                                <OutboundLink href="https://tinywins.today/" className="border-b border-e6n-yellow hover:bg-e6n-yellow whitespace-no-wrap" target="_blank">Tiny Wins</OutboundLink>
                            </td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2">2020.</td>
                            <td className="pl-2 text-white light-mode:text-gray-800 text-left py-2 hidden md:table-cell">Web app for tracking your habits and wins no matter how small. Get inspired by other users and their wins!</td>
                            <td className="pt-2">
                                <span className="text-white text-sm px-2 py-1 bg-e6n-yellow inline-block">Active development</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default ProjectsListPage;