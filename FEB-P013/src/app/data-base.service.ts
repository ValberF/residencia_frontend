import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IPet } from '../app/models/pet.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService implements OnInit {

  loadedPets: IPet[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

  }

  addPet(petData: IPet) {

    this.http.post(
      'https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
      petData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  getPets() {
    return this.http.get<{ [key: string]: IPet }>('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
      .pipe(
        map((responseData) => {
          const postArray: IPet[] = [];
          for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)) {
              postArray.push({ ...(responseData as any)[key], id: key });
            }
          }
          return postArray;
        }
        )
      );
  }

  apagarTodosPets() {
    return this.http.delete('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json');
  }

  getPet2() {
    return this.http.get('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    );
  }

  getPet(id: string) {
    return this.http.get<IPet>(`https://aula13-3a92f-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  editarPet(id: string, petData: IPet
  ) {
    return this.http.put(`https://aula13-3a92f-default-rtdb.firebaseio.com/posts/${id}.json`, petData, { observe: 'response' });
  }

}
