import PropTypes from 'prop-types';
import { Badge, Card, CardLink } from "../ui";
import { ArticlePropType, ThemePropType } from "../../types";
import { formatDate } from "../../utils/date";

/**
 * ArticleItem component
 * Renders individual article card
 */
const ArticleItem = ({ article, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <Card className="sm:grid-cols-8 sm:gap-8 md:gap-4">
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
            className={`leading-snug font-medium ${theme.colors.textPrimary}`}
          >
            {article.url ? (
              <CardLink
                href={article.url}
                ariaLabel={`${article.title} (opens in a new tab)`}
              >
                {article.title}
              </CardLink>
            ) : (
              <span className="text-base">{article.title}</span>
            )}
          </h3>
          {article.date && (
            <p className={`mt-1 text-xs ${theme.colors.textMuted}`}>
              {formatDate(article.date)}
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
                  className="mt-2 mr-1.5"
                >
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </li>
  );
};

ArticleItem.propTypes = {
  article: ArticlePropType.isRequired,
  theme: ThemePropType.isRequired,
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

ArticleSection.propTypes = {
  items: PropTypes.arrayOf(ArticlePropType).isRequired,
  theme: ThemePropType.isRequired,
};
