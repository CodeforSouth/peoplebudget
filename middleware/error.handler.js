/**
 * @module errorHandler
 */
/**
 * Express Middleware to handles errors that are generated by the controller logic
 * @name ErrorHandler
 * @memberof module:errorHandler
 * @function
 * @param {Object} err - Error object
 * @param {Object} req - Request Object
 * @param {Object} res - Response Object
 * @param {Function} next - Function that passes the context onto the next express middleware
 */
const errorHandler = (err, req, res, next) => {
  console.log("Error:", err.message);
  res.send({ error: err.message });
};

module.exports = { errorHandler };
