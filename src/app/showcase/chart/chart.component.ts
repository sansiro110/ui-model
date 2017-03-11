import {Component} from '@angular/core';
import {PieChart, Pie} from 'ui-model';

@Component({
  selector: 'ui-app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  chart = new PieChart().setSerials([10, 20, 30, 40, 50, 60]).setRadius(30).setCx(50).setCy(50);
  gutter = 0.5;
  noteOffset = 8;

  constructor() {
  }

  translateOf(pie: Pie): string {
    const {x, y} = pie.mapToXY(pie.middlePercent, pie.radius + this.noteOffset);
    return `translateX(${x}px) translateY(${y}px)`;
  }
}
