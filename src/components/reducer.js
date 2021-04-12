

export default function reducer(state = {input: ""}, action) {

    return {input: action.type};
}