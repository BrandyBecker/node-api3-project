module.exports = function validateUserId(req, res, next) {
  return (req, res, next) => {
    users
      .getById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({ message: "id does not exist" });
        }
      })
      .catch(err =>
        res.status(500).json({ message: "error getting user with this ID" })
      );
  };
}