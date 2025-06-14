class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    err = [],
    stack = ""
  ){
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.message = message;
    this.err = err;

    if(stack) {
      this.stack = stack;
    }else{
        Error.captureStackTrace(this, this.constructor);
    }

  }
}


export {ApiError}