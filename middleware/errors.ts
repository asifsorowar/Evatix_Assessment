export default (error) => {
  if (error.name == "ValidationError") {
    return error.errors[Object.keys(error.errors)[0]].message;
  }
};
