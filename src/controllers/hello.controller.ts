// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/core';

//creación de contorlador vacio

import{ get } from '@loopback/rest'

export class HelloController {
  // cracion ruta GET
  @get('/hello')
  hello(): string{
    return "Hola mundo";
  }
}
