import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ // esto es el decorator
    selector: 'courses', //como quiero que se llame mi nuevo elemento html
    template: `
        <h2>{{ title }}<h2>
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
        <input (keyup)="onKeyUp($event)"/>
        <div>
          <input (keyup.enter)="onKeyUpEventFiltering($event)" />
        </div>
        <div>
          <input #email (keyup.enter)="onKeyUpTemplateVariable(email.value)" />
        </div>

        <div id="2waydatabinding">
          <input [(ngModel)]= "email_2" (keyup.enter)="twoWayDataBinding()" />
        </div>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        {{course.title | uppercase}} <br/>
        {{course.rating | number}}

        {{text | summary}}
      
    `, //usualmente los templates contienen mas que una línea de código por lo tanto,
    // en esta sección o puedo añadir el html puro o un path donde se encuentre el template. 
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = true;
    email_2 = "me@example.com";
    course = {
        title: "The complete angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    text = `
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `

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

    onSave($event){
        $event.stopPropagation(); // esto para evitar Event bubbling
        console.log("CLICKED", $event);
    }

    onKeyUp($event){
        if($event.keyCode === 13) console.log("Pressed enter 1");
    }
    onKeyUpEventFiltering($event){
        //console.log("Pressed enter 2");
        console.log($event.target.value);
    }

    onKeyUpTemplateVariable(email){
        console.log(email);
    }

    twoWayDataBinding(){
        console.log(this.email_2);
    }
}