const userrRouter = require('./user')

const initRoutes = (app) => {
    app.use('/api/', userrRouter)
}
module.exports = initRoutes

