//Dependencies
import React from 'react';
//Resources
import redhex from '../../../../images/red7.png';
import redhexs from '../../../../images/red7s.png';
import ayudaImg from '../../../../images/ayuda.jpg';
import fondo from '../../../../images/ImgenPrueba1.jpg';
import Carousel from './3-Carousel/Carousel';
import { CarouselItem } from './3-Carousel/CarouselItem';
import './Body.css';
import { Services } from './4-Services';
import { ClientList } from './5-ClientList';
import {Solutions} from './2-Solutions';
import {Information} from './1-Information';

export class Body extends React.Component {
  render() {
    return(
      <div className="contenedor">
        
        <div className="animaciones">
          <img className="ImgHex shadow" src={redhexs}></img>
          <img className="ImgHex" src={redhex}></img>
         
          <img  className="sizeImage" src={fondo}/>
       
         
        </div>
          
         
        <div className="mensaje">
          <p><span>Creamos soluciones a la medida de tu mundo, utilizando tecnologías de ultima generación</span></p>
        </div>
        <div className="about">
          <div className="orden">
            
          </div>
          <div className="info">
            <div className="desc">
              <Information/>
            </div>
            <img src={ayudaImg}></img>
          </div>
        </div>
          <div>
            <Solutions/>
          </div>
        <div className="mensaje">
          <p><span>Conoce mas sobre nuestro trabajo</span></p>
        </div>
        <div className="productos">
          <div className="orden"><h1>03</h1></div>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </div>
        <Services></Services>
        <ClientList></ClientList>
      </div>
    );
  }
}