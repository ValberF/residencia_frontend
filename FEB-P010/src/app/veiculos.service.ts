import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAvioes, IBarcos, ICarros, IVeiculos } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private vehiclesUrl = 'assets/veiculos.json';
  private categoriaSubject = new BehaviorSubject<string>('');
  categoria$ = this.categoriaSubject.asObservable();
  private tipoSubject = new BehaviorSubject<string>('');
  tipo$ = this.tipoSubject.asObservable();
  private modelosSubject = new BehaviorSubject<(IAvioes | IBarcos | ICarros)[]>([]);
  private modeloSubject = new BehaviorSubject<(IAvioes | IBarcos | ICarros)>({
    Alcance: '',
    Autonomia: '',
    Engine: '',
    Model: '',
    Name: '',
    NumberOfPassengers: 0,
  });
  modelo$ = this.modeloSubject.asObservable();
  private caracteristicaSubject = new BehaviorSubject<string>('');
  caracteristica$ = this.caracteristicaSubject.asObservable();
  private carrinho = new BehaviorSubject<(IAvioes | IBarcos | ICarros)[]>([]);
  
  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<IVeiculos> {
    return this.http.get<IVeiculos>(this.vehiclesUrl).pipe(
      map((data: any) => data)
    );
  }

  setCategoria(categoria: string): void {
    this.categoriaSubject.next(categoria);
  }

  getCategoria(): string {
    return this.categoriaSubject.value;
  }

  setTipo(tipo: string): void {
    this.tipoSubject.next(tipo);
  }

  getTipo(): Observable<string> {
    return this.tipo$;
  }

  setModelos(modelos: (IAvioes | IBarcos | ICarros)[]): void {
    this.modelosSubject.next(modelos);
  }

  getModelos(): Observable<(IAvioes | IBarcos | ICarros)[]> {
    return this.modelosSubject.asObservable();
  }

  setModelo(modelo: (IAvioes | IBarcos | ICarros)): void {
    this.modeloSubject.next(modelo);
  }

  getModelo(): Observable<(IAvioes | IBarcos | ICarros)> {
    return this.modelo$;
  }

  setCaracteristica(caracteristica: string): void {
    this.caracteristicaSubject.next(caracteristica);
  }

  getCaracteristica(): Observable<string> {
    return this.caracteristica$;
  }

  setCarrinho(carrinho: (IAvioes | IBarcos | ICarros)[]): void {
    this.carrinho.next(carrinho);
  }

  getCarrinho(): Observable<(IAvioes | IBarcos | ICarros)[]> {
    return this.carrinho.asObservable();
  }
}
