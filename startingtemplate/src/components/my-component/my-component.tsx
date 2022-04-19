import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
//import SelectingBalise from './selectingBalise';
import * as data from "./datum.json";
/*
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const [type, setType] = useState();
useEffect(() => 
{
  const [data, setData] = useState([] as SelectingBox[]);
  let [dataByType, setDataByType] = useState([] as SelectingBox[]);

  console.log(` light mode by default`); }, [ 

]);
*/



@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
  export class MyComponent {
  /**
   * les notes
   */
  @Prop() les_notes: string;

  /**
   * les valeurs
   */
  @Prop() les_valeurs: string;

  /**
   * les types
   */
    @Prop() la_typographie: string;

  /**
   * les tailles
  */
  @Prop() les_legendes: string;


   
/*
private async getJson(d:any)  {
  let selectingBox= await this.retrieve(d);
  
  return selectingBox;
}
*/

private getVar( ): string { 
  const jsObject = JSON.stringify( data ) ;
  console.log( JSON.stringify( jsObject ) );
  this.les_notes = JSON.stringify( jsObject[0]["name"] ) ;
  this.les_valeurs = JSON.stringify( jsObject[1]["valeur"] ) ;  
  const les_typos = JSON.stringify( jsObject[0]["typos"] ) ;
  //const les_legendes = JSON.stringify( data[0]["taille"] ) ;


  console.log(les_typos);


  return format(this.les_notes,  this.les_valeurs,  les_typos);
}


render() {
  return <div> Hi, World!   {this.getVar()}</div>;
}
}


