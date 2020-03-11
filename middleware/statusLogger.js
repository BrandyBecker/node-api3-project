module.exports = function customLogger(req,res, next){
    //Do your Magic!
    const method = req.method;
    const endPoint = req.originalUrl;
  
    console.log(`${method}: "${endPoint}"`)
    next() 
  }