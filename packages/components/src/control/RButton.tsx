import {Button, ButtonProps} from "@mantine/core";

interface RButtonProp extends ButtonProps{

}

const RButton = (prop:RButtonProp)=>{
    console.log(prop)
    return (
        <>
            <Button />
        </>
    )
}

export {RButton};
export type { RButtonProp };
