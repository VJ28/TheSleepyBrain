exports.get = async function (req, res) {
  try {
    const [rows, fields] = await req.connection.query(
      "Select b.authorname, b.title, b.url, b.views, bc.contenttype, bc.content, b.readtime, b.entrydate " +
        "from blog b " +
        "inner join blogcontent bc " +
        "on b.id = bc.blogid " +
        "and b.url = '" +
        req.params.title +
        "' " +
        "order by bc.sequence;"
    );
    return { details: rows ? rows[0] : [] };
  } catch {
    return "";
  }
  return "";
};

exports.getAll = async function (req, res) {
  try {
    const [results, fields] = await req.connection.query(
      "Select title, url, views, readtime, entrydate from blog order by entrydate desc;"
    );
    return { listing: results || [] };
  } catch {
    return "";
  }
};
