import PropTypes from 'prop-types';
import { Badge, Card, CardLink } from "../ui";
import { CertificationPropType, ThemePropType } from "../../types";
import { getYear } from "../../utils/date";

/**
 * CertificationItem component
 * Renders individual certification item
 */
const CertificationItem = ({ cert, theme }) => {
  return (
    <li className={theme.spacing.itemGap}>
      <Card>
        <div className="z-10">
          <h3
            className={`leading-snug font-medium ${theme.colors.textPrimary}`}
          >
            <div>
              <CardLink
                href={cert.credentialUrl}
                ariaLabel={`${cert.name} from ${cert.issuer} (opens in a new tab)`}
              >
                {cert.name}
                {cert.issuer && (
                  <>
                    {" · "}
                    <span className="inline-block">{cert.issuer}</span>
                  </>
                )}
              </CardLink>
            </div>
          </h3>
          {cert.date && (
            <p
              className={`mt-1 text-xs ${theme.colors.textMuted}`}
              aria-label={`Issued ${cert.date}`}
            >
              {getYear(cert.date)}
            </p>
          )}
          {cert.description && (
            <p className={`${theme.spacing.contentGap} text-sm leading-normal`}>
              {cert.description}
            </p>
          )}
          {cert.credentialId && (
            <p
              className={`${theme.spacing.contentGap} text-xs ${theme.colors.textMuted}`}
            >
              Credential ID: {cert.credentialId}
            </p>
          )}
          {cert.skills && cert.skills.length > 0 && (
            <ul
              className={`${theme.spacing.contentGap} flex flex-wrap`}
              aria-label="Skills validated"
            >
              {cert.skills.map((skill, skillIndex) => (
                <li
                  key={`${cert.name}-skill-${skillIndex}`}
                  className="mt-2 mr-1.5"
                >
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </li>
  );
};

CertificationItem.propTypes = {
  cert: CertificationPropType.isRequired,
  theme: ThemePropType.isRequired,
};

/**
 * CertificationSection component
 * Renders list of certification items
 */
export const CertificationSection = ({ items, theme }) => {
  return (
    <div>
      <ol className="group/list">
        {items.map((cert, index) => (
          <CertificationItem
            key={`certification-${index}`}
            cert={cert}
            theme={theme}
          />
        ))}
      </ol>
    </div>
  );
};

CertificationSection.propTypes = {
  items: PropTypes.arrayOf(CertificationPropType).isRequired,
  theme: ThemePropType.isRequired,
};
