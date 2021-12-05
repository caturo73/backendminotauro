import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
EnviarNotificacionesPorSMS(mensaje:string, telefono:string):void{

  const accountSid = 'AC35f17397b73d7c4b66bb0b12695e29d3'; // Your Account SID from www.twilio.com/console
const authToken = '34c966d97937a142e569293944259cdd'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: mensaje,
    to: telefono, // Text this number
    from: '+13099281350', // From a valid Twilio number
  })
  .then((message:any) => console.log(message.sid));


}

EnviarNotificacionesUsuarioPorSMS(mensaje:string, telefono:string):void{
  
    const accountSid = 'AC35f17397b73d7c4b66bb0b12695e29d3'; // Your Account SID from www.twilio.com/console
  const authToken = '34c966d97937a142e569293944259cdd'; // Your Auth Token from www.twilio.com/console
  
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);
  
  client.messages
    .create({
      //body: 'su usuario es:',
      body: mensaje,
      to: telefono, // Text this number
      from: '+13099281350', // From a valid Twilio number
    })
    .then((message:any) => console.log(message.sid));
  
  
  }
  EnviarNotificacionesContaseñaPorSMS(mensaje:string, telefono:string):void{
  
    const accountSid = 'AC35f17397b73d7c4b66bb0b12695e29d3'; // Your Account SID from www.twilio.com/console
  const authToken = '34c966d97937a142e569293944259cdd'; // Your Auth Token from www.twilio.com/console
  
  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);
  
  client.messages
    .create({
      //body: 'su contraseña es:',
      body: mensaje,
      to: telefono, // Text this number
      from: '+13099281350', // From a valid Twilio number
    })
    .then((message:any) => console.log(message.sid));
  
  
  }

}
