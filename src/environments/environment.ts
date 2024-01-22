// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,


  tokens : {
    oauth: 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/nat/oauth2/token',
    jwt: 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/ti/seguridad/jwt/token',
    client_id: '52900aa9cb63b9db7b84342709514c89',
    client_secret: '4eb89602695fcbabe9c1011517fd2151',
    grant_type: 'client_credentials',
    scope: 'default',

  },

 //DATOS DEL ALUMNO
 userProperties:'https://mitecpprd.itesm.mx/_api/SP.UserProfiles.PeopleManager/GetMyProperties',
//  userProperties: 'https://run.mocky.io/v3/9d38157a-7dad-461c-98a5-736cef5b8c36',

  //SERVICIOS
  apoyosEconomicos: 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/apoyos-economicos?ejercicio-academico={EJERCICIOACADEMICO}',
  planesDePagos : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/planes-pagos?ejercicio-academico={EJERCICIOACADEMICO}',
  atributos : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/atributos?ejercicio-academico={EJERCICIOACADEMICO}',
  cobros : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaPlan : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/relationships/plan-pagos-seleccionado?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaCobro : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios/{IDCOBROSERVICIO}?ejercicio-academico={EJERCICIOACADEMICO}',
  turnoInscripcion : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos//{MATRICULA}/turnos?claveEjercicioAcademico={EJERCICIOACADEMICO}',
  
  // apoyosEconomicos: 'https://run.mocky.io/v3/6aaafb9d-1c52-44fb-87b7-0259114da345',
  // planesDePagos : 'https://run.mocky.io/v3/aad73c02-affc-4925-a9eb-e2dedf3f4b37',
  // atributos : 'https://run.mocky.io/v3/239bb100-284a-490b-b7e4-cde62076eed7',
  // cobros : 'https://run.mocky.io/v3/34c97d87-2201-4708-ac0c-f866175613df',
  // seleccionaPlan : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/relationships/plan-pagos-seleccionado?ejercicio-academico={EJERCICIOACADEMICO}',
  // seleccionaCobro : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios/{IDCOBROSERVICIO}?ejercicio-academico={EJERCICIOACADEMICO}',
  // turnoInscripcion : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos//{MATRICULA}/turnos?claveEjercicioAcademico={EJERCICIOACADEMICO}',

  //LINKS
  editarDatosFacturacion : 'https://www.segurosmnyl.com.mx/itesm/AccesoAlumnos.aspx?UserV=Invalido&mensaje=No%20existen%20certificados%20activos.&Ubicacion=No%20Disponible&ACT=1',
    
  
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
