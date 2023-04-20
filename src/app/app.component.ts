import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from './clase09/servicios/logger.service';
import { APIURL } from './app.module';
import { APP_CONFIG, AppConfig } from './clase09/config.token';
import { ExperimentalLoggerService } from './clase09/servicios/experimental-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LoggerService,
      useFactory: (config: AppConfig) => {
        return config.experimentalEnabled
          ? new ExperimentalLoggerService()
          : new LoggerService();
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'clases-angular';

  constructor(
    private logger: LoggerService,
    @Inject(APIURL) private api: string
  ) {}
  ngOnInit(): void {
    // this.logger.prefix = 'AppComponent';
    // this.logger.log('AppComponent init...');
    // console.log(this.api);
  }
}
