import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'The-component',
  styleUrl: 'The-component.css',
  shadow: true,
})

export class TheComponent {
  @Prop() colour: string = 'Le Blues';

  render() {
    let data = "./assets/data.json";
    console.log( JSON.stringify( data[0]["Le coeur"] ) );
    const les_notes = JSON.stringify( data[0]["name"] ) ;
    const l_intonation = JSON.stringify( data[0]["valeur"] ) ;
    const la_typographie = JSON.stringify( data[0]["type"] ) ;
    const les_legendes = JSON.stringify( data[0]["taille"] ) ;

    return (

      <html lang="en">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </meta>

      <body>




      </body>
      <div> The next building's gradient will be {this.colour} afterwards </div>

      </meta>

      </html>
    );
  }
}
