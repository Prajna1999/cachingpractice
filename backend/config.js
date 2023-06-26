require('dotenv').config()

const { env } = process

module.exports = {
	name:"node-cache",
	baseUrl: env.APP_BASE_URL,
    port: 3000,
    redis_url: env.REDIS_URL,
    paystack_secret_key: env.PAYSTACK_SECRET_KEY

}