import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Data shares at college, 2021'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme) ||
              'black'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['attendance', this.data.attendanceDataSource.length],
        ['department', this.data.departmentDataSource.length],
        {
          name: 'library',
          y: this.data.libraryDataSource.length,
          sliced: true,
          selected: true
        },
        ['student', this.data.studentDataSource.length],

      ]
    }]
  };
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
