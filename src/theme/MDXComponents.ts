import type {ComponentType} from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import DocCardList from '@theme/DocCardList'
import DataTable from '@site/src/components/DataTable';
import ResourceGallery from '@site/src/components/ResourceGallery';
import H5P from '@site/src/components/H5P';

const components: typeof MDXComponents & {

    DocCardList: ComponentType<any>;
    DataTable: ComponentType<any>;
    ResourceGallery: ComponentType<any>;
} = {
    ...MDXComponents,
    DocCardList,
    DataTable,
    ResourceGallery,
    H5P
};
    

export default components;