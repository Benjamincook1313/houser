import { createStore} from 'redux'

const initialState ={
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  imageUrl: '',
  monthlyMortgage: 0,
  desiredMortgage: 0
}

export const UPDATE_STEP1 = 'UPDATE_STEP1'

function reducer(state = initialState, action){
  const {type, payload} = action 
  switch(type) {
    case UPDATE_STEP1:
      return {...state, 
        name: payload.name, 
        address: payload.address, 
        city: payload.city,
        state: payload.state,
        zip: payload.state}
    default:
      return state
  }
}

export default createStore(reducer)