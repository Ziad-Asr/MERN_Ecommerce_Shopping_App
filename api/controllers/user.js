exports.getTest = (req, res) => {
  res.send("User Test");
};

exports.postTest = (req, res) => {
  const userName = req.body.userName;

  res.send(`Your username is ${userName}`);
};
