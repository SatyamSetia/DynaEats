const generateResponse = (payload, errorMessage) => {
  let response = {
    errorMessage: errorMessage,
    data: payload
  }

  if(errorMessage!=null) {
    response.error = true;
  } else {
    response.error = false;
  }

  return response
}

export default generateResponse
