export const environment = {
  production: true,
  
  //TOKENS DE ACCESO
  tokens : {
    oauth: 'https://apigateway.tec.mx/tec-de-monterrey/api/nat/oauth2/token',
    jwt: 'https://apigateway.tec.mx/tec-de-monterrey/api/ti/seguridad/jwt/token',
    client_id: 'c1f1cedcc2a27f8e8bcbc78dde253405',
    client_secret: '6392de98cc169f117b41b3b64cee507a',
    grant_type: 'client_credentials',
    scope: 'default',

  },

  //DATOS DEL ALUMNO
  userProperties:'https://mitec.itesm.mx/_api/SP.UserProfiles.PeopleManager/GetMyProperties',

  //SERVICIOS
  apoyosEconomicos: 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/apoyos-economicos?ejercicio-academico={EJERCICIOACADEMICO}',
  planesDePagos : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/planes-pagos?ejercicio-academico={EJERCICIOACADEMICO}',
  atributos : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/atributos?ejercicio-academico={EJERCICIOACADEMICO}',
  cobros : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaPlan : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/relationships/plan-pagos-seleccionado?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaCobro : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios/{IDCOBROSERVICIO}?ejercicio-academico={EJERCICIOACADEMICO}',
  turnoInscripcion : 'https://apigateway.tec.mx/tec-de-monterrey/api/tec/alumnos//{MATRICULA}/turnos?claveEjercicioAcademico={EJERCICIOACADEMICO}',

  //LINKS
  editarDatosFacturacion : 'https://www.segurosmnyl.com.mx/itesm/AccesoAlumnos.aspx?UserV=Invalido&mensaje=No%20existen%20certificados%20activos.&Ubicacion=No%20Disponible&ACT=1',








};
