exports.home = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Name: <Input type="text"/>
    <button>Send</Button>
    </form>
    
    `);
};

exports.homePost = (req, res) => {
  res.send("posted");
};
