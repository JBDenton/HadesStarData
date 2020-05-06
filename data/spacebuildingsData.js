// generated by e:\projects\HadesStarData\generateGameData.js
// at Thu May 07 2020

let spacebuildingsData = {
  Shipyard: {
    Name: "Shipyard",
    TID: "TID_BUILDING_SHIPYARD",
    TID_Description: "TID_BUILDING_SHIPYARD_DESCR",
    Model: "shipyard",
    Cost: [800, 1000, 5000, 20000, 80000, 200000, 500000, 1000000, 2000000, 5000000],
    maxLevel: 10,
    MoveHydrogenCostPerSector: 1000,
    TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_SHIPYARD",
    ConstructionTimeSeconds: 5,
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    ShipyardCapacity: [4, 5, 7, 8, 10, 12, 13, 14, 15, 16],
    BuildNotifMode: 0,
    ShowInStarLinks: 1,
    ConstructionTimeMinutes: [1, 30],
    ConstructionTimeHours: [1, 8, 24, 48, 72, 96, 120],
  },
  ShortRangeScanner: {
    Name: "ShortRangeScanner",
    TID: "TID_BUILDING_SHORT_RANGE_SCANNER",
    TID_Description: "TID_BUILDING_SHORT_RANGE_SCANNER_DESCR",
    Model: "radar",
    Cost: [500, 10000, 20000, 40000, 80000, 150000, 300000, 600000, 1000000, 2000000, 3000000, 4000000],
    SectorUnlockTime: [3600, 28800, 57600, 86400, 129600, 172800, 259200, 345600, 432000, 518400, 604800, 604800],
    maxLevel: 12,
    CanCancelBuild: 1,
    CancelBuildRefundPct: 90,
    SeparateBuildingPerLevel: 1,
    AllowAdditionalBuildingsAtMaxLevel: 1,
    MoveHydrogenCostPerSector: 500,
    AllowMoveInSameSectorOnly: 1,
    SectorUnlockCost: [2500, 10000, 20000, 40000, 80000, 150000, 300000, 600000, 1000000, 2000000, 3000000, 4000000],
    ConstructionTimeMinutes: 1,
    RequiresEmptySector: 0,
    MaxPerSector: 1,
    CanScanSectors: 1,
    BuildNotifMode: 2,
    ConstructionTimeHours: [4, 12, 24, 24, 24, 24, 24, 24, 24, 24, 24],
  },
  RedStarScanner: {
    Name: "RedStarScanner",
    TID: "TID_BUILDING_REDSTAR_SCANNER",
    TID_Description: "TID_BUILDING_REDSTAR_SCANNER_DESCR",
    Model: "redStarScanner",
    Cost: [1000, 2000, 20000, 60000, 120000, 250000, 1000000, 2000000, 4000000, 8000000],
    maxLevel: 10,
    MoveHydrogenCostPerSector: 1000,
    TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_MISSION_BUILDING",
    ConstructionTimeSeconds: 3,
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    StarScannerType: 0,
    StargateModel: "JumpGate",
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
    ConstructionTimeMinutes: 30,
    ConstructionTimeHours: [4, 24, 48, 72, 96, 120, 144, 168],
  },
  ResearchStation: {
    Name: "ResearchStation",
    TID: "TID_BUILDING_RESEARCH",
    TID_Description: "TID_BUILDING_RESEARCH_DESCR",
    Model: "ResearchStation",
    Cost: 1000,
    maxLevel: 1,
    MoveHydrogenCostPerSector: 200,
    TID_CUSTOM_TUT_SELECT: "TID_TUT_SELECT_RESEARCH_STATION",
    ConstructionTimeSeconds: 5,
    ResearchSlots: 4,
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
  },
  DiplomacyCenter: {
    Name: "DiplomacyCenter",
    TID: "TID_BUILDING_DIPLOMACY_CENTER",
    TID_Description: "TID_BUILDING_DIPLOMACY_CENTER_DESCR",
    Model: "embassy",
    Cost: [25000, 500000, 4000000],
    maxLevel: 3,
    SeparateBuildingPerLevel: 1,
    MoveHydrogenCostPerSector: 2000,
    ConstructionTimeHours: [8, 120, 240],
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 3,
    MaxPerSector: 1,
    StargateModel: "JumpGate",
    BuildNotifMode: 3,
    ShowInStarLinks: 1,
  },
  TradingStation: {
    Name: "TradingStation",
    TID: "TID_BUILDING_TRADINGSTATION",
    TID_Description: "TID_BUILDING_TRADINGSTATION_DESCR",
    Model: "trade_station",
    Cost: [60000, 120000, 250000, 500000, 1000000, 2000000, 3000000, 4000000, 6000000, 8000000],
    maxLevel: 10,
    CanBeRenamed: 1,
    MoveHydrogenCostPerSector: 3000,
    ConstructionTimeHours: [24, 48, 96, 120, 144, 168, 192, 216, 240, 264],
    TotalShipmentCRPerDay: [5000, 7000, 9800, 13720, 19208, 26891, 37647, 52705, 73787, 103301],
    RequiresEmptySector: 1,
    MaxOnOwnSolarSystem: 3,
    MaxPerSector: 1,
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
  },
  WarpLaneHub: {
    Name: "WarpLaneHub",
    TID: "TID_BUILDING_WARPLANE_HUB",
    TID_Description: "TID_BUILDING_WARPLANE_HUB_DESCR",
    Cost: [50000, 50000, 100000, 100000, 200000, 200000, 400000, 400000, 800000, 800000, 1500000, 1500000, 3000000, 3000000, 5000000, 5000000, 6000000, 6000000, 7000000, 7000000, 8000000, 8000000],
    maxLevel: 22,
    SeparateBuildingPerLevel: 1,
    AllowAdditionalBuildingsAtMaxLevel: 1,
    BuyInPairs: 1,
    MoveHydrogenCostPerSector: 2000,
    PrefabModel: "warpLaneHub",
    PrefabModel_BuildMenu: "warpLaneHub_BuildIcon",
    ConstructionTimeHours: [12, 12, 24, 24, 48, 48, 72, 72, 96, 96, 120, 120, 144, 144, 168, 168, 192, 192, 216, 216, 240, 240],
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 24,
    MaxPerSector: 8,
    OverrideMinAsteroidDistSquared: 1000000,
    BuildNotifMode: 1,
  },
  Stargate: {
    Name: "Stargate",
    TID: "TID_BUILDING_STARGATE",
    TID_Description: "TID_BUILDING_STARGATE_DESCR",
    maxLevel: 1,
    RequiresEmptySector: 0,
    OverrideMinAsteroidDistSquared: 1000000,
    StargateModel: "JumpGate",
  },
  OrangeStarScanner: {
    Name: "OrangeStarScanner",
    TID: "TID_BUILDING_ORANGESTAR_SCANNER",
    TID_Description: "TID_BUILDING_ORANGESTAR_SCANNER_DESCR",
    Model: "redStarScanner",
    Cost: 40000,
    maxLevel: 1,
    MoveHydrogenCostPerSector: 1000,
    ConstructionTimeHours: 24,
    RequiresEmptySector: 1,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    StarScannerType: 1,
    StargateModel: "JumpGate",
  },
  WhiteStarScanner: {
    Name: "WhiteStarScanner",
    TID: "TID_BLD_WHITESTAR_SCANNER",
    TID_Description: "TID_BLD_WHITESTAR_SCANNER_DESCR",
    Model: "whiteStarScanner",
    Cost: 25000,
    maxLevel: 1,
    MoveHydrogenCostPerSector: 1000,
    ConstructionTimeSeconds: 1,
    RequiresEmptySector: 1,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    StargateModel: "JumpGateWhiteStar",
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
  },
  TimeModulator: {
    Name: "TimeModulator",
    TID: "TID_BLD_TIME_MODULATOR",
    TID_Description: "TID_BLD_TIME_MODULATOR_DESCR",
    Cost: [1000, 4000, 10000, 30000, 100000, 200000, 400000, 600000, 800000, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000],
    maxLevel: 16,
    MoveHydrogenCostPerSector: 1000,
    AllowMoveInSameSectorOnly: 1,
    PrefabModel: "timeModulator",
    PrefabModel_BuildMenu: "timeModulator_BuildIcon",
    TimeSpeedupFactor: [15000, 17500, 20000, 22500, 25000, 27500, 30000, 32500, 35000, 37500, 40000, 42500, 45000, 50000, 55000, 60000],
    TimeSpeedupMaxSeconds: 600,
    TimeSpeedupRegenPerDay: 1200,
    ConstructionTimeMinutes: 10,
    RequiresStarSector: 1,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
    ConstructionTimeHours: [1, 8, 48, 96, 120, 144, 168, 192, 216, 240, 240, 240, 240, 240, 240],
  },
  BlueStarScanner: {
    Name: "BlueStarScanner",
    TID: "TID_BUILDING_BLUESTAR_SCANNER",
    TID_Description: "TID_BUILDING_BLUESTAR_SCANNER_DESCR",
    Model: "blueStarScanner",
    Cost: 20000,
    maxLevel: 1,
    MoveHydrogenCostPerSector: 1000,
    ConstructionTimeSeconds: 3,
    RequiresEmptySector: 0,
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    StarScannerType: 1,
    StargateModel: "JumpGate",
    BuildNotifMode: 1,
    ShowInStarLinks: 1,
  },
  ShipmentRelay: {
    Name: "ShipmentRelay",
    TID: "TID_BLD_RELAY",
    TID_Description: "TID_BLD_RELAY_DESCR",
    Model: "shipmentRelay",
    Cost: [10000, 25000, 50000, 100000, 200000, 400000, 600000, 1000000, 4000000, 8000000],
    maxLevel: 10,
    MoveHydrogenCostPerSector: 1000,
    ConstructionTimeHours: [4, 24, 48, 72, 96, 120, 144, 168, 192, 216],
    MaxOnOwnSolarSystem: 1,
    MaxPerSector: 1,
    TeleportShipmentsPerHr: [4, 5, 7, 9, 12, 16, 22, 30, 42, 60],
    TeleportShipmentsDurationHr: [4, 5, 6, 8, 10, 12, 16, 17, 20, 24],
    TeleportShipmentActivationFragments: [5, 4, 4, 4, 4, 4, 4, 3, 3, 3],
    FragmentCapacity: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    TeleportShipmentMaxSectors: [1, 2, 3, 4, 5, 6, 8, 11, 14, 18],
    TSHydroCost: [50, 100, 250, 500, 750, 1000, 2000, 3000, 4000, 5000],
    BuildNotifMode: 0,
    ShowInStarLinks: 1,
  },
};

export { spacebuildingsData };
