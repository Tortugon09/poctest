import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};
@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, CommonModule],
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.scss'
})

export class AppBarChartComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public barChartOptions: Partial<ChartOptions> | any;
  public selectedBarInfo: string = '';

  constructor( private cdr: ChangeDetectorRef) {
    // Datos originales
    const siteAData = [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8];
    const categories = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero 2024', 'Febrero 2024', 
      'Marzo 2024', 'Abril 2024', 'Mayo 2024'
    ];
    // Combinar datos y categorías para ordenar
    const combinedData = categories.map((category, index) => ({
      category,
      value: siteAData[index],
    }));

    // Ordenar de menor a mayor basado en los valores
    combinedData.sort((a, b) => a.value - b.value);

    // Extraer datos ordenados
    const sortedCategories = combinedData.map((item) => item.category);
    const sortedData = combinedData.map((item) => item.value);

    this.barChartOptions = {
      series: [
        {
          name: 'Ventas',
          data: sortedData,
        },
      ],
      chart: {
        height: 300,
        type: 'bar',
        width: '100%',
        fontFamily: 'DM Sans,sans-serif',
        foreColor: '#a1aab2',
        toolbar: {
          show: false,
        },
        events: {
          dataPointSelection: (event: any, chartContext: any, config: any) => {
            const selectedCategory = categories[config.dataPointIndex];
            const selectedValue = siteAData[config.dataPointIndex];
            this.selectedBarInfo = `Mes: ${selectedCategory}, Ventas: ${selectedValue}`;
            
            console.log('Barra seleccionada:', this.selectedBarInfo); // Depuración
            this.cdr.detectChanges(); // Forzar la detección de cambios
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      colors: ['#635bff'],
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
      },
      xaxis: {
        type: 'category',
        categories: sortedCategories,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}