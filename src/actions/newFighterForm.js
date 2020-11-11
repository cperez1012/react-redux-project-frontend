// import FighterCard from "../components/FighterCard.js"

// sync action
export const updateNewFighterForm = (name, value) => {
    // console.log(name, value)
    const formData = { name, value }
    debugger
    return {
        type: "UPDATE_NEW_FIGHTER_FORM",
        formData
    }
}

export const resetFighterForm = () => {
    return {
        type: "RESET_NEW_FIGHTER_FORM",
    }
}

export const setFighterDataForEdit = fighter => {
    debugger
    const fighterFormData = {
        name:  fighter.attributes.name,
        alias:  fighter.attributes.alias,
        nationality:  fighter.attributes.nationality,
        division:  fighter.attributes.division,
        stance:  fighter.attributes.stance,
        champion:  fighter.attributes.champion,
        height:  fighter.attributes.height,
        reach:  fighter.attributes.reach,
        status:  fighter.attributes.status,
        win:  fighter.attributes.win,
        loss:  fighter.attributes.loss,
        draw:  fighter.attributes.draw,
        ko:  fighter.attributes.ko,

    }
    return {
        type: "SET_FIGHTER_DATA_FOR_EDIT",
        fighterFormData
    }
}