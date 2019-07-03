export enum eEquipmentCategory {
    Weapon,  // 0
    Armor,   // 1
    Gadget,  // 2
}

export enum eGearSlot {
    PrimaryWeapon = 'primaryWeapon',      // 0
    SecondaryWeapon = 'secondaryWeapon',  // 1
    Sidearm = 'sidearm',                  // 2
    Mask = 'mask',                        // 3
    Backpack = 'backpack',                // 4
    Chest = 'chest',                      // 5
    Gloves = 'gloves',                    // 6
    Holster = 'holster',                  // 7
    Kneepads = 'kneepads',                // 8
    FirstGadget = 'firstGadget',          // 9
    SecondGadget = 'secondGadget',        // 10
}

export enum eArmorModel {
    Lomond_Medium_Breather = '"Lomond" Medium Breather',
}

export enum eGadgetModel {
    
}

export enum eWeaponType {
    Rifle,
}

export enum eArmorType {
    Mask,
    Backpack,
    Chest,
    Gloves,
    Holster,
    KneePads,
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

export enum eAttributeType {
    Offense,
    Defense,
    Utility,
}

export enum eArmorModSlotType {
    System,   // 0
    Protocol, // 1
}

export enum eStatType {
    Accuracy,          // 0
    CriticalHitDamage, // 1
    CriticalHitChance, // 2
    CooldownReduction, // 3
    Health,            // 4
    ArmorRegeneration, // 5
}

export type tPerk = {
    description?: string
    modifier?: tModifier
};

export type tModifier = {
    stat?: eStatType
    amountPercent?: number
    amountAbsolute?: number
};

export type tBrand = {
    name?: string
    iconURL?: string
    firstModifier?: tModifier
    secondModifier?: tModifier
    thirdModifier?: tModifier
};

export type tAttribute = {
    type?: eAttributeType
    iconURL?: string
    modifier?: tModifier
}

export type tRequirement = {
    lessThan?: boolean
    amount?: number
    attribute?: tAttribute
};

export type tFormSelectItem = {
    key: string
    text: string
    value: string
}

class Constants {
    public static ICON_GEAR_DEFAULT = require('./assets/images/Default_Gear_Icon.png')
    public static ICON_GEAR_BACKPACK = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FBackpack_Icon.png?alt=media&token=4acfe98f-b739-45eb-b328-01b6f280c115'
    public static ICON_GEAR_CHEST = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FChest_Icon.png?alt=media&token=b7a0a0c9-ae91-467e-8905-9c5c1942a7ba'
    public static ICON_GEAR_GADGET = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FGadget_Icon.png?alt=media&token=0ec0800e-8754-4435-b38a-4390fbd54c6d'
    public static ICON_GEAR_GLOVES = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FGloves_Icon.png?alt=media&token=87039b88-33e8-40e5-846c-027e113e0204'
    public static ICON_GEAR_HOLSTER = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FHolster_Icon.png?alt=media&token=eb413e0c-dbfd-4914-8c69-1b504c3cc05a'
    public static ICON_GEAR_KNEEPADS = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FKneepads_Icon.png?alt=media&token=161cadf0-2896-4ff9-8b1b-4fe9216fafe5'
    public static ICON_GEAR_MASK = 'https://firebasestorage.googleapis.com/v0/b/division2-gearset-builder.appspot.com/o/images%2Ficons%2FMask_Icon.png?alt=media&token=e6d4d5d0-98ab-4a39-a23c-98ae73da3149'
}

export default Constants