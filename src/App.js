// Libraries.

import React, { useState } from 'react';

// Dependencies.

import PageNavigation from './components/PageNavigation';
import useProjectData from './hooks/useProjectData';
import ProjectsTable from './components/ProjectsTable';
import { PROJECTS_PER_PAGE } from './constants';
import '../src/App.css'

// Public.

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects] = useProjectData();

  const totalProjects = projects.length;
  const numberOfPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

  const updatePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Kickstarter Projects</h1>
      <ProjectsTable projects={projects} currentPage={currentPage} />
      <PageNavigation
        currentPage={currentPage}
        updatePage={updatePage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default App;
