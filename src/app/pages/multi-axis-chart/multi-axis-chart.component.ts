import { Component, Input, OnChanges } from '@angular/core';
import { 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis, 
  ApexYAxis, 
  ApexMarkers, 
  ApexDataLabels, 
  ApexStroke,
  ApexTooltip,
  ApexLegend,
  NgApexchartsModule
} from 'ng-apexcharts';

@Component({
  selector: 'app-multi-axis-chart',
  imports: [NgApexchartsModule],
  standalone: true,
  templateUrl: './multi-axis-chart.component.html'
})
export class MultiAxisChartComponent implements OnChanges {
  @Input() seriesData: any[] = [];
  @Input() colors: string[] = ['#6C4DF6', '#A78BFA', '#C4B5FD', '#DDD6FE'];
  @Input() xAxisCategories: string[] = [];
  @Input() showDataLabels: boolean = true;

  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis[];
    markers: ApexMarkers;
    dataLabels: ApexDataLabels;
    stroke: ApexStroke;
    colors: string[];
    tooltip: ApexTooltip;
    legend: ApexLegend;
  } = {
    series: [],
    chart: { type: 'scatter', height: 400 },
    xaxis: { categories: [] },
    yaxis: [],
    markers: { size: 6 },
    dataLabels: { enabled: false },
    stroke: { width: 2 },
    colors: [],
    tooltip: { enabled: true },
    legend: { position: 'top' }
  };

  ngOnChanges() {
    this.updateChartOptions();
  }

  private updateChartOptions() {
    this.chartOptions = {
      ...this.chartOptions,
      series: this.seriesData,
      colors: this.colors,
      xaxis: {
        ...this.chartOptions.xaxis,
        categories: this.xAxisCategories,
        labels: { style: { colors: '#FFFFFF' } },
        axisBorder: { show: true, color: '#6C4DF6' }
      },
      yaxis: this.generateYAxes(),
      dataLabels: {
        enabled: this.showDataLabels,
        formatter: (val: any, opts?: any) => {
          if (Array.isArray(val)) {
            return val[1].toFixed(1);
          } else if (typeof val === 'object' && 'y' in val) {
            return val.y.toFixed(1);
          }
          return '';
        },
        style: { colors: ['#FFF'] }
      },
      tooltip: {
        enabled: true,
        style: { fontSize: '14px' },
        y: {
          formatter: (val) => val ? val.toFixed(2) : ''
        }
      }
    };
  }

  private generateYAxes(): ApexYAxis[] {
    return [
      {
        title: { text: 'Eje Y1', style: { color: this.colors[0] } },
        labels: { style: { colors: this.colors[0] } }
      },
      {
        opposite: true,
        title: { text: 'Eje Y2', style: { color: this.colors[1] } },
        labels: { style: { colors: this.colors[1] } }
      },
      {
        title: { text: 'Eje Y3', style: { color: this.colors[2] } },
        labels: { style: { colors: this.colors[2] } }
      },
      {
        opposite: true,
        title: { text: 'Eje Y4', style: { color: this.colors[3] } },
        labels: { style: { colors: this.colors[3] } }
      }
    ];
  }
}