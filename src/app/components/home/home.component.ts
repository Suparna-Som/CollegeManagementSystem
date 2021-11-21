import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  highcharts
  chartOptions
  show = false
  constructor(private data: DataService) {
    data.login = true;
    data.get()

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true
      this.highcharts = Highcharts;
      this.chartOptions = {
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
            ['department', this.data.departmentDataSource],
            ['attendance', this.data.attDataSource],
            {
              name: 'library',
              y: this.data.libraryDataSource,
              sliced: true,
              selected: true
            },
            ['student', this.data.studentDataSource],

          ]
        }]
      };

    }, 1000);

  }

}
