const Mock=require('mockjs');

let db=Mock.mock({
  'data|3-6':[{
    id:'@id',
    name:'@name',
    'age|18-32':1
  }]
});

module.exports={
  [`GET /api/users`](req,res){

    res.status(200).json(db);
  },

  [`POST /api/users`](req,res){

    let user=req.body;
    user.id=Mock.mock('@id');
    db.data.push(user);

    res.status(200).json(user);
  }
}
