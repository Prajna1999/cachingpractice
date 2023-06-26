"use strict";
const redis=require('redis');
const config=require('./config');
const redisClient=redis.createClient({
  url:config.redis_url
});
const {promisify}=require('util');
try{
  redisClient.getAsync=promisify(redisClient.get).bind(redisClient);
  redisClient.getAsync = promisify(redisClient.get).bind(redisClient);
    redisClient.setAsync = promisify(redisClient.set).bind(redisClient);
    redisClient.lpushAsync = promisify(redisClient.lpush).bind(redisClient);
    redisClient.lrangeAsync = promisify(redisClient.lrange).bind(redisClient);
    redisClient.llenAsync = promisify(redisClient.llen).bind(redisClient);
    redisClient.lremAsync = promisify(redisClient.lrem).bind(redisClient);
    redisClient.lsetAsync = promisify(redisClient.lset).bind(redisClient);
    redisClient.hmsetAsync = promisify(redisClient.hmset).bind(redisClient);
    redisClient.hmgetAsync = promisify(redisClient.hmget).bind(redisClient);
    redisClient.clear = promisify(redisClient.del).bind(redisClient);

  
}catch(error){
  console.log('redis error', error);
  throw error;
}
redisClient.on("connected", ()=>{
  console.log("Redis is connected");
})

redisClient.on("error",()=>{
  console.log("redis error", err);
} );

setInterval(()=>{
  console.log("Keeping alive-Node");
  redisClient.set('ping', 'pong');
}, 1000*60*4);

global.cache=redisClient;
module.exports=redisClient;