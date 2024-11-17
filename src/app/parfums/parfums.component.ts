import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { ParfumsService } from '../services/parfums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parfums',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css']
})
export class ParfumsComponent implements OnInit{

  
  parfums! : Parfum[]; //un tableau de Produit
     
  constructor(private parfumService: ParfumsService ) {
   
   }


   ngOnInit(): void {

     this.chargerParfums();
   }
 
   chargerParfums(){
     this.parfumService.listeParfum().subscribe(parfums => {
       console.log(parfums);
       this.parfums = parfums;
       });
   }




}
