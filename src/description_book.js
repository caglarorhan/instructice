let descriptions = {
    version: "1.0.0",
    types: {
        shape:{
            type:String,
            text:String
        },
        text:{
            value:String,
        },
        image:{},
        video:{},
        audio:{},
        animation:{}
        },
    animations:{
        drop:"drop",
        fade:"fade",
        slide:"slide",
        pop:"pop",
        rotate:"rotate",
        scale:"scale",
        flip:"flip",
        bounce:"bounce",
        shake:"shake",
        swing:"swing",
        roll:"roll",
        pulse:"pulse",
        flash:"flash",
        wobble:"wobble",
        tada:"tada",
        heartBeat:"heartBeat",
        rubberBand:"rubberBand",
        jello:"jello",
        bounceIn:"bounceIn",
        bounceInDown:"bounceInDown",
        bounceInLeft:"bounceInLeft",
        bounceInRight:"bounceInRight",
        bounceInUp:"bounceInUp",
        bounceOut:"bounceOut",
        bounceOutDown:"bounceOutDown",
        bounceOutLeft:"bounceOutLeft",
        bounceOutRight:"bounceOutRight",
        bounceOutUp:"bounceOutUp",
        fadeIn:"fadeIn",
        fadeInDown:"fadeInDown",
        fadeInDownBig:"fadeInDownBig",
        fadeInLeft:"fadeInLeft",
        fadeInLeftBig:"fadeInLeftBig",
        fadeInRight:"fadeInRight",
        fadeInRightBig:"fadeInRightBig",
        fadeInUp:"fadeInUp",
        fadeInUpBig:"fadeInUpBig",
        fadeOut:"fadeOut",
        fadeOutDown:"fadeOutDown",
        fadeOutDownBig:"fadeOutDownBig",
        fadeOutLeft:"fadeOutLeft",
        fadeOutLeftBig:"fadeOutLeftBig",
        fadeOutRight:"fadeOutRight",
        fadeOutRightBig:"fadeOutRightBig",
        fadeOutUp:"fadeOutUp",
        fadeOutUpBig:"fadeOutUpBig",
        flipInX:"flipInX",
        flipInY:"flipInY",
        flipOutX:"flipOutX",
        flipOutY:"flipOutY",
        lightSpeedIn:"lightSpeedIn",
        lightSpeedOut:"lightSpeedOut",
        rotateIn:"rotateIn",
        rotateInDownLeft:"rotateInDownLeft",
        rotateInDownRight:"rotateInDownRight",
        rotateInUpLeft:"rotateInUpLeft",
        rotateInUpRight:"rotateInUpRight",
        rotateOut:"rotateOut",
        rotateOutDownLeft:"rotateOutDownLeft",
        rotateOutDownRight:"rotateOutDownRight",
        rotateOutUpLeft:"rotateOutUpLeft",
        rotateOutUpRight:"rotateOutUpRight",
        slideInDown:"slideInDown"
    },
    come_with: {
        load:{
            after:Event,
            target:HTMLElement
        },
        ordered: {
            delay:Number,
        },
        random:{
            position:{
                x:Number,
                y:Number
            }
        },
        withPrevious:{
            instructionId:String
        },
        withNext:{
            instructionId:String
        }
    }
}
export default descriptions;
