const userrRouter = require('./user')

const initRoutes = (app) => {
    app.use('/api/user', userrRouter)
}
module.exports = initRoutes