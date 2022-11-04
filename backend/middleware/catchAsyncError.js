module.exports = theF => (req, res, next) => {
    Promise.resolve(then(req, res, next)).catch(next)
}