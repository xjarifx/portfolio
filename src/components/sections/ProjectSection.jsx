import PropTypes from 'prop-types';
import { Badge, ExternalLink, Card } from "../ui";
import { ProjectPropType, ThemePropType } from "../../types";

/**
 * ProjectItem component
 * Renders individual project card
 */
const ProjectItem = ({ project, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <Card>
        {project.image && (
          <div className="z-10">
            <img
              alt={`${project.title} screenshot`}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              className="rounded border border-gray-200 bg-white transition group-hover:border-gray-300"
              src={project.image}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
        <div className="z-10">
          <h3
            className={`leading-tight font-medium ${theme.colors.textPrimary} text-base`}
          >
            {project.title}
          </h3>
          <p className={`${theme.spacing.contentGap} text-sm leading-normal`}>
            {project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <ul
              className={`${theme.spacing.contentGap} text-xs ${theme.colors.text}`}
            >
              {project.highlights.map((highlight, hlIndex) => (
                <li key={hlIndex} className="mb-1">
                  • {highlight}
                </li>
              ))}
            </ul>
          )}
          {project.links && project.links.length > 0 && (
            <div className={`${theme.spacing.contentGap} flex flex-wrap gap-2`}>
              {project.links.map((link, linkIndex) => (
                <ExternalLink
                  key={`${project.title}-link-${linkIndex}`}
                  href={link.url}
                  label={`${link.label} for ${project.title}`}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          )}
          <ul
            className={`${theme.spacing.contentGap} flex flex-wrap`}
            aria-label="Technologies used"
          >
            {project.techStack.map((tech, techIndex) => (
              <li
                key={`${project.title}-tech-${techIndex}`}
                className="mt-2 mr-1.5"
              >
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </li>
  );
};

ProjectItem.propTypes = {
  project: ProjectPropType.isRequired,
  theme: ThemePropType.isRequired,
};

/**
 * ProjectSection component
 * Renders list of projects
 */
export const ProjectSection = ({ items, theme }) => {
  return (
    <div>
      <ul className="group/list">
        {items.map((project, index) => (
          <ProjectItem
            key={`project-${index}`}
            project={project}
            theme={theme}
          />
        ))}
      </ul>
    </div>
  );
};

ProjectSection.propTypes = {
  items: PropTypes.arrayOf(ProjectPropType).isRequired,
  theme: ThemePropType.isRequired,
};
