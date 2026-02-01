import { Badge } from "../ui/Badge";
import { ExternalLink } from "../ui/ExternalLink";

/**
 * ProjectItem component
 * Renders individual project card
 */
const ProjectItem = ({ project, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
        ></div>
        {project.image && (
          <div className="z-10 sm:order-1 sm:col-span-2">
            <img
              alt={`${project.title} screenshot`}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={project.image}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
        <div
          className={`z-10 sm:order-2 ${project.image ? "sm:col-span-6" : "sm:col-span-8"}`}
        >
          <h3
            className={`font-medium leading-tight ${theme.colors.textPrimary} text-base`}
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
                className="mr-1.5 mt-2"
              >
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
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
