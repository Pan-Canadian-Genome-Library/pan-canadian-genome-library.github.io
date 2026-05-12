import React from 'react';
import styles from './styles.module.css';
import 'primeicons/primeicons.css';

interface Resource {
  name: string;
  source: string;
  link: string;
  audience: string;
  time: string;
  mode: string;
  cost?: string; // Optional if not all resources have it
  languages: string | string[];
  categories?: string[];
}

interface ResourceGalleryProps {
  data: Resource[];
  categoryColors?: Record<string, string>;
  filterTag?: string;
}

export default function ResourceGallery({ data = [], categoryColors = {}, filterTag }: ResourceGalleryProps) {
  if (!Array.isArray(data)) return null;

  const filteredData = filterTag
    ? data.filter(item => item.categories?.includes(filterTag))
    : data;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h4 className={styles.title}>{item.name}</h4>
              <small className={styles.source}>Offered by: {item.source}</small>

              {/* Info Rows with Symbols */}
              <div className={styles.infoRow}>
                <i className={`pi pi-users ${styles.piIcon}`}></i>
                <span>{item.audience}</span>
              </div>

              <div className={styles.infoRow}>
                <i className={`pi pi-book ${styles.piIcon}`}></i>
                <span>{item.mode}</span>
              </div>
              
              <div className={styles.infoRow}>
                <i className={`pi pi-tag ${styles.piIcon}`}></i>
                <span>{item.cost}</span>
              </div>

              <div className={styles.infoRow}>
                <i className={`pi pi-clock ${styles.piIcon}`}></i>
                <span>{item.time}</span>
              </div>
              
              <div className={styles.infoRow}>
                <i className={`pi pi-globe ${styles.piIcon}`}></i>
                <span>
                    {Array.isArray(item.languages) 
                        ? item.languages.join(', ') 
                        : item.languages}
                </span>
              </div>

              {/* Categories/Tags */}
              <div className={styles.tagContainer}>
                {item.categories?.slice(0, 8).map((cat) => {
                  const bgColor = categoryColors[cat] || '#eeeeee';
                  
                  return (
                    <span 
                      key={cat} 
                      className={styles.tag} 
                      style={{ 
                        backgroundColor: bgColor,
                      }}
                    >
                    {cat}
                  </span>
                  );
                })}
              </div>
            </div>

            {/* Link at the absolute bottom */}
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.button}
            >
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}