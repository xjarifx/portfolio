import { useState } from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, Card } from "../ui";
import { ThemePropType } from "../../types";

const projectShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })),
});

const ProjectItem = ({ project, theme }) => (
  <li className={theme.spacing.itemGap}>
    <Card>
      <div className="z-10">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className={`leading-tight font-medium ${theme.colors.textPrimary} text-lg`}>
            {project.title}
          </h3>
          {project.links?.length > 0 && (
            <div className="flex gap-2">
              {project.links.map((link, i) => (
                <ExternalLink
                  key={i}
                  href={link.url}
                  label={`${link.label} for ${project.title}`}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          )}
        </div>
        {project.description && (
          <p className={`mt-1 text-sm ${theme.colors.text}`}>
            {project.description}
          </p>
        )}
      </div>
    </Card>
  </li>
);

ProjectItem.propTypes = { project: projectShape.isRequired, theme: ThemePropType.isRequired };

export const ProjectSection = ({ items, moreItems, theme }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="group/list">
        {items.map((project, i) => (
          <ProjectItem key={i} project={project} theme={theme} />
        ))}
      </ul>

      {moreItems?.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className={`text-sm font-medium ${theme.colors.accent} hover:underline flex items-center gap-1 transition-colors`}
            aria-expanded={open}
          >
            {open ? 'Hide' : 'More Projects'}
            <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>↓</span>
          </button>

          {open && (
            <ul className="group/list mt-2">
              {moreItems.map((project, i) => (
                <ProjectItem key={i} project={project} theme={theme} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

ProjectSection.propTypes = {
  items: PropTypes.arrayOf(projectShape).isRequired,
  moreItems: PropTypes.arrayOf(projectShape),
  theme: ThemePropType.isRequired,
};
