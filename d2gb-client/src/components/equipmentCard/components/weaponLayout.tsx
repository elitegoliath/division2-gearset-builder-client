import React from 'react'
import { Image } from 'semantic-ui-react'
import { Weapon } from '../../../models/weapon.model'

interface iWeaponLayout {
    weaponModel: Weapon
}

export const WeaponLayout = (_props: iWeaponLayout) => {
    const { weaponModel } = _props

    return (
        <div className='equipment-card-layout'>
            <div className='equipment-card-layout__gear-icon'>
                <Image src={weaponModel.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    )
}