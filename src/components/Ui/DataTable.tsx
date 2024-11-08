import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

interface DataTableComponentProps {
    data: any[];
}

type Filters = {
    [key: string]: any;
    global: { value: string | null, matchMode: FilterMatchMode };
    stock: { operator: FilterOperator, constraints: [{ value: string | null, matchMode: FilterMatchMode }] };
    value: { operator: FilterOperator, constraints: [{ value: string | null, matchMode: FilterMatchMode }] };
    growth: { operator: FilterOperator, constraints: [{ value: string | null, matchMode: FilterMatchMode }] };
    stocks: { operator: FilterOperator, constraints: [{ value: string | null, matchMode: FilterMatchMode }] };
    sectors: { operator: FilterOperator, constraints: [{ value: string | null, matchMode: FilterMatchMode }] };
}

export default function DataTableComponent({ data }: DataTableComponentProps) {
    const [filters, setFilters] = useState<Filters>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        stock: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        value: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        growth: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        stocks: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        sectors: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
    });

    // const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        // setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
            </IconField>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={data} paginator rows={10} header={header} filters={filters as any} onFilter={(e) => setFilters(e.filters as any)}
                globalFilterFields={['stock', 'value', 'growth', 'stocks', 'sectors']} emptyMessage="No stocks found." tableStyle={{ minWidth: '50rem' }}>
                <Column field="stock" header="Stock" sortable filter filterPlaceholder="Search by stock" style={{ minWidth: '12rem' }} />
                <Column field="value" header="Value" sortable filter filterPlaceholder="Search by value" style={{ minWidth: '12rem' }} />
                <Column field="growth" header="Growth" sortable filter filterPlaceholder="Search by growth" style={{ minWidth: '12rem' }} />
                <Column field="stocks" header="Stocks" sortable filter filterPlaceholder="Search by stocks" style={{ minWidth: '12rem' }} />
                <Column field="sectors" header="Sectors" sortable filter filterPlaceholder="Search by sectors" style={{ minWidth: '12rem' }} />
            </DataTable>
        </div>
    );
}