module.exports = function validatePost(req,res,next){
    return (req, res, next) => {
      resource = {
        text: req.body.text,
        user_id: req.params.id
      };
  
      if (!req.body.text) {
        return res.status(404).json({ message: "missing post data" });
      } else {
        req.text = resource;
        next();
      }
    };
  }