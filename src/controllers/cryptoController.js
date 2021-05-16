const express = require('express');
const router = express.Router();
const { getAllCrypto, getAllCryptoBySymbol } = require('../services/cryptoService')
const { JsonResponse } = require('../utils/jsonResponse');

router.get('/', async (req, res)=>{
  try {
    const allCrypto = await getAllCrypto();
    return JsonResponse(res, 200, 'Fetch Success', allCrypto );
    
  } catch (error) {
    return JsonResponse(res, 400, error.message || error.msg, null );
  }
});

router.get('/symbol/:id', async (req, res)=>{
  try {
    const symbol = req.params.id;
    const allCrypto = await getAllCryptoBySymbol(symbol);
    return JsonResponse(res, 200, 'Fetch Success', allCrypto );
    
  } catch (error) {
    return JsonResponse(res, 400, error.message || error.msg, null );
  }
});

module.exports = router;