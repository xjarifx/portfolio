import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Register Inter for consistent typography (optional fallback to system)
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111827",
  },
  title: {
    fontSize: 12,
    color: "#374151",
    marginBottom: 6,
  },
  tagline: {
    fontSize: 10,
    color: "#6b7280",
    lineHeight: 1.5,
  },
  contact: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
    fontSize: 9,
    color: "#374151",
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#6b7280",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 4,
  },
  paragraph: {
    lineHeight: 1.5,
    color: "#374151",
    marginBottom: 6,
  },
  project: {
    marginBottom: 14,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 2,
  },
  projectMeta: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#374151",
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 12,
    marginBottom: 4,
  },
  bulletItem: {
    fontSize: 9,
    lineHeight: 1.4,
    color: "#4b5563",
    marginBottom: 2,
  },
  certItem: {
    marginBottom: 10,
  },
  certName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
  },
  certMeta: {
    fontSize: 9,
    color: "#6b7280",
  },
  eduItem: {
    marginBottom: 8,
  },
  eduDegree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#111827",
  },
  eduMeta: {
    fontSize: 9,
    color: "#6b7280",
  },
  link: {
    color: "#7c3aed",
    textDecoration: "none",
  },
});

/**
 * Resume PDF document
 * Auto-generated from portfolio data, rendered for browser PDF viewer
 */
export const ResumeDocument = ({ metadata, sections }) => {
  const summary = sections?.find((s) => s.id === "summary");
  const techstack = sections?.find((s) => s.id === "techstack");
  const projects = sections?.find((s) => s.id === "projects");
  const certifications = sections?.find((s) => s.id === "certifications");
  const education = sections?.find((s) => s.id === "education");

  const allProjects = [...(projects?.items || []), ...(projects?.moreItems || [])];

  return (
    <Document
      title={`${metadata?.name || "Resume"} - Resume`}
      author={metadata?.name}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{metadata?.name}</Text>
          <Text style={styles.title}>{metadata?.title}</Text>
          <View style={styles.contact}>
            <Text>
              {[metadata?.email, metadata?.phone].filter(Boolean).join(" · ")}
              {metadata?.social?.github && (
                <Text>{" · "}<Link src={metadata.social.github} style={styles.link}>GitHub</Link></Text>
              )}
              {metadata?.social?.linkedin && (
                <Text>{" · "}<Link src={metadata.social.linkedin} style={styles.link}>LinkedIn</Link></Text>
              )}
            </Text>
          </View>
        </View>

        {/* Summary */}
        {summary?.content?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            {summary.content.map((para, i) => (
              <Text key={i} style={styles.paragraph}>{para}</Text>
            ))}
          </View>
        )}

        {/* Tech Stack */}
        {techstack?.categories?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tech Stack</Text>
            {techstack.categories.map((cat, i) => (
              <Text key={i} style={[styles.paragraph, { marginBottom: 3 }]}>
                <Text style={{ fontWeight: "bold", color: "#111827" }}>{cat.label}: </Text>
                {cat.skills.join(", ")}
              </Text>
            ))}
          </View>
        )}

        {/* Projects */}
        {allProjects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {allProjects.map((project, i) => (
              <View key={i} style={styles.project}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  {project.links?.length > 0 && (
                    <Text style={{ fontSize: 9 }}>
                      {project.links.map((link, j) => (
                        <Text key={j}>
                          {j > 0 && " · "}
                          <Link src={link.url} style={styles.link}>{link.label}</Link>
                        </Text>
                      ))}
                    </Text>
                  )}
                </View>
                {project.description && (
                  <Text style={styles.projectDescription}>{project.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education?.items?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.items.map((entry, i) => (
              <View key={i} style={styles.eduItem}>
                <Text style={styles.eduDegree}>{entry.degree}</Text>
                <Text style={styles.eduMeta}>
                  {entry.institution} · {entry.period}
                  {entry.gpa ? ` · ${entry.gpa}` : ""}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {certifications?.items?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {certifications.items.map((cert, i) => (
              <View key={i} style={styles.certItem}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certMeta}>
                  {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}
                </Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
