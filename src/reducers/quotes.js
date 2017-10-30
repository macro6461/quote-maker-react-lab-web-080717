import uuid from 'uuid'
export const uuidFn = uuid

export default (state = [], action) => {
  debugger
  switch(action.type){
    case "ADD_QUOTE":
      return state.concat({...action.quote, quoteId: uuid()})
    case "REMOVE_QUOTE":
      const quotes = state.filter((quote)=>{
        return quote.quoteId !== action.quoteId
      })
      return quotes
    case "UPVOTE_QUOTE":
      return state.map((quote)=>{
        if (quote.quoteId === action.quoteId){
          quote.votes += 1
        }
        return quote
      })
    case "DOWNVOTE_QUOTE":
    return state.map((quote)=>{
      if (quote.quoteId === action.quoteId){
        if (quote.votes > 0){
          quote.votes -= 1
        } else {
          quote.votes = 0
        }
      }
      return quote
    })
    default:
      return state;
  }
}
