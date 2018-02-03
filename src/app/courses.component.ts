import { Component } from '@angular/core';

@Component({ // esto es el decorator
    selector: 'courses', //como quiero que se llame mi nuevo elemento html
    template: '<h2>Courses<h2>', //usualmente los templates contienen mas que una línea de código por lo tanto,
    // en esta sección o puedo añadir el html puro o un path donde se encuentre el template. 
})
export class CoursesComponent {}