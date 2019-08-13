import { Armor } from '../../../models/armor.model'
import { Image } from 'semantic-ui-react'

interface iArmorLayout {
    armorModel: Armor
}

export const ArmorLayout = (_props: iArmorLayout) => {
    const { armorModel } = _props

    return (
        <div className='equipment-card-layout'>
            <div className='equipment-card-layout__gear-icon'>
                <Image src={armorModel.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    )
}