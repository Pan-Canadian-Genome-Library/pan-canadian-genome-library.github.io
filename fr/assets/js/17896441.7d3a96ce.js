"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["106"],{2682(e,r,s){s.d(r,{A:()=>p});var l=s(1668),t=s(5256),n=s(4848),a=s(6540),i=s(1530),c=s(3888);function o({column:e,predefinedOptions:r,isOpen:s,onRef:l,clearFilter:t}){let i=(0,a.useMemo)(()=>r||[],[r]),c=e.getFilterValue()||[];return(0,n.jsx)(n.Fragment,{children:s&&(0,n.jsxs)("div",{className:"filter-dropdown-menu",ref:l,children:[i.map((r,s)=>(0,n.jsxs)("label",{className:"filter-label",children:[(0,n.jsx)("input",{type:"checkbox",checked:c.includes(r),onChange:()=>{c.includes(r)?e.setFilterValue(c.filter(e=>e!==r)):e.setFilterValue([...c,r])}}),String(r)]},s)),(0,n.jsx)("div",{className:"clear-filter-button-container",children:(0,n.jsx)("button",{onClick:t,className:"clear-filter-button",children:"Clear Filter"})})]})})}let u="infoRow_nYaG",d="piIcon_QtkZ",p={...l.A,DocCardList:t.A,DataTable:function({data:e,languageOptions:r,categoryOptions:s,modeOptions:l}){let[t,u]=(0,a.useState)([]),[d,p]=(0,a.useState)(""),[m,h]=(0,a.useState)([]),g=(0,a.useMemo)(()=>[{accessorKey:"resourceName",header:"Resource",cell:e=>{let r=e.row.original.resourceLink,s=e.getValue();return(0,n.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:s})}},{accessorKey:"resourceSource",header:"Source"},{accessorKey:"resourceLanguage",header:({column:e})=>{let[s,l]=(0,a.useState)(!1),t=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=e=>{t.current&&!t.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t]);let i=e.getFilterValue()&&e.getFilterValue().length>0;return(0,n.jsxs)("div",{className:"filter-header-container",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>l(!s),children:[(0,n.jsx)("span",{children:"Language"}),(0,n.jsx)("span",{className:i?"pi pi-filter-fill":"pi pi-filter"})]}),(0,n.jsx)(o,{column:e,predefinedOptions:r,isOpen:s,onRef:t,clearFilter:()=>{e.setFilterValue([])}})]})},enableSorting:!1,cell:e=>{let r=e.getValue();return(Array.isArray(r)?r:[r])?.join(", ")||null},filterFn:(e,r,s)=>{let l=e.getValue(r)||[],t=Array.isArray(l)?l:[l];return 0===s.length||s.every(e=>t.includes(e))}},{accessorKey:"resourceCategory",header:({column:e})=>{let[r,l]=(0,a.useState)(!1),t=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=e=>{t.current&&!t.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t]);let i=e.getFilterValue()&&e.getFilterValue().length>0;return(0,n.jsxs)("div",{className:"filter-header-container",ref:t,children:[(0,n.jsxs)("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>l(!r),children:[(0,n.jsx)("span",{children:"Topics"}),(0,n.jsx)("span",{className:i?"pi pi-filter-fill":"pi pi-filter"})]}),(0,n.jsx)(o,{column:e,predefinedOptions:s,isOpen:r,onRef:t,clearFilter:()=>{e.setFilterValue([])}})]})},enableSorting:!1,cell:e=>{let r=e.getValue();return(Array.isArray(r)?r:[r])?.join(", ")||null},filterFn:(e,r,s)=>{let l=e.getValue(r)||[],t=Array.isArray(l)?l:[l];return 0===s.length||s.every(e=>t.includes(e))}},{accessorKey:"resourceAudience",header:"Audience",enableSorting:!1},{accessorKey:"resourceDescription",header:"Description",enableSorting:!1},{accessorKey:"resourceMode",header:({column:e})=>{let[r,s]=(0,a.useState)(!1),t=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=e=>{t.current&&!t.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[t]);let i=e.getFilterValue()&&e.getFilterValue().length>0;return(0,n.jsxs)("div",{className:"filter-header-container",ref:t,children:[(0,n.jsxs)("div",{className:"flex items-center justify-between cursor-pointer",onClick:()=>s(!r),children:[(0,n.jsx)("span",{children:"Mode"}),(0,n.jsx)("span",{className:i?"pi pi-filter-fill":"pi pi-filter"})]}),(0,n.jsx)(o,{column:e,predefinedOptions:l,isOpen:r,onRef:t,clearFilter:()=>{e.setFilterValue([])}})]})},enableSorting:!1,cell:e=>{let r=e.getValue();return(Array.isArray(r)?r:[r])?.join(", ")||null},filterFn:(e,r,s)=>{let l=e.getValue(r)||[],t=Array.isArray(l)?l:[l];return 0===s.length||s.every(e=>t.includes(e))}},{accessorKey:"resourceTime",header:"Time"}],[]),f=(0,i.N4)({data:e,columns:g,state:{sorting:t,globalFilter:d,columnFilters:m},onSortingChange:u,onGlobalFilterChange:p,globalFilterFn:(e,r,s)=>{let l=String(s).toLowerCase();return Object.values(e.original).some(e=>(Array.isArray(e)?e.join(" "):String(e)).toLowerCase().includes(l))},onColumnFiltersChange:h,getCoreRowModel:(0,c.HT)(),getSortedRowModel:(0,c.h5)(),getFilteredRowModel:(0,c.hM)(),getFacetedUniqueValues:(0,c.oS)()});return(0,n.jsxs)("div",{className:"table-container",children:[(0,n.jsx)("style",{children:`
        .filter-header-container {
          position: relative;
        }

        .filter-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
          background-color: var(--ifm-background-surface-color);
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: 6px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          margin-top: 4px;
          padding: 8px;
          display: flex;
          flex-direction: column;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 8px;
          cursor: pointer;
          text-align: left;
          white-space: nowrap;
        }

        .filter-label:hover {
          background-color: var(--ifm-color-emphasis-100);
        }
        
        .clear-filter-button {
          font-family: inherit;
          font-size: var(--ifm-font-size-base);
        }
        
        .docusaurus-input-search {
          font-family: inherit;
          font-size: var(--ifm-font-size-base);
        }

      `}),(0,n.jsx)("input",{type:"text",placeholder:"Search all training...",value:d??"",onChange:e=>p(String(e.target.value)),className:"mb-4 docusaurus-input-search"}),(0,n.jsxs)("table",{className:"docusaurus-table",children:[(0,n.jsx)("thead",{children:f.getHeaderGroups().map(e=>(0,n.jsx)("tr",{children:e.headers.map(e=>(0,n.jsx)("th",{colSpan:e.colSpan,style:{minWidth:"10rem"},children:e.isPlaceholder?null:(0,n.jsxs)("div",{className:e.column.getCanSort()?"cursor-pointer select-none table-header":"table-header",onClick:e.column.getToggleSortingHandler(),children:[(0,i.Kv)(e.column.columnDef.header,e.getContext()),e.column.getCanSort()&&(0,n.jsx)("span",{className:"asc"===e.column.getIsSorted()?"pi pi-sort-alpha-down":"desc"===e.column.getIsSorted()?"pi pi-sort-alpha-up-alt":"pi pi-sort-alt"})]})},e.id))},e.id))}),(0,n.jsx)("tbody",{children:f.getRowModel().rows.length>0?f.getRowModel().rows.map(e=>(0,n.jsx)("tr",{children:e.getVisibleCells().map(e=>(0,n.jsx)("td",{children:(0,i.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:f.getVisibleFlatColumns().length,style:{textAlign:"center"},children:"No results found."})})})]})]})},ResourceGallery:function({data:e=[],categoryColors:r={},filterTag:s}){if(!Array.isArray(e))return null;let l=s?e.filter(e=>e.categories?.includes(s)):e;return(0,n.jsx)("div",{className:"container_G0Lz",children:(0,n.jsx)("div",{className:"grid_LztP",children:l.map((e,s)=>(0,n.jsxs)("div",{className:"card_n9Bu",children:[(0,n.jsxs)("div",{className:"content_P0q6",children:[(0,n.jsx)("h4",{className:"title_hclJ",children:e.name}),(0,n.jsxs)("small",{className:"source_NHis",children:["Offered by: ",e.source]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)("i",{className:`pi pi-users ${d}`}),(0,n.jsx)("span",{children:e.audience})]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)("i",{className:`pi pi-book ${d}`}),(0,n.jsx)("span",{children:e.mode})]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)("i",{className:`pi pi-tag ${d}`}),(0,n.jsx)("span",{children:e.cost})]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)("i",{className:`pi pi-clock ${d}`}),(0,n.jsx)("span",{children:e.time})]}),(0,n.jsxs)("div",{className:u,children:[(0,n.jsx)("i",{className:`pi pi-globe ${d}`}),(0,n.jsx)("span",{children:Array.isArray(e.languages)?e.languages.join(", "):e.languages})]}),(0,n.jsx)("div",{className:"tagContainer_Mfgt",children:e.categories?.slice(0,8).map(e=>{let s=r[e]||"#eeeeee";return(0,n.jsx)("span",{className:"tag_iqXR",style:{backgroundColor:s},children:e},e)})})]}),(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"button_soYY",children:"View Resource"})]},s))})})}}}}]);