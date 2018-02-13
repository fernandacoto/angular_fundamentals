import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ // esto es el decorator
    selector: 'courses', //como quiero que se llame mi nuevo elemento html
    template: `
        <h2>{{ title }}<h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `, //usualmente los templates contienen mas que una línea de código por lo tanto,
    // en esta sección o puedo añadir el html puro o un path donde se encuentre el template. 
})
export class CoursesComponent {
    title = 'List of courses';
    courses;

    constructor(service: CoursesService) {
        //let service = new CoursesService(); // Si mantenemos la inicialización del servicio aqui
        // nos deja igual las cosas altamente acopladas y frágiles, aparte de difíciles de testear,
        // por lo que le podemos pedir a angular que lo cree por nosotros!!!
        // pasándola como parámetro al constructor.
        this.courses = service.getCourses();
    }

    //This method was just to show the options to put into {{}}
    getTitle(){ //esta función también la puedo llamar dnd se esta llamando title en el
        // template y obtendría el mismo resultado
        return this.title;
    }
}