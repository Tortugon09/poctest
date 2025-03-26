import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'app-grafica-pastel',
  imports: [NgApexchartsModule, CommonModule],
  standalone: true,
  templateUrl: './grafica-pastel.component.html'
})
export class GraficaPastelComponent {
  @Input() chartOptions: any;

  constructor() { }
}