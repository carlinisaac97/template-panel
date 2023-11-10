import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaListService {

  url: string = 'https://localhost:3800/api/';

  constructor(private http: HttpClient) {}

  getByIdPersonas = (id: number): Observable<any> => {
    return this.http.get(this.url + 'persona/' + id);
  }

  getByIdPersonasHijas = (sigla: string, id: number): Observable<any> => {
    return this.http.get(this.url + 'persona-hija/' + sigla + '/' + id);
  }
  getOrganizacionPersonasHijas=():Observable<any>=>
  {
      return this.http.get(this.url+'persona-hija/org');
  }

  // getListPersonas = (url, query: string, page: number, limit: number): Observable<any> => {
  //   if (url == null) {
  //     url = this.url + 'personas';
  //   }
  //   if (query === '') { query = '%20'; }
  //   return this.http.get(url + '/' + query + '/' + limit + '/' + page);
  // }

  // getListPersonasByOrganizacion = (url, organizacionId: number, query: string, page: number, limit: number, params): Observable<any> => {
  //   if (url == null) {
  //     url = this.url + 'personas';
  //   }
  //   if (query === '') { query = '%20'; }

  //   return this.http.get(url + '/' + organizacionId + '/' + query + '/' + limit + '/' + page, {params : params});
  // }

  getListPersonasHijas = (sigla: string, query: string, page: number, limit: number): Observable<any> => {
    if (query === '') { query = '%20'; }
    return this.http.get(this.url + 'personas-hijas/' + sigla + '/' + query + '/' + limit + '/' + page);
  }
  
  getListPersonasHijasMore = (sigla: string, query: string, page: number, limit: number): Observable<any> => {
    if (query === '') { query = '%20'; }
    return this.http.get(this.url + 'personas-hijas-more/' + sigla + '/' + query + '/' + limit + '/' + page);
  }
  /*
  * Los Guardar Siempre deben ser por medio de PUT
  */
  savePersonas = (data: any): Observable<any> => {
    return this.http.put(this.url + 'persona/', data);
  }
  updatePersonaByOrganizacion = (data: any): Observable<any> => {
    return this.http.put(this.url + 'persona/org/', data);
  }

  savePersonasHijas = (data: any, sigla: string): Observable<any> => {
    return this.http.put(this.url + 'persona-hija/' + sigla, data);
  }

  deletePersonasHijas = (id: number, sigla: string): Observable<any> => {
    return this.http.delete(this.url + 'persona-hija/' + sigla + '/' + id);
  }

  getListEspecialidadPadre = (): Observable<any> => {
    return this.http.get(this.url + 'persona-hija-especialidad-padre');
  }

  getListEspecialidadHijaPorPadre = (id: number): Observable<any> => {
    return this.http.get(this.url + 'persona-hija-especialidad-hija-padre/' + id);
  }
  getDatosPersonalizados = (id: number): Observable<any> =>{
    console.log(id)
    let val = this.http.get(this.url + `personas-hijas/${id}`);

    return val
  }
}
