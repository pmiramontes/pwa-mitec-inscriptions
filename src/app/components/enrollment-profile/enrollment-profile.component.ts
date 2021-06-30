import { Component, Inject, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CancelSgmmModalComponent } from '../shared/modals/cancel-sgmm-modal/cancel-sgmm-modal.component';
import {DataService} from '../../data.service'
import { DynamicModalComponent } from '../shared/modals/dynamic-modal/dynamic-modal.component';

export interface DialogData {
  message: string;
  
}


@Component({
  selector: 'app-enrollment-profile',
  templateUrl: './enrollment-profile.component.html',
  styleUrls: ['./enrollment-profile.component.scss']
})
export class EnrollmentProfileComponent implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef;

  edited = true;
  panelOpenOne = false;
  panelOpenTwo = false;
  panelOpenThree = false;
  panelOpenFour = false;
  panelOpenFive = false;
  concluido = false; 

  toggle = false;
  icon = 'expand_more'


  //datos servicios
  listaApoyos : any = [];
  listaAtributos : any = [];
  listaPlanesDePago : any = [];
  listaCobros : any = [];
  turnoInscripcion : any;

  SCOL : any = null; 
  SGMC : any = null;
  SGMM : any = null;
  CSGM : any = null;

  selectedPlan : any = null;
  selectedSeguro : any = null;
  selSGM : string = 'CSGM'; 
  selPlan : string = ''; 
  errorCobro : boolean = false;
  errorPLan : boolean = false;
  errorTurno : boolean = true;

  days : string = ' ';
  hours : string = ' ';
  minutes : string = ' ';
  seconds : string = ' ';

  editarDatosFacturacion : string ='';
  

  constructor(private modalService: BsModalService, private data: DataService) { 
  }

  ngOnInit(): void {
    this.data.getUserProperties();
    // this.countDown('2021-06-15T08:00:00-06:00');
    this.editarDatosFacturacion = this.data.getDatosFacturacionLink();

    this.data.id.subscribe( user =>{
      this.loadData(user); //user
      
    });
  }

  loadData(user : string){
    this.errorCobro = false;
    this.errorPLan = false;
    console.log(user);
    this.data.matricula = this.cuentasDummy(user);
   console.log(this.data.matricula);
   this.data.getTokenApiTec().then(res =>{
     this.data.getJWT(this.data.tokenApi.access_token).then(res => {
       console.log(this.data.jwt);
       console.log(this.data.tokenApi);
       console.log('TEST API MANAGER');

       //APOYOS
       this.data.getApoyosEconomicos().then(apoyos => {
         console.log('apoyos: ');
         
         this.listaApoyos =  apoyos.data;
         console.log(this.listaApoyos);
       });

       //PLANES
       this.data.getPlanesDePago().then(planes => {
         console.log('planes: ');
         
         this.listaPlanesDePago =  planes.data;
         console.log(this.listaPlanesDePago);

          //PLAN SELECCIONADO
         this.getSelectedPlan();
       });

       //ATRIBUTOS
       this.data.getAtributos().then(atributos => {
         console.log('atributos: ');
         console.log(atributos);
         this.listaAtributos =  atributos.data;

         this.CSGM = this.getAtributo('CSGM');
       });

       //COBROS
       this.data.getCobros().then(cobros => {
        console.log('cobros: ');
        console.log(cobros);
        if (cobros.errors){
          console.log('ERROR');
        }
        else{
          this.listaCobros =  cobros.data;

          

          this.SCOL = this.getSeguro('SCOL');
          console.log(this.SCOL);
          this.SGMC = this.getSeguro('SGMC');
          this.SGMM = this.getSeguro('SGMM');

          // SEGURO SELECCIONADO
          if (this.SGMC.attributes.indicadorSeleccionAtributo){
            this.selSGM = this.SGMC.id;
          }

          if (this.SGMM.attributes.indicadorSeleccionAtributo){
            this.selSGM = this.SGMM.id;
          }

          if (this.CSGM.attributes.indicadorSeleccionAtributo){
            this.selSGM = this.CSGM.id;
          }
        }
        
       });

       //TURNO INSCRIPCION
       console.log('turno');
       this.data.getTurnoInscripcion().then(turno =>{
         console.log(turno);
         this.turnoInscripcion = turno.data;
         this.countDown(turno.data.attributes.fechaInscripcion);
         this.errorTurno = false;

       }).catch(err => {
         console.log('error turno');
          this.errorTurno = true;
       })
     })
   });

  }


  getSeguro(id : string){
    return this.listaCobros.filter((seg : any) => seg.id === id)[0];
  }

  getAtributo(id : string){
    return this.listaAtributos.filter((seg : any) => seg.id === id)[0];
  }

  getSelectedPlan(){
    this.listaPlanesDePago.forEach((plan : any ) => {
      console.log(plan);
      if (plan.attributes.indicadorSeleccionado){
        this.selPlan = plan.id; 
        console.log(plan.id);
      }
    });
  }

  goToDatosFacturacion(){
    this.goToLink(this.editarDatosFacturacion);
  }
  goToLink(url: string){
      window.open(url, "_blank");
  }

  openCancelSGSM() {
    this.bsModalRef = this.modalService.show(CancelSgmmModalComponent, Object.assign({}, { class: 'modal-lg modal-dialog-centered' }));
  }

  openMessage(title : string, body : string, footer : string) {
    this.bsModalRef = this.modalService.show(DynamicModalComponent, Object.assign({}, { class: 'modal-lg modal-dialog-centered' }));
    this.bsModalRef.content.titleHeader = title;
    this.bsModalRef.content.contentBody = body;
    this.bsModalRef.content.contentFooter = footer;


  }

  enableChevronIcon() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
    this.icon = this.toggle ? 'expand_less' : 'expand_more'
  }

  guardar(){
    var plan = {
      "data": {
        "type": "planes-pagos",
        "id": "99"
      }
    };

 
  plan.data.id = this.selPlan;
   this.saveData(plan);
 

   

 

   //this.selSGM = 'SGMM';
  //  this.openMessage('Peril Administrativo','La informacion de guardo correctamente','');
  }

  saveData(pago : any) {
    console.log(pago);
    this.data.getTokenApiTec().then(res =>{
      this.data.getJWT(this.data.tokenApi.access_token).then(res => {
        
  
        this.data.setPlan(pago).then( pago => {
          console.log('set plan');
          var cobro = {
            "data": {
              "type": "cobros-servicios",
              "id": '',
              "attributes": {
                "indicadorSeleccionado": true
              }
            }
          };

          if (this.selectedSeguro == 'CSGM'){
            var cobroSGMM = {
             "data": {
               "type": "cobros-servicios",
               "id": 'SGMM',
               "attributes": {
                 "indicadorSeleccionado": false
               }
             }
           };
            var cobroSGMC = {
             "data": {
               "type": "cobros-servicios",
               "id": 'SGMC',
               "attributes": {
                 "indicadorSeleccionado": false
               }
             }
           };
            console.log('CSGM');
          
            console.log(cobroSGMM);
            this.setCobro(cobroSGMM, () => { 
              this.setCobro(cobroSGMC, () => {
                console.log ('setCobro CGGM');
                this.openMessage('Perfil Administrativo','La información se ha guardado correctamente','');
                this.data.getUserProperties();
              } );
            });
          }
          else{
            cobro.data.id = this.selSGM;
           this.setCobro(cobro, () => {
             console.log('setCobro ');
            this.openMessage('Perfil Administrativo','La información se ha guardado correctamente','');
            this.data.getUserProperties();
          } );
         }
        }).catch(error => {
          console.log('ERROR PLAN');
          this.openMessage('Perfil Administrativo','Ocurrio un error al guardar la información ','');
        });
  
  
        
      })
    });
  }

  setCobro(cobro : any, callback : any) {
    console.log(cobro);
    this.data.getTokenApiTec().then(res =>{
      this.data.getJWT(this.data.tokenApi.access_token).then(res => {
        this.data.setCobro(cobro).then( pago => {
          console.log('set cobro');
           callback();
          // this.openMessage('Peril Administrativo','La informacion de guardo correctamente','');
          // this.data.getUserProperties();

        });
      })
    }).catch((error) => {
       
      // this.openMessage('Peril Administrativo','Ocurrio un error al guardar la información','');

    });
    return false;
  }

  seleccionaPlan(plan : any){

    this.selectedPlan = plan;
    console.log(this.selectedPlan);
    console.log(this.selPlan);
  }

  seleccionaSeguro(seguro : any){

    this.selectedSeguro = seguro;
    console.log(this.selectedSeguro);
    console.log(this.selSGM);
  }

  cancelaSeguro(){
    this.selectedSeguro = 'CSGM';
  }


  

cuentasDummy(dummy:string)  {
switch (dummy){
  case 'A30000001': return 'A00827076'; break;
  case 'A30000002': return 'A00828047'; break;
  case 'A30000003': return 'A01023753'; break;
  case 'A30000004': return 'A01025881'; break;
  case 'A30000005': return 'A01138704'; break;
  case 'A30000006': return 'A01282945'; break;
  case 'A30000007': return 'A01283509'; break;
  case 'A30000008': return 'A01283688'; break;
  case 'A30000009': return 'A01283886'; break;
  case 'A30000010': return 'A01283924'; break;
  case 'A30000011': return 'A01376629'; break;
  case 'A30000012': return 'A01378225'; break;
  case 'A30000013': return 'A01651324'; break;
  case 'A30001433': return 'A01024449'; break;
  case 'A30001835': return 'A00829283'; break;
  case 'A30001890': return 'A01022978'; break;
  case 'A30002006': return 'A01025800'; break;
  case 'A30002357': return 'A01022627'; break;
  case 'A30006239': return 'A01025267'; break;
  case 'A30008106': return 'A01025243'; break;
  case 'A30015763': return 'A00517260'; break;
  case 'A30017600': return 'A01025261'; break;
   default: return dummy;
}
return dummy; 
}




countDown(date : string){
  var countDownDate = new Date(date).getTime();
  var distance = this.countDownMath(countDownDate);
  console.log(distance);
  if (distance < 0) {
    this.edited = false;
  }else{
    this.edited = true;
  }
// Update the count down every 1 second
var x = setInterval(() => {

  var distance = this.countDownMath(countDownDate);
  console.log(distance);

  // If the count down is finished, write some text
  if (distance < 0) {
    this.edited = false;
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 60000);
}

countDownMath(countDownDate : number){
  // Get today's date and time
  console.log(countDownDate);
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  this.days = days.toString();
  this.hours = hours.toString();
  this.minutes = minutes.toString();
  this.seconds = seconds.toString();

  
  // Display the result in the element with id="demo"
  console.log(days);
  console.log(hours);

  console.log(minutes);

  console.log(seconds);

  return distance;
}




}


