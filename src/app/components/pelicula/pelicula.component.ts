import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
	
  pelicula:any;
  regresarA:string="";

  constructor(public route:ActivatedRoute, private _ps:PeliculasService) { 
  	this.route.params.subscribe(parametros=>{
  		console.log(parametros);

      this.regresarA= parametros['pag'];

      this._ps.getPelicula(parametros['id']).subscribe(pelicula=>{
          console.log(pelicula);
          this.pelicula=pelicula; 
      })
  		
  	})
  }

  ngOnInit() {
  }

}
