const {TerritoryTypeEnum} = require('../Enums');

const territories =[
    {
        "id":0,
        "name":'0',
        "capital": "City",
        "type":TerritoryTypeEnum.Land,
        "borders":[1,3],
        "troop": null
    },
    {
        "id":1,
        "name":'1',
        "capital": null,
        "type":TerritoryTypeEnum.Coast,
        "borders":[0,4,2],
        "troop": null
    },
    {
        "id":2,
        "name":'2',
        "capital": null,
        "type":TerritoryTypeEnum.Sea,
        "borders":[1,5],
        "troop": null
    },
    {
        "id":3,
        "name":'3',
        "capital": null,
        "type":TerritoryTypeEnum.Land,
        "borders":[0,4,6],
        "troop": null
    },
    {
        "id":4,
        "name":'4',
        "capital": "City",
        "type":TerritoryTypeEnum.Coast,
        "borders":[1,2,3,5,7],
        "troop": null
    },
    {
        "id":5,
        "name":'5',
        "capital": "City",
        "type":TerritoryTypeEnum.Coast,
        "borders":[2,4,8],
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
        "capital": "City",
        "type":TerritoryTypeEnum.Coast,
        "borders":[10,18,19],
        "troop": null
    },
    {
        "id":12,
        "name":'12',
        "capital": "City",
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
        "capital": "City",
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
        "borders":[19,22],
        "troop": null
    }
];

module.exports = JSON.stringify(territories);