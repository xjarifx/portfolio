import { Badge } from "../ui/Badge";

/**
 * ArticleItem component
 * Renders individual article card
 */
const ArticleItem = ({ article, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
        ></div>
        {article.image && (
          <div className="z-10 sm:order-1 sm:col-span-2">
            <img
              alt={`${article.title} thumbnail`}
              loading="lazy"
              width="200"
              height="120"
              decoding="async"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              src={article.image}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}
        <div
          className={`z-10 sm:order-2 ${article.image ? "sm:col-span-6" : "sm:col-span-8"}`}
        >
          <h3
            className={`font-medium leading-snug ${theme.colors.textPrimary}`}
          >
            {article.url ? (
              <a
                className={`inline-flex items-baseline font-medium leading-tight ${theme.colors.textPrimary} hover:${theme.colors.accent} focus-visible:${theme.colors.accent} group/link text-base`}
                href={article.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${article.title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {article.title}
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
              </a>
            ) : (
              <span className="text-base">{article.title}</span>
            )}
          </h3>
          {article.date && (
            <p className={`mt-1 text-xs ${theme.colors.textMuted}`}>
              {article.date}
            </p>
          )}
          {article.summary && (
            <p className={`${theme.spacing.contentGap} text-sm leading-normal`}>
              {article.summary}
            </p>
          )}
          {article.tags && article.tags.length > 0 && (
            <ul
              className={`${theme.spacing.contentGap} flex flex-wrap`}
              aria-label="Article tags"
            >
              {article.tags.map((tag, tagIndex) => (
                <li
                  key={`${article.title}-tag-${tagIndex}`}
                  className="mr-1.5 mt-2"
                >
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
};

/**
 * ArticleSection component
 * Renders list of articles/blog posts
 */
export const ArticleSection = ({ items, theme }) => {
  return (
    <div>
      <ul className="group/list">
        {items.map((article, index) => (
          <ArticleItem
            key={`article-${index}`}
            article={article}
            theme={theme}
          />
        ))}
      </ul>
    </div>
  );
};
