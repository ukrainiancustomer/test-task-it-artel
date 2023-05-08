export const ANGULAR_Q3_SOURCE_CODES: string = `
  import { Component, Input } from "@angular/core";

  @Component({
    selector: "welcome",
    template: \`<h1>Welcome to {{name}}!</h1>\`,
    styles: [\`h1 { font-family: Lato; }\`]
  })
  export class WelcomeComponent  {
    @Input() name: string;
  }

`;

export const ANGULAR_Q4_SOURCE_CODE: string = `
  import {Component, Input, Output} from '@angular/core';

  @Component({
    selector: 'animal-noise',
    template: \`
      <span>{{animal}}</span>
      <button (click)="makeNoise()">Make noise</button>
    \`
  })
  export class AnimalNoise {
    @Input('animal') animal: string;
    @Input('noise') noise: string;

    makeNoise() {
        alert(\`\${this.noise}\`);
    }
  }
    
`;

export const ANGULAR_05_SOURCE_CODE: string = `
  import { NgModule }             from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent }        from './home.component';
  import { ItemDetailComponent }  from './item-detail.component';
  
  const routes: Routes = [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'detail/:id', component: ItemDetailComponent, outlet: 'route1' }
  ];
  
  @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
  })
  export class AppRoutingModule {}

`;

export const ANGULAR_06_SOURCE_CODE: string = `
  class Positionable {
    locationX: number;
    locationY: number;
  }

  class Rotatable {
    orientation: number;
    rotate(orientation: number) {
        this.orientation += orientation;
    }
    align(rotatable: Rotatable) {
        this.orientation = rotatable.orientation;
    }
  }

  class MovingObject implements Positionable, Rotatable {
    locationX: number = 0;
    locationY: number = 0;
    orientation: number = 0;
    rotate: (orientation: number) => void;
  }

  applyMixins(MovingObject, [Positionable, Rotatable]);
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
  }

  let mover = new MovingObject(); 
  mover.rotate(30);

`;

export const ANGULAR_07_SOURCE_CODE: string = `
  export class Address {
    street: String;
    city: String;
    zipCode: String;
  }
    
  @Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
  })
  export class AddressComponent implements OnInit {
    
    @Input() address: Address;
    constructor() { }
    
    ngOnInit() {
        
    }
  }
    
  @Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css']
  })
  export class AddressListComponent implements OnInit {
    
    @Input() addresses: Address[];
    constructor() { }
    
    ngOnInit() {

    }
  }
  
`;

export const ANGULAR_07_FILLED_BLANKS: string = `
  <ul>
    <li *ngFor="let address of addresses">
      <app-address [address]="address"></app-address>
    </li>
  </ul>

`;
