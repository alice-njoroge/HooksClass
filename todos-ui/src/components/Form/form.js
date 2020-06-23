import {useReducer} from 'react';

const fieldChange = (state, key, value)=>{
    return {
        ...state,
        [key] : value,
    }
}

const formReducer = (state, action) =>{
    switch(action.type){
        case actions.FieldChange:
            return fieldChange(state, action.key, action.value)
    }
}

const actions = {
    FieldChange : "field-change"
}

function useForm (){
    const [state, dispatch] = useReducer(formReducer, {});

    return {
        state,
        onFieldChange : (e)=>{
            dispatch({
                type: actions.FieldChange,
                key: e.target.name,
                value: e.target.value
            })

        }
    }

}