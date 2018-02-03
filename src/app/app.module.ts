import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; //sin la extensión del archivo


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent // Nuevo componente, recordar importarlo, como en la línea 7
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
