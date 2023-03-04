import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { MarksComponent } from './pages/marks/marks.component';
import { HomeworkComponent } from './pages/homework/homework.component';

@NgModule({
    declarations: [
      AppComponent,
      CertificateComponent,
      MarksComponent,
      HomeworkComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class AppModule { }
