import * as actionTypes from  "./actionTypes"


export const increaseCounter=() => ({
    type:actionTypes.INCREASE_Counter,
    payload:1
});

export const decreaseCounter=() => ({
    type:actionTypes.DECREASE_Counter,
    payload:1
});

export const increasebytwo_Counter=() => ({
    type:actionTypes.INCREASEBYTWO_Counter,
    payload:2
});



export const decreasebytwo_Counter=() => ({
    type:actionTypes.DECREASEBYTWO_Counter,
    payload:2
});