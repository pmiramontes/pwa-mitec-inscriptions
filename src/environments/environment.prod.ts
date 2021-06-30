export const environment = {
  production: true,
  
  //TOKENS DE ACCESO
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

  //SERVICIOS
  apoyosEconomicos: 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/apoyos-economicos?ejercicio-academico={EJERCICIOACADEMICO}',
  planesDePagos : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/planes-pagos?ejercicio-academico={EJERCICIOACADEMICO}',
  atributos : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/atributos?ejercicio-academico={EJERCICIOACADEMICO}',
  cobros : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaPlan : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/relationships/plan-pagos-seleccionado?ejercicio-academico={EJERCICIOACADEMICO}',
  seleccionaCobro : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos/{MATRICULA}/cobros-servicios/{IDCOBROSERVICIO}?ejercicio-academico={EJERCICIOACADEMICO}',
  turnoInscripcion : 'https://apigateway-pprd.tec.mx/tec-de-monterrey/api/tec/alumnos//{MATRICULA}/turnos?claveEjercicioAcademico={EJERCICIOACADEMICO}',

  //LINKS
  editarDatosFacturacion : 'https://www.segurosmnyl.com.mx/itesm/AccesoAlumnos.aspx?UserV=Invalido&mensaje=No%20existen%20certificados%20activos.&Ubicacion=No%20Disponible&ACT=1',

};
