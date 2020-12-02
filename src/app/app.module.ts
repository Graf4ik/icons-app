import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safehtml.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccordionComponent } from './Components/accordion/accordion.component';
import { IconComponent } from './Components/icon/icon.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePairsPipe } from './keyvalue.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    SafeHtmlPipe,
    KeyValuePairsPipe,
    SearchPipe,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
