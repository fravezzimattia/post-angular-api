import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './services/customer.service';
import { PreferenceService } from './services/preference.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		CustomerService,
		PreferenceService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
