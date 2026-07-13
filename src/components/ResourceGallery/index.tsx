import React, {useRef} from 'react';
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

type ColorThemeSetting = string | { light: string; dark: string };

interface ResourceGalleryProps {
  data: Resource[];
  categoryColors?: Record<string, ColorThemeSetting>;
  filterTag?: string;
}

export default function ResourceGallery({ data = [], categoryColors = {}, filterTag }: ResourceGalleryProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  if (!Array.isArray(data)) return null;

  const filteredData = filterTag
    ? data.filter(item => item.categories?.includes(filterTag))
    : data;

// Handles the slider movement
  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Scroll by 80% of the visible width for a natural "next page" feel
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Left Arrow */}
      <button 
        className={`${styles.arrowButton} ${styles.leftArrow}`} 
        onClick={() => handleScroll('left')}
        aria-label="Scroll Left"
      >
        <i className="pi pi-chevron-left"></i>
      </button>

      {/* Main Track */}
      <div className={styles.sliderTrack} ref={sliderRef}>
        {filteredData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h4 className={styles.title}>{item.name}</h4>
              <small className={styles.source}>Offered by: {item.source}</small>

              {/* Categories/Tags */}
              <div className={styles.tagContainer}>
                {item.categories?.slice(0, 8).map((cat) => {
                  const colorObj = categoryColors[cat];

                  let lightBg = '#eeeeee';
                  let darkBg = '#eeeeee';

                  if (colorObj) {
                    if (typeof colorObj === 'object' && 'light' in colorObj) {
                      lightBg = colorObj.light;
                      darkBg = colorObj.dark;
                    } else if (typeof colorObj === 'string') {
                      lightBg = colorObj;
                      darkBg = colorObj;
                    }
                  }

                  return (
                    <span 
                      key={cat} 
                      className={styles.tag} 
                      style={{ 
                        ['--tag-bg-light' as any]: lightBg, 
                        ['--tag-bg-dark' as any]: darkBg,
                      }}
                    >
                      {cat}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Info Rows */}
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
                {Array.isArray(item.languages) ? item.languages.join(', ') : item.languages}
              </span>
            </div>

            {/* Link */}
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

      {/* Right Arrow */}
      <button 
        className={`${styles.arrowButton} ${styles.rightArrow}`} 
        onClick={() => handleScroll('right')}
        aria-label="Scroll Right"
      >
        <i className="pi pi-chevron-right"></i>
      </button>
    </div>
  );
}