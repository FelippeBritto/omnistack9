const User = require('../models/User');
//Métodos:
//index = retorna listagem de sessões 
//show = lista uma única sessão
//store = cria sessão
//update = altera sessão
//destroy = deleta sessão

module.exports = {
   //Todos os métodos do controller vão aqui dentro
   async store(req, res) {
      const { email } = req.body;

      let user = await User.findOne({ email });

      if (!user) {
         user = await User.create({ email });
      }
      // const user = await User.create({ email });

      return res.json(user);
   }
}