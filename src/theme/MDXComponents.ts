import type {ComponentType} from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import DocCardList from '@theme/DocCardList'
import DataTable from '@site/src/components/DataTable';

const components: typeof MDXComponents & {

    DocCardList: ComponentType<any>;
    DataTable: ComponentType<any>;
} = {
    ...MDXComponents,
    DocCardList,
    DataTable
};
    

export default components;