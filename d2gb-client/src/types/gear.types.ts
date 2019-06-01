export enum eGearType {
    Mask,
    Backpack,
    Chest,
    Gloves,
    Holster,
    KneePads,
}

export enum eWeaponType {
    AssaultRifle,
    MarksmanRifle,
    LightMachineGun,
    SubMachineGun,
    Shotgun,
    Rifle,
    Pistol,
}

export enum eGadgetType {
    Pulse,
    Turret,
    Hive,
    ChemLauncher,
    Firefly,
    SeekerMine,
    Drone,
    Shield,
}

export type tEquipmentType = eGearType | eWeaponType | eGadgetType;
