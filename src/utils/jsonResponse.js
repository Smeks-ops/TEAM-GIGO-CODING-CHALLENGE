const JsonResponse = (res, status, msg, data) =>{
  res.status(status).send({status,msg,data});
  return
}

module.exports = { JsonResponse};