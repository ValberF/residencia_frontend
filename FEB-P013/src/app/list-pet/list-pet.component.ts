import { Component, OnInit } from '@angular/core';
import { IPet } from '../models/pet.model';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrl: './list-pet.component.scss'
})
export class ListPetComponent implements OnInit {
  pets: IPet[] = []

  constructor(private dataBaseService: DataBaseService, private routes: Router) { }

  ngOnInit(): void {
    this.dataBaseService.getPets().subscribe(data => {
      this.pets = data
    })
  }

  removePet(pet: IPet) {
    if (pet.id !== undefined) {
      this.dataBaseService.apagarPet(pet.id);
    } else {
      console.error("ID do pet é undefined.");
    }
  }
}
