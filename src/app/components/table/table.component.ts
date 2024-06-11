import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  columns = [
		{ field: 'name', label: 'Nome' },
		{ field: 'area', label: 'Área' },
		// { field: 'country', label: 'País' },
	]

  rows = [
    {
			id: '998',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png',
				field: 'name',
			},
			name: 'Ioni Bowcher',
			area: 'Clínico geral',
			country: 'Brasil',
			expandedContent: `<p>Teste de componente como expanded content</p>`,
		},
    {
			id: '999',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
				field: 'name',
			},
			name: 'Maria Manuel Sampaio',
			area: 'Cardiologia de Intervenção Estrutural',
			country: 'Portugal',
			expandedContent: `<p>Teste de componente como expanded content</p>`,
		},
		{
			id: '1000',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png',
				field: 'name',
			},
			name: 'James Butt',
			area: 'Clínico geral',
			country: 'Portugal',
			expandedContent: `<p>Teste de componente como expanded content</p>`,
		},
		{
			id: '1001',
			name: 'Josephine Darakjy',
			area: 'Clínico geral',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png',
				field: 'name',
			},
		},
		{
			id: '1002',
			name: 'Art Venere',
			area: 'Oftamologista',
		},
		{
			id: '1003',
			name: 'Lenna Paprocki',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1004',
			name: 'Donette Foller',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1005',
			name: 'Simona Morasca',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1006',
			name: 'Mitsue Tollner',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1007',
			name: 'Leota Dilliard',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1008',
			name: 'Sage Wieser',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1009',
			name: 'Kris Marrier',
			area: 'Clínico geral',
		},
		{
			id: '1010',
			name: 'Minna Amigon',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1011',
			name: 'Abel Maclead',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1012',
			name: 'Kiley Caldarera',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1013',
			name: 'Graciela Ruta',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1014',
			name: 'Cammy Albares',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1015',
			name: 'Mattie Poquette',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1016',
			name: 'Meaghan Garufi',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1017',
			name: 'Gladys Rim',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1018',
			name: 'Yuki Whobrey',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1019',
			name: 'Fletcher Flosi',
			area: 'Cardiologia de Intervenção Estrutural',
		},
  ]

  options = {
    loading: false,
    variant: 'pagination',
    serverPagination: false,
    rowsPerPage: 5,
    totalRecords: 22,
    filter: false,
    filterBy: '',
    selectOnlyCurrentPage: false,
    showSelectedButton: true,
    selectedRowsButtonText: 'Get selected rows',
  }

  onEdit(event: any) {
    console.log('event', event)
  }

  onDelete(event: any) {
    console.log('event', event)
  }

  onSelect(event: any) {
    console.log('event', event)
  }
}
