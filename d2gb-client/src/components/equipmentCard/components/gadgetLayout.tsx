import { Gadget } from '../../../models/gadget.model'
import { Image } from 'semantic-ui-react'

interface iGadgetLayout {
    gadgetModel: Gadget
}

export const GadgetLayout = (_props: iGadgetLayout) => {
    const { gadgetModel } = _props;

    return (
        <div className='equipment-card-layout'>
            <div className='equipment-card-layout__gear-icon'>
                <Image src={gadgetModel.iconURL} size='tiny' />
            </div>
        </div>
    )
}