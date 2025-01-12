// Libraries.

import React from 'react';

// Dependencies.

import { S_NO_KEY, PLEDGED_KEY, PERCENTAGE_KEY, PROJECTS_PER_PAGE } from '../constants';

// Public.

/**
 * @param {Object} [props] Properties.
 * @param {Array} props.projects List of projects.
 * @param {Number} props.currentPage Current page number.
 * @function ProjectsTable
 * @description Creates a component for a table of projects.
 * @returns {JSX.Element} JSX for the projects table.
 */
const ProjectsTable = ({ projects, currentPage }) => {
  const lastProject = currentPage * PROJECTS_PER_PAGE;
  const firstProject = lastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(firstProject, lastProject);

  return (
    <table>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
            </tr>
        </thead>
        <tbody>
            {currentProjects.map((project) => (
                <tr key={project[S_NO_KEY]}>
                <td>{project[S_NO_KEY]}</td>
                <td>{project[PLEDGED_KEY]}</td>
                <td>{project[PERCENTAGE_KEY]}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default ProjectsTable;