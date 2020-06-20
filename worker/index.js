const keys = require('./keys');
const redis = require('redis');
const { redisPort } = require('./keys');

const redisClient = redis.createClient({
	host: keys.redisHost,
	port: redisPort,
	retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();
