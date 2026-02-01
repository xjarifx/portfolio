import { Badge } from "../ui/Badge";

/**
 * ExperienceItem component
 * Renders individual experience/job item
 */
const ExperienceItem = ({ job, theme, index }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
        ></div>
        <header
          className={`z-10 mb-2 mt-1 ${theme.typography.label} ${theme.colors.textMuted} sm:col-span-2`}
          aria-label={`${job.period}`}
        >
          {job.period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3
            className={`font-medium leading-snug ${theme.colors.textPrimary}`}
          >
            <div>
              <a
                className={`inline-flex items-baseline font-medium leading-tight ${theme.colors.textPrimary} hover:${theme.colors.accent} focus-visible:${theme.colors.accent} group/link text-base`}
                href={job.companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {job.title} ·{" "}
                  <span className="inline-block">
                    {job.company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className={`${theme.spacing.contentGap} text-sm leading-normal`}>
            {job.description}
          </p>
          {job.achievements && job.achievements.length > 0 && (
            <ul
              className={`${theme.spacing.contentGap} text-xs ${theme.colors.text}`}
            >
              {job.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="mb-1">
                  • {achievement}
                </li>
              ))}
            </ul>
          )}
          <ul
            className={`${theme.spacing.contentGap} flex flex-wrap`}
            aria-label="Technologies used"
          >
            {job.technologies.map((tech, techIndex) => (
              <li
                key={`${job.title}-tech-${techIndex}`}
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
 * ExperienceSection component
 * Renders list of experience items
 */
export const ExperienceSection = ({ items, theme }) => {
  return (
    <div>
      <ol className="group/list">
        {items.map((job, index) => (
          <ExperienceItem
            key={`experience-${index}`}
            job={job}
            theme={theme}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
};
