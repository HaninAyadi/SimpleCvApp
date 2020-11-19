import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './Components/cv/cv.component';
import { ListComponent } from './Components/list/list.component';
import { DetailsComponent } from './Components/details/details.component';
import { ItemComponent } from './Components/item/item.component';
import { EmbaucheComponent } from './Components/embauche/embauche.component';
import { DefaultImagePipe } from './Pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailsComponent,
    ItemComponent,
    EmbaucheComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
