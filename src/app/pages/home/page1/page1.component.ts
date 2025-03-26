import { Component } from '@angular/core';
import { GraficaPastelComponent } from '../../grafica-pastel/grafica-pastel.component';


@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [GraficaPastelComponent],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
    chartOptions = {
        series: [35, 25, 20, 20],
        chart: {
          type: 'pie',
          height: 350,
          foreColor: '#FFFFFF' // Color del texto en la gráfica
        },
        labels: ['Marketing', 'Desarrollo', 'Ventas', 'Soporte'],
        colors: ['#6C4DF6', '#A78BFA', '#C4B5FD', '#DDD6FE'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: { width: 300 }
          }
        }],
        dataLabels: {
          enabled: true,
          style: { colors: ['#FFFFFF'] }
        },
        legend: {
          position: 'bottom',
          labels: { colors: '#FFFFFF' }
        }
      };
      
      descripcionCorta = {
        title: 'Distribución por Departamentos',
        content: 'La gráfica muestra el porcentaje de asignación de recursos entre los diferentes equipos de la empresa.'
      };
    
      descripcionLarga = {
        title: 'Análisis Detallado',
        content: `El departamento de Marketing lidera con un 35% de los recursos, seguido por Desarrollo con 25%. 
        Ventas y Soporte comparten el 20% restante cada uno. Esta distribución refleja nuestras prioridades 
        estratégicas para el próximo trimestre, con mayor enfoque en crecimiento y desarrollo de productos.`
      };
}
