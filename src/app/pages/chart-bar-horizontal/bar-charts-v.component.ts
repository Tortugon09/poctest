import { Component, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
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
  selector: 'app-bar-vertical',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule, CommonModule],
  templateUrl: './bar-charts-v.component.html',
  styleUrl: './bar-charts-v.component.scss',
})
export class AppBarChartComponentVertical{
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public barChartOptions: Partial<ChartOptions> | any;
  public selectedBarInfo: string = '';
  public selectedIndex: number | null = null;
  public categories: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero 2024', 'Febrero 2024', 
    'Marzo 2024', 'Abril 2024', 'Mayo 2024'
  ];
  public buttonPositions: { top: string }[] = []; // Almacena las posiciones de los botones

  constructor(private cdr: ChangeDetectorRef) {
    // Datos originales
    const siteAData = [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8];

    this.barChartOptions = {
      series: [
        {
          name: 'Ventas',
          data: siteAData,
        },
      ],
      chart: {
        height: 600,
        type: 'bar',
        width: '100%',
        fontFamily: 'DM Sans, sans-serif',
        foreColor: '#a1aab2',
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
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
        strokeDashArray: 3,
        borderColor: 'rgba(0,0,0,0.1)',
      },
      xaxis: {
        type: 'category',
        categories: this.categories,
        labels: {
          rotate: -45,
        },
      },
      yaxis: {
        title: {
          text: 'Ventas',
        },
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}