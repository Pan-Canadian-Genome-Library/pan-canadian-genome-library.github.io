import React from "react";
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';

interface Resource {
    title: string;
    link: string;
    image?: string;
    description: string;
    category: string;
}

interface Category {
    title: string;
    description: string;
}

const categories: Record<string, Category> = {
    docs: {
        title: translate({ message: "PCGL Guides", id: "homepage.categories.docs.title" }),
        description: translate({ message: "Resources for using the PCGL", id: "homepage.categories.docs.desc" }), 
    },
    catalogs: {
        title: translate({ message: "Training Catalog", id: "homepage.categories.catalogs.title" }),
        description: translate({ message: "Training for PCGL users", id: "homepage.categories.catalogs.desc" }), 
    },
};

const resources: Resource[] = [
    {
        title: translate({ message: "Guides for Researchers", id: "homepage.resource.resDocs.title" }),
        link: translate({ message: "/researcher/docs", id: "homepage.resource.resDocs.link" }),
        description: translate({ message: "Use the Research Portal, request data access, and more", id: "homepage.resource.resDocs.desc" }),
        category: "docs",
    },
    {
        title: translate({ message: "Documents for Researchers", id: "homepage.resource.resRes.title" }),
        link: translate({ message: "/researcher/resources", id: "homepage.resource.resRes.link" }),
        description: translate({ message: "Consent templates, PCGL frameworks, and more", id: "homepage.resource.resRes.desc" }),
        category: "docs",
    },
    {
        title: translate({ message: "Guides for Participants & Public", id: "homepage.resource.pubDocs.title" }),
        link: translate({ message: "/participant-public/docs", id: "homepage.resource.pubDocs.link" }),
        description: translate({ message: "Will be available with future versions of the PCGL", id: "homepage.resource.pubDocs.desc" }),
        category: "docs",
    },
    {
        title: translate({ message: "Training for Researchers", id: "homepage.resource.resCat.title" }),
        link: translate({ message: "/researcher/catalog", id: "homepage.resource.resCat.link" }),
        description: translate({ message: "Learn about genomics analyses, data governance, and more", id: "homepage.resource.resCat.desc" }),
        category: "catalogs"
    },
    {
        title: translate({ message: "Training for Participants and the Public", id: "homepage.resource.pubCat.title" }),
        link: translate({ message: "/participant-public/catalog", id: "homepage.resource.pubCat.link" }),
        description: translate({ message: "Learn about genomics and personalized healthcare", id: "homepage.resource.pubCat.desc" }),
        category: "catalogs"
    },
];

const Card = ({ title, description, link, image }: Omit<Resource, 'category'>) => (
    <Link to={link} className={styles.card}>
    {image && (
      <img src={image} alt={`${title} icon`} className={styles.cardImage} />
    )}
    <Heading as="h4" className={styles.cardTitle}>
      {title}
    </Heading>
    <p className={styles.cardDescription}>{description}</p>
  </Link>
);

interface CategorySectionProps {
  category: string;
  items: Resource[];
}

const CategorySection = ({ category, items }: CategorySectionProps) => (
  <div className={`${styles.categorySection} ${styles[category]}`}>
    <Heading as="h2" className={styles.categoryHeader}>
      {categories[category].title}
    </Heading>
    <p className={styles.categorySubheader}>
      {categories[category].description}
    </p>
    <div className={styles.cardGrid}>
      {items.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  </div>
);

const HomepageAudiences = () => {
    const categorizedResources = resources.reduce<Record<string, Resource[]>>((acc, resource) => {
        (acc[resource.category] = acc[resource.category] || []).push(resource);
        return acc;
    }, {});
    
    const rightColumnCategories = ["catalogs",];
    const leftColumnCategories = ["docs"];
    
    return (
        <section className={styles.siteMap}>
      <div className={styles.container}>
        <div className={styles.mosaicLayout}>
          <div className={styles.leftColumn}>
            {leftColumnCategories.map((category) => (
              <CategorySection
                key={category}
                category={category}
                items={categorizedResources[category] || []}
              />
            ))}
          </div>
          <div className={styles.rightColumn}>
            {rightColumnCategories.map((category) => (
              <CategorySection
                key={category}
                category={category}
                items={categorizedResources[category] || []}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default HomepageAudiences;