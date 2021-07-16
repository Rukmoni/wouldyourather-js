const logger = (store) => (next) => (action) => {
  if(action)
  {
    console.group(action.type)

    const returnValue = next(action)

    console.groupEnd()
    return returnValue
  }
  
  }
  
  export default logger