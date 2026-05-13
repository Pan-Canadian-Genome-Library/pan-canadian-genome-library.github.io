import styles from './styles.module.css';

interface H5PProps {
  contentId: string;
  title?: string;
  minHeight?: string;
}

const H5P: React.FC<H5PProps> = ({ 
  contentId, 
  title = 'H5P Content',
  minHeight
}) => {

  return (
    <div className={styles.h5pContainer}>
      <div className={styles.h5pWrapper}>        
        <iframe 
          src={`/H5P-content/${contentId}/index.html`}
          title={title}
          className={`${styles.h5pFrame}`}
          allowFullScreen
          scrolling="no"
          style={minHeight ? { minHeight } : undefined}
        />
      </div>
    </div>
  );
};

export default H5P;