import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultiAxisChartComponent } from '../../multi-axis-chart/multi-axis-chart.component';
import { AppBarChartComponent } from '../../chart-bar/bar-charts.component';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [CommonModule, MultiAxisChartComponent, AppBarChartComponent],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.scss'
})
export class Page3Component {

  descripcionCorta = {
    title: 'Distribución por Departamentos',
    content: 'La gráfica muestra el porcentaje de asignación de recursos entre los diferentes equipos de la empresa.'
  };


  descripcionLarga = {
    title: 'Análisis Multivariable',
    content: 'Esta visualización muestra la correlación entre cuatro variables diferentes a lo largo del tiempo. Cada serie de datos utiliza su propio eje Y para permitir una comparación precisa.'
  };
}