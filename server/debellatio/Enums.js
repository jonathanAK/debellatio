const TerritoryTypeEnum = {
    Land:0,
    Coast:1,
    Sea:2
};

const TroopTypeEnum = {
    Platoon:0,
    Ship:1
};

exports.TerritoryTypeEnum = TerritoryTypeEnum;
exports.TroopTypeEnum = TroopTypeEnum;
exports.FactoriesProducts ={
    'City' : TroopTypeEnum.Platoon,
    'Port' : TroopTypeEnum.Ship
};
