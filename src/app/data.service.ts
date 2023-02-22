import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tokenApi : any;
  jwt : any;

  //datos prueba
  matricula : string = 'A30000008';
  ejercicioAcademico = '202311';

  private idSource = new Subject<string>();
  id = this.idSource.asObservable();

  nombre:string = '';

  constructor(private http: HttpClient) { 
    

  }

  getUserProperties() {
    this.http.get<any>(environment.userProperties, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json; odata=verbose'
      }
    }).subscribe((data: any) => {

      const properties = data.d;
      for (let i = 0; i < properties.UserProfileProperties.results.length; i++) {
        if (properties.UserProfileProperties.results[i].Key === 'UserName') {
        this.idSource.next(properties.UserProfileProperties.results[i].Value);
        }
        if (properties.UserProfileProperties.results[i].Key === 'PreferredName') {
        this.nombre = properties.UserProfileProperties.results[i].Value;
        }
      }
    });
  }

getDatosFacturacionLink(){
  return environment.editarDatosFacturacion;
}

  getTokenApiTec() {
    const url = environment.tokens.oauth;
    const data = `client_id=${environment.tokens.client_id}&client_secret=${environment.tokens.client_secret}&grant_type=${environment.tokens.grant_type}&scope=${environment.tokens.scope}`;
    return fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        this.tokenApi = response;
        // console.log('tokenApi: ' + this.tokenApi.access_token);
        //this.getJWT(this.tokenApi.access_token);

      });
  }
  
  getJWT(token: string) {
    const url = environment.tokens.jwt;
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        Authorization: "Bearer " + token, //access_ token 1
        "iss-claim": this.matricula,
        "sub-claim": "sub",
        "aud-claim": "aud",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        this.jwt = response.meta.token;
        // console.log('tokenJWT: ' + this.jwt);
        // console.log(response.meta.token);

      });
  }


  getApoyosEconomicos() {
    const headers = new Headers({
      Accept : "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization : "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT" : this.jwt, //jwto 2
    });
    const reqInit = { headers: headers, withCredentials: true };

    return fetch(
      `${environment.apoyosEconomicos.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
      .then((res) => res.json());
  }

  getTurnoInscripcion() {
    const headers = new Headers({
      Accept : "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization : "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT" : this.jwt, //jwto 2
    });
    const reqInit = { headers: headers, withCredentials: true };
    //console.log('getTurnoInscripcion',`${environment.turnoInscripcion.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`);

    return fetch(
      `${environment.turnoInscripcion.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
      .then((res) => res.json());
  }

  getPlanesDePago() {
    const headers = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization: "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT": this.jwt, //jwto 2
    });
    const reqInit = { headers: headers, withCredentials: true };

    return fetch(
      `${environment.planesDePagos.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
      .then((res) => res.json());
  }

  getAtributos() {
    const headers = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization: "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT": this.jwt, //jwto 2
    });
    const reqInit = { headers: headers, withCredentials: true };

    return fetch(
      `${environment.atributos.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
      .then((res) => res.json());
  }

  getCobros() {
    const headers = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization: "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT": this.jwt, //jwto 2
    });
    const reqInit = { headers: headers, withCredentials: true };

    return fetch(
      `${environment.cobros.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
      .then((res) => res.json());
  }

  setPlan(data : any) {
    const headers = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization: "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT": this.jwt, //jwto 2
    });
    var dataJSON = JSON.stringify(data);
    console.log(dataJSON);
    const reqInit = { 
      method: 'PATCH',
      headers: headers,
      body: dataJSON,
      withCredentials: true };

    return fetch(
      `${environment.seleccionaPlan.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico)}`,

      reqInit
    )
    .then((res) => res.json())
    .then(res => {
      console.log(res);
      return res
  })
  .catch(err => console.error(err))
}


  setCobro(data : any) {
    const headers = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type" : "application/vnd.api+json",
      Authorization: "Bearer " + this.tokenApi.access_token, //access_ token 1
      "X-Auth-JWT": this.jwt, //jwto 2
    });
    var dataJSON = JSON.stringify(data);
    var cobro = data.data.id;
    console.log(cobro);
    console.log(data);
    console.log(dataJSON);
    const reqInit = { 
      method: 'PATCH',
      headers: headers,
      body: dataJSON,
      withCredentials: true };

    return fetch(
      `${environment.seleccionaCobro.replace('{MATRICULA}',this.matricula).replace('{EJERCICIOACADEMICO}',this.ejercicioAcademico).replace('{IDCOBROSERVICIO}',cobro)}`,

      reqInit
    )
      .then((res) => res.json())
      .then(res => {
        console.log(res);
        return res
    })
    .catch(err => console.error(err))
  }

  


}
