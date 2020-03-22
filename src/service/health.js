const router = require('express').Router();
const { logger } = require('../lib');
const Health = require('../models/health/Health');

const healthCheck = async (req, res) => {
  const healthInstance = Health.create();
  healthInstance.status = true;
  healthInstance.message = "Service is up!"
  healthInstance.date = new Date().toISOString();
  res.json(healthInstance.toJSON());
};

router.route('/').get(healthCheck);

module.exports = router;
// Swagger Definitions
/**
* @swagger
* path:
*   /health:
*     get:
*       description: get health update
*       responses:
*         200:
*           description: service up and running.
*           schema:
*             type: object
*             properties:
*               state:
*                 type: boolean
*                 description: Working state
*               message:
*                 type: string
*                 description: Message to indicate status
*               date:
*                 type: string
*                 description: The present date time in ISO format
*/
