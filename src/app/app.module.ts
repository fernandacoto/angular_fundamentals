import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; //sin la extensión del archivo
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent, // Nuevo componente, recordar importarlo, como en la línea 7
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService, // Esto necesita agregarse, para poder pasar la instancia como parametro en el constructor (dependency injection)
    // cuando se registra algo aquí, angular va a crear un single instance
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
