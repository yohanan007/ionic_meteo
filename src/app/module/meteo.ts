import { coordonnee } from './coordonnee';
import { Sys } from './sys';
import {  Weather } from './weather';
import { Main } from './main';
import { Wind } from './wind';
import { Rain } from './rain';
import { Clouds } from './clouds';

export class Meteo{ 

    coord: coordonnee;
    sys: Sys;
    weather: Array<Weather>;
    main: Main;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    id: number;
    name: string;
    cod: number;

}