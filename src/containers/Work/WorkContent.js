import React from 'react';
import project1 from '../../../static/img/projects/project1.png';

const WorkContent = () => (
  <main id="work">
    <h1 className="lg-heading">
      My
      {' '}
      <span className="text-secondary">Work</span>
    </h1>

    <h2 className="sm-heading">
      Some of the projects I&apos;ve worked on.
    </h2>

    <div className="projects">
      <div className="item">
        <a href="/daycare">
          <img src={project1} alt="Screenshot of a daycare website" />
        </a>
        <a href="/daycare" className="btn-light" aria-label="Link to Caring Child Daycare">
          <i className="fas fa-eye" />
          &nbsp;
          Caring Child Daycare
        </a>
        <a
          href="https://github.com/coding-for-llamas/caring-child-daycare"
          className="btn-dark"
          aria-label="Link to Caring Child Daycare Github Page"
        >
          <i className="fab fa-github" />
          &nbsp;
          Github
        </a>
      </div>
    </div>
  </main>
);

export default WorkContent;