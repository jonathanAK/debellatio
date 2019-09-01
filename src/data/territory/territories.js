import {CapitalTypes} from './capital.types';
import {TerritoryTypes} from './territory.types';
import {CountryNames} from './country.names';
export const Territories =
[
    {
        "id":0,
        "name":'0',
        "location":0,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[1,6],
        "army":'A'
    },
    {
        "id":1,
        "name":'1',
        "location":1,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[0,7,2],
        "army":'A'
    },
    {
        "id":2,
        "name":'2',
        "location":2,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[1,8,3],
        "army":'A'
    },
    {
        "id":3,
        "name":'3',
        "location":3,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[2,9,4],
        "army":'A'
    },
    {
        "id":4,
        "name":'4',
        "location":4,
        "capital": CapitalTypes.City,
        "country":CountryNames.G,
        "type":TerritoryTypes.Land,
        "borders":[3,10],
        "army":'G'
    },
    {
        "id":5,
        "name":'5',
        "location":5,
        "capital": CapitalTypes.City,
        "country":CountryNames.B,
        "type":TerritoryTypes.Land,
        "borders":[6,13],
        "army":'B'
    },
    {
        "id":6,
        "name":'6',
        "location":6,
        "capital": CapitalTypes.City,
        "country":CountryNames.B,
        "type":TerritoryTypes.Land,
        "borders":[0,5,14,7],
        "army":'B'
    },
    {
        "id":7,
        "name":'7',
        "location":7,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[1,6,15,8],
        "army":'A'
    },
    {
        "id":8,
        "name":'8',
        "location":8,
        "capital": CapitalTypes.City,
        "country":CountryNames.A,
        "type":TerritoryTypes.Land,
        "borders":[2,7,16,9],
        "army":'A'
    },
    {
        "id":9,
        "name":'9',
        "location":9,
        "capital": null,
        "country":CountryNames.A,
        "type":TerritoryTypes.Coast,
        "borders":[3,8,17,10],
        "army":'A'
    },
    {
        "id":10,
        "name":'10',
        "location":10,
        "capital": null,
        "country":CountryNames.G,
        "type":TerritoryTypes.Coast,
        "borders":[4,9,18,11],
        "army":'G'
    },
    {
        "id":11,
        "name":'11',
        "location":11,
        "capital": null,
        "country":CountryNames.G,
        "type":TerritoryTypes.Coast,
        "borders":[10,18,19],
        "army":'G'
    },
    {
        "id":12,
        "name":'12',
        "location":12,
        "capital": null,
        "country":'B',
        "type":TerritoryTypes.Coast,
        "borders":[21,22,13],
        "army":'B'
    },
    {
        "id":13,
        "name":'13',
        "location":13,
        "capital": null,
        "country":'B',
        "type":TerritoryTypes.Coast,
        "borders":[5,12,22,14],
        "army":'B'
    },
    {
        "id":14,
        "name":'14',
        "location":14,
        "capital": null,
        "country":CountryNames.B,
        "type":TerritoryTypes.Coast,
        "borders":[6,13,22,23,15],
        "army":'B'
    },
    {
        "id":15,
        "name":'15',
        "location":15,
        "capital": CapitalTypes.City,
        "country":CountryNames.E,
        "type":TerritoryTypes.Land,
        "borders":[7,14,24,16],
        "army":'E'
    },
    {
        "id":16,
        "name":'16',
        "location":16,
        "capital": CapitalTypes.City,
        "country":CountryNames.E,
        "type":TerritoryTypes.Land,
        "borders":[8,15,25,17],
        "army":'E'
    },
    {
        "id":17,
        "name":'17',
        "location":17,
        "capital": null,
        "country":CountryNames.E,
        "type":TerritoryTypes.Coast,
        "borders":[9,16,26,18],
        "army":'E'
    },
    {
        "id":18,
        "name":'18',
        "location":18,
        "capital": null,
        "country":CountryNames.F,
        "type":TerritoryTypes.Sea,
        "borders":[11,10,9,17,26,27,28,19],
        "army":'F'
    },
    {
        "id":19,
        "name":'19',
        "location":19,
        "capital": null,
        "country":CountryNames.G,
        "type":TerritoryTypes.Coast,
        "borders":[11,18,28,20],
        "army":'G'
    },
    {
        "id":20,
        "name":'20',
        "location":20,
        "capital": CapitalTypes.City,
        "country":CountryNames.G,
        "type":TerritoryTypes.Land,
        "borders":[19,22],
        "army":'G'
    },
    {
        "id":21,
        "name":'21',
        "location":21,
        "capital": null,
        "country":CountryNames.B,
        "type":TerritoryTypes.Coast,
        "borders":[12,30,22],
        "army":'B'
    },
    {
        "id":22,
        "name":'22',
        "location":22,
        "capital": null,
        "country":CountryNames.B,
        "type":TerritoryTypes.Sea,
        "borders":[14,13,12,21,30,31,32,23],
        "army":'B'
    },
    {
        "id":23,
        "name":'23',
        "location":23,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[14,22,32,24],
        "army":'C'
    },
    {
        "id":24,
        "name":'24',
        "location":24,
        "capital": null,
        "country":CountryNames.E,
        "type":TerritoryTypes.Coast,
        "borders":[15,23,32,33,25],
        "army":'E'
    },
    {
        "id":25,
        "name":'25',
        "location":25,
        "capital": CapitalTypes.City,
        "country":CountryNames.E,
        "type":TerritoryTypes.Land,
        "borders":[16,24,34,26],
        "army":'E'
    },
    {
        "id":26,
        "name":'26',
        "location":26,
        "capital": null,
        "country":CountryNames.E,
        "type":TerritoryTypes.Coast,
        "borders":[17,25,35,27],
        "army":'E'
    },
    {
        "id":27,
        "name":'27',
        "location":27,
        "capital": null,
        "country":CountryNames.F,
        "type":TerritoryTypes.Coast,
        "borders":[18,26,36,28],
        "army":'F'
    },
    {
        "id":28,
        "name":'28',
        "location":28,
        "capital": null,
        "country":CountryNames.G,
        "type":TerritoryTypes.Coast,
        "borders":[19,27,37,29],
        "army":'G'
    },
    {
        "id":29,
        "name":'29',
        "location":29,
        "capital": CapitalTypes.City,
        "country":CountryNames.G,
        "type":TerritoryTypes.Land,
        "borders":[20,28,38],
        "army":'G'
    },
    {
        "id":30,
        "name":'30',
        "location":30,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[22,21,31],
        "army":'C'
    },
    {
        "id":31,
        "name":'31',
        "location":31,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[22,30,39,32],
        "army":'C'
    },
    {
        "id":32,
        "name":'32',
        "location":32,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Sea,
        "borders":[24,23,22,31,39,40,41,33],
        "army":'C'
    },
    {
        "id":33,
        "name":'33',
        "location":33,
        "capital": null,
        "country":CountryNames.E,
        "type":TerritoryTypes.Coast,
        "borders":[24,32,41,34],
        "army":'E'
    },
    {
        "id":34,
        "name":'34',
        "location":34,
        "capital": null,
        "country":CountryNames.E,
        "type":TerritoryTypes.Coast,
        "borders":[25,33,41,42,35],
        "army":'E'
    },
    {
        "id":35,
        "name":'35',
        "location":35,
        "capital": CapitalTypes.City,
        "country":CountryNames.E,
        "type":TerritoryTypes.Land,
        "borders":[26,34,43,36],
        "army":'E'
    },
    {
        "id":36,
        "name":'36',
        "location":36,
        "capital":CapitalTypes.City,
        "country":CountryNames.F,
        "type":TerritoryTypes.Land,
        "borders":[27,35,44,37],
        "army":'F'
    },
    {
        "id":37,
        "name":'37',
        "location":37,
        "capital": CapitalTypes.City,
        "country":CountryNames.F,
        "type":TerritoryTypes.Land,
        "borders":[28,36,45,38],
        "army":'F'
    },
    {
        "id":38,
        "name":'38',
        "location":38,
        "capital": CapitalTypes.City,
        "country":CountryNames.F,
        "type":TerritoryTypes.Land,
        "borders":[29,37],
        "army":'F'
    },
    {
        "id":39,
        "name":'39',
        "location":39,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[32,32,40],
        "army":'C'
    },
    {
        "id":40,
        "name":'40',
        "location":40,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[32,39,46,41],
        "army":'C'
    },
    {
        "id":41,
        "name":'41',
        "location":41,
        "capital": null,
        "country":CountryNames.D,
        "type":TerritoryTypes.Sea,
        "borders":[34,33,32,40,46,47,48,42],
        "army":'D'
    },
    {
        "id":42,
        "name":'42',
        "location":42,
        "capital": null,
        "country":CountryNames.D,
        "type":TerritoryTypes.Coast,
        "borders":[34,41,48,43],
        "army":'D'
    },
    {
        "id":43,
        "name":'43',
        "location":43,
        "capital": null,
        "country":CountryNames.D,
        "type":TerritoryTypes.Land,
        "borders":[35,42,49,44],
        "army":'D'
    },
    {
        "id":44,
        "name":'44',
        "location":44,
        "capital": CapitalTypes.City,
        "country":CountryNames.F,
        "type":TerritoryTypes.Land,
        "borders":[36,43,50,45],
        "army":'F'
    },
    {
        "id":45,
        "name":'45',
        "location":45,
        "capital": null,
        "country":CountryNames.F,
        "type":TerritoryTypes.Land,
        "borders":[37,44],
        "army":'F'
    },
    {
        "id":46,
        "name":'46',
        "location":46,
        "capital": null,
        "country":CountryNames.C,
        "type":TerritoryTypes.Coast,
        "borders":[41,40,47],
        "army":'C'
    },
    {
        "id":47,
        "name":'47',
        "location":47,
        "capital": null,
        "country":CountryNames.D,
        "type":TerritoryTypes.Coast,
        "borders":[41,46,48],
        "army":'D'
    },
    {
        "id":48,
        "name":'48',
        "location":48,
        "capital": null,
        "country":CountryNames.D,
        "type":TerritoryTypes.Coast,
        "borders":[42,41,47,49],
        "army":'D'
    },
    {
        "id":49,
        "name":'49',
        "location":49,
        "capital": CapitalTypes.City,
        "country":CountryNames.D,
        "type":TerritoryTypes.Land,
        "borders":[43,48,50],
        "army":'D'
    },
    {
        "id":50,
        "name":'50',
        "location":50,
        "capital": CapitalTypes.City,
        "country":CountryNames.D,
        "type":TerritoryTypes.Land,
        "borders":[44,49],
        "army":'D'
    }
];