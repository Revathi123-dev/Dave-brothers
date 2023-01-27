import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { InformationComponent } from './information/information.component';
import { ServiceComponent } from './service/service.component';
import {MatRadioModule} from '@angular/material/radio';
import { SecurityComponent } from './security/security.component';




@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ServiceComponent,
    SecurityComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatRadioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
