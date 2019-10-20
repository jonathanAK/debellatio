const {TerritoryTypeEnum} = require('../Enums');

const territories =[
    {
        "id":0,
        "name":'0',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[1,6],
        "troop": null
    },
    {
        "id":1,
        "name":'1',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[0,7,2],
        "troop": null
    },
    {
        "id":2,
        "name":'2',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[1,8,3],
        "troop": null
    },
    {
        "id":3,
        "name":'3',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[2,9,4],
        "troop": null
    },
    {
        "id":4,
        "name":'4',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[3,10],
        "troop": null
    },
    {
        "id":5,
        "name":'5',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[6,13],
        "troop": null
    },
    {
        "id":6,
        "name":'6',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[0,5,14,7],
        "troop": null
    },
    {
        "id":7,
        "name":'7',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[1,6,15,8],
        "troop": null
    },
    {
        "id":8,
        "name":'8',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[2,7,16,9],
        "troop": null
    },
    {
        "id":9,
        "name":'9',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[3,8,17,10],
        "troop": null
    },
    {
        "id":10,
        "name":'10',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[4,9,18,11],
        "troop": null
    },
    {
        "id":11,
        "name":'11',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[10,18,19],
        "troop": null
    },
    {
        "id":12,
        "name":'12',
        "capital": "Port",
        "country":'B',
        "type":TerritoryTypeEnum.Coast,
        "borders":[21,22,13],
        "troop": null
    },
    {
        "id":13,
        "name":'13',
        "capital": null,
        "country":'B',
        "type":TerritoryTypeEnum.Coast,
        "borders":[5,12,22,14],
        "troop": null
    },
    {
        "id":14,
        "name":'14',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[6,13,22,23,15],
        "troop": null
    },
    {
        "id":15,
        "name":'15',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[7,14,24,16],
        "troop": null
    },
    {
        "id":16,
        "name":'16',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[8,15,25,17],
        "troop": null
    },
    {
        "id":17,
        "name":'17',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[9,16,26,18],
        "troop": null
    },
    {
        "id":18,
        "name":'18',
        "capital": null,
        "type":TerritoryTypeEnum.Sea,
        "borders":[11,10,9,17,26,27,28,19],
        "troop": null
    },
    {
        "id":19,
        "name":'19',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[11,18,28,20],
        "troop": null
    },
    {
        "id":20,
        "name":'20',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[19,22,29],
        "troop": null
    },
    {
        "id":21,
        "name":'21',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[12,30,22],
        "troop": null
    },
    {
        "id":22,
        "name":'22',
        "capital": null,
        "type":TerritoryTypeEnum.Sea,
        "borders":[14,13,12,21,30,31,32,23],
        "troop": null
    },
    {
        "id":23,
        "name":'23',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[14,22,32,24],
        "troop": null
    },
    {
        "id":24,
        "name":'24',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[15,23,32,33,25],
        "troop": null
    },
    {
        "id":25,
        "name":'25',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[16,24,34,26],
        "troop": null
    },
    {
        "id":26,
        "name":'26',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[17,25,35,27],
        "troop": null
    },
    {
        "id":27,
        "name":'27',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[18,26,36,28],
        "troop": null
    },
    {
        "id":28,
        "name":'28',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[19,27,37,29],
        "troop": null
    },
    {
        "id":29,
        "name":'29',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[20,28,38],
        "troop": null
    },
    {
        "id":30,
        "name":'30',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[22,21,31],
        "troop": null
    },
    {
        "id":31,
        "name":'31',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[22,30,39,32],
        "troop": null
    },
    {
        "id":32,
        "name":'32',
        "capital": null,
        "type":TerritoryTypeEnum.Sea,
        "borders":[24,23,22,31,39,40,41,33],
        "troop": null
    },
    {
        "id":33,
        "name":'33',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[24,32,41,34],
        "troop": null
    },
    {
        "id":34,
        "name":'34',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[25,33,41,42,35],
        "troop": null
    },
    {
        "id":35,
        "name":'35',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[26,34,43,36],
        "troop": null
    },
    {
        "id":36,
        "name":'36',
        "capital":null,
        "type":TerritoryTypeEnum.Land,
        "borders":[27,35,44,37],
        "troop": null
    },
    {
        "id":37,
        "name":'37',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[28,36,45,38],
        "troop": null
    },
    {
        "id":38,
        "name":'38',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[29,37],
        "troop": null
    },
    {
        "id":39,
        "name":'39',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[32,32,40],
        "troop": null
    },
    {
        "id":40,
        "name":'40',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[32,39,46,41],
        "troop": null
    },
    {
        "id":41,
        "name":'41',
        "capital": null,
        "type":TerritoryTypeEnum.Sea,
        "borders":[34,33,32,40,46,47,48,42],
        "troop": null
    },
    {
        "id":42,
        "name":'42',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[34,41,48,43],
        "troop": null
    },
    {
        "id":43,
        "name":'43',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[35,42,49,44],
        "troop": null
    },
    {
        "id":44,
        "name":'44',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[36,43,50,45],
        "troop": null
    },
    {
        "id":45,
        "name":'45',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[37,44],
        "troop": null
    },
    {
        "id":46,
        "name":'46',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[41,40,47],
        "troop": null
    },
    {
        "id":47,
        "name":'47',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[41,46,48],
        "troop": null
    },
    {
        "id":48,
        "name":'48',
        "capital": "Port",
        "type":TerritoryTypeEnum.Coast,
        "borders":[42,41,47,49],
        "troop": null
    },
    {
        "id":49,
        "name":'49',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[43,48,50],
        "troop": null
    },
    {
        "id":50,
        "name":'50',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[44,49],
        "troop": null
    }
];

module.exports = JSON.stringify(territories);