import React from "react";
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

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
        title: "PCGL Guides",
        description: "Resources for using the PCGL", 
    },
    catalogs: {
        title: "Training Catalog",
        description: "Training for PCGL users ", 
    },
};

const resources: Resource[] = [
    {
        title: "Guides for Researchers",
        link: "/researcher/docs",
        description: "Use the Research Portal, request data access, and more",
        category: "docs",
    },
    {
        title: "Guides for Clinicians",
        link: "/clinician/docs",
        description: "Will be available with future versions of the PCGL",
        category: "docs",
    },
    {
        title: "Guides for Participants & Public",
        link: "/participant-public/docs",
        description: "Will be available with future versions of the PCGL",
        category: "docs",
    },
    {
        title: "Training for Researchers",
        link: "/researcher/catalog",
        description: "Learn about genomics analyses, data governance, and more",
        category: "catalogs"
    },
    {
        title: "Training for Clinicians",
        link: "/clinician/catalog",
        description: "Learn about genomics in the clinic",
        category: "catalogs"
    },
    {
        title: "Training for Participants and the Public",
        link: "/participant-public/catalog",
        description: "Learn about genomics and personalized healthcare",
        category: "catalogs"
    },
];

const Card = ({ title, description, link, image }) => (
    <a href={link} className={styles.card}>
    {image && (
      <img src={image} alt={`${title} icon`} className={styles.cardImage} />
    )}
    <Heading as="h4" className={styles.cardTitle}>
      {title}
    </Heading>
    <p className={styles.cardDescription}>{description}</p>
  </a>
);

const CategorySection = ({ category, items }) => (
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
    const categorizedResources = resources.reduce((acc, resource) => {
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