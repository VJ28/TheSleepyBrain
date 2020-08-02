exports.get = async function (req, res) {
  return req.params.title;
};

exports.getAll = async function (req, res) {
  return "GetAll Implementation";
};
