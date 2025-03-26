import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultiAxisChartComponent } from '../../multi-axis-chart/multi-axis-chart.component';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [CommonModule, MultiAxisChartComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  chartData = [
    {
      name: 'Serie 1',
      type: 'scatter',
      data: [
        [1, 2.3], [2, 3.1], [3, 2.8], [4, 4.2]
      ],
      yAxisIndex: 0
    },
    {
      name: 'Serie 2',
      type: 'scatter',
      data: [
        [1, 4.1], [2, 2.9], [3, 3.8], [4, 2.5]
      ],
      yAxisIndex: 1
    },
    {
      name: 'Serie 3',
      type: 'scatter',
      data: [
        [1, 1.7], [2, 3.2], [3, 2.5], [4, 3.9]
      ],
      yAxisIndex: 2
    },
    {
      name: 'Serie 4',
      type: 'scatter',
      data: [
        [1, 3.5], [2, 1.8], [3, 4.2], [4, 2.1]
      ],
      yAxisIndex: 3
    }
  ];

  descripcionCorta = {
    title: 'Distribución por Departamentos',
    content: 'La gráfica muestra el porcentaje de asignación de recursos entre los diferentes equipos de la empresa.'
  };


  descripcionLarga = {
    title: 'Análisis Multivariable',
    content: 'Esta visualización muestra la correlación entre cuatro variables diferentes a lo largo del tiempo. Cada serie de datos utiliza su propio eje Y para permitir una comparación precisa.'
  };
}