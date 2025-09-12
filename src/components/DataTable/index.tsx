import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
  flexRender,
} from "@tanstack/react-table";
import 'primeicons/primeicons.css';
import styles from "./styles.module.css"

// A reusable filter component for a select dropdown
function Filter({ column, predefinedOptions, isOpen, onRef, clearFilter }) {
  const options = useMemo(() => {
    return predefinedOptions || [];
  }, [predefinedOptions]);

  const columnFilterValue = column.getFilterValue() || [];

  const handleCheckboxChange = (option) => {
    if (columnFilterValue.includes(option)) {
      column.setFilterValue(columnFilterValue.filter(val => val !== option));
    } else {
      column.setFilterValue([...columnFilterValue, option]);
    }
  };
  
  return (
    <>
      {isOpen && (
        <div className="filter-dropdown-menu" ref={onRef}>
          {options.map((option, i) => (
            <label key={i} className="filter-label">
              <input
                type="checkbox"
                checked={columnFilterValue.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {String(option)}
            </label>
          ))}
            <div className="clear-filter-button-container">
              <button 
                onClick={clearFilter} 
                className="clear-filter-button"
              >
                Clear Filter
              </button>
            </div>
        </div>
      )}
    </>
  );
}

export default function DataTable({ data, languageOptions, categoryOptions, modeOptions }) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState([]);
  
  // Define the columns inside the component using useMemo
  const columns = useMemo(
    () => [
      {
        accessorKey: 'resourceName',
        header: 'Resource',
        cell: info => {
            const link = info.row.original.resourceLink;
            const name = info.getValue();
            return <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>;
        },
      },
      {
        accessorKey: 'resourceSource',
        header: 'Source',
      },
      {
        accessorKey: 'resourceLanguage',
        header: ({ column }) => {
          const [isOpen, setIsOpen] = useState(false);
          const dropdownRef = useRef(null);

          // Close the dropdown when clicking outside
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [dropdownRef]);

          const clearFilter = () => {
            column.setFilterValue([]);
          };

          const isFiltered = column.getFilterValue() && column.getFilterValue().length > 0;

          return (
            <div className="filter-header-container">
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Language</span>
                <span className={isFiltered ? 'pi pi-filter-fill' : 'pi pi-filter'}
                ></span>
              </div>
              <Filter column={column} predefinedOptions={languageOptions} isOpen={isOpen} onRef={dropdownRef} clearFilter={clearFilter} />
            </div>
          );
        },
        enableSorting: false,
        cell: info => {
          const value = info.getValue();
          return (Array.isArray(value) ? value : [value])?.join(', ') || null;
        },
        filterFn: (row, columnId, filterValues) => {
          const rowValue = row.getValue(columnId) || [];
          const rowArray = Array.isArray(rowValue) ? rowValue : [rowValue];
          
          if (filterValues.length === 0) {
            return true;
          }
          
          return filterValues.every(filterValue => rowArray.includes(filterValue));
        },
      },
      {
        accessorKey: 'resourceCategory',
        header: ({ column }) => {
          const [isOpen, setIsOpen] = useState(false);
          const dropdownRef = useRef(null);

          // Close the dropdown when clicking outside
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [dropdownRef]);

          const clearFilter = () => {
            column.setFilterValue([]);
          };

          const isFiltered = column.getFilterValue() && column.getFilterValue().length > 0;

          return (
            <div className="filter-header-container" ref={dropdownRef}>
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Topics</span>
                <span className={isFiltered ? 'pi pi-filter-fill' : 'pi pi-filter'}></span>
              </div>
              <Filter column={column} predefinedOptions={categoryOptions} isOpen={isOpen} onRef={dropdownRef} clearFilter={clearFilter} />
            </div>
          );
        },
        enableSorting: false,
        cell: info => {
          const value = info.getValue();
          return (Array.isArray(value) ? value : [value])?.join(', ') || null;
        },
        filterFn: (row, columnId, filterValues) => {
          const rowValue = row.getValue(columnId) || [];
          const rowArray = Array.isArray(rowValue) ? rowValue : [rowValue];
          
          if (filterValues.length === 0) {
            return true;
          }
          
          return filterValues.every(filterValue => rowArray.includes(filterValue));
        },
      },
      {
        accessorKey: 'resourceAudience',
        header: 'Audience',
        enableSorting: false,
      },
      {
        accessorKey: 'resourceDescription',
        header: 'Description',
        enableSorting: false,
      },
      {
        accessorKey: 'resourceMode',
        header: ({ column }) => {
          const [isOpen, setIsOpen] = useState(false);
          const dropdownRef = useRef(null);

          // Close the dropdown when clicking outside
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [dropdownRef]);
          
          const clearFilter = () => {
            column.setFilterValue([]);
          };

          const isFiltered = column.getFilterValue() && column.getFilterValue().length > 0;

          return (
            <div className="filter-header-container" ref={dropdownRef}>
              <div 
                className="flex items-center justify-between cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Mode</span>
                <span className={isFiltered ? 'pi pi-filter-fill' : 'pi pi-filter'}></span>
              </div>
              <Filter column={column} predefinedOptions={modeOptions} isOpen={isOpen} onRef={dropdownRef} clearFilter={clearFilter}/>
            </div>
          );
        },
        enableSorting: false,
        cell: info => {
          const value = info.getValue();
          return (Array.isArray(value) ? value : [value])?.join(', ') || null;
        },
        filterFn: (row, columnId, filterValues) => {
          const rowValue = row.getValue(columnId) || [];
          const rowArray = Array.isArray(rowValue) ? rowValue : [rowValue];
          
          if (filterValues.length === 0) {
            return true;
          }
          
          return filterValues.every(filterValue => rowArray.includes(filterValue));
        },
      },
      {
        accessorKey: 'resourceTime',
        header: 'Time',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    // This function iterates through all cell values in the row
    globalFilterFn: (row, columnId, filterValue) => {
        const searchString = String(filterValue).toLowerCase();

        // Get all cell values from the row and check for a match
        return Object.values(row.original).some(cellValue => {
          // Handle different data types
          const searchableValue = Array.isArray(cellValue) ? cellValue.join(' ') : String(cellValue);
          return searchableValue.toLowerCase().includes(searchString);
        });
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="table-container">
      <style>{`
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

      `}</style>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search all training..."
        value={globalFilter ?? ''}
        onChange={e => setGlobalFilter(String(e.target.value))}
        className="mb-4 docusaurus-input-search"
      />

      {/* The Table */}
      <table className="docusaurus-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  colSpan={header.colSpan}  
                  style={{minWidth: '10rem'}}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none table-header'
                          : 'table-header',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <span
                          className={
                            header.column.getIsSorted() === 'asc'
                              ? 'pi pi-sort-alpha-down'
                              : header.column.getIsSorted() === 'desc'
                                ? 'pi pi-sort-alpha-up-alt'
                                : 'pi pi-sort-alt'
                          }
                          //style={{ marginLeft: '0.25rem' }}
                        ></span>
                        )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ?(
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
          ):(
            <tr>
              <td colSpan={table.getVisibleFlatColumns().length} style={{ textAlign: 'center' }}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}