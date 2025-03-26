import { Component, Input } from '@angular/core';
import { 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis, 
  ApexYAxis, 
  ApexMarkers, 
  ApexDataLabels, 
  ApexStroke,
  ApexGrid,
  ApexTheme
} from 'ng-apexcharts';

@Component({
  selector: 'app-cross-chart',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.scss']
})
export class CrossChartComponent {
  @Input() chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    markers: ApexMarkers;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    grid: ApexGrid;
    colors: string[];
    theme?: ApexTheme;
  } = {
    series: [],
    chart: { 
      type: 'scatter',
      height: 400,
      background: 'transparent'
    },
    xaxis: {
      title: { text: 'Eje X' },
      labels: { style: { colors: '#FFFFFF' } },
      axisBorder: { show: true, color: '#6C4DF6' },
      axisTicks: { show: true, color: '#6C4DF6' }
    },
    yaxis: {
      title: { text: 'Eje Y' },
      labels: { style: { colors: '#FFFFFF' } },
      axisBorder: { show: true, color: '#6C4DF6' },
      axisTicks: { show: true, color: '#6C4DF6' }
    },
    markers: { 
      size: 8,
      strokeWidth: 0,
      hover: { size: 10 }
    },
    dataLabels: { enabled: false },
    stroke: { width: 2 },
    grid: {
      borderColor: 'rgba(108, 77, 246, 0.2)',
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } }
    },
    colors: ['#6C4DF6', '#A78BFA', '#C4B5FD', '#DDD6FE']
  };
}