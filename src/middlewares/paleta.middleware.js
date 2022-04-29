const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.flavor ||
    !paleta.description ||
    !paleta.price ||
    !paleta.photo
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos preenchidos!' });
  }
  next();
};

const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;
  carrinho.forEach((item) => {
    if (!item || !item.paletaId || !item.quantity) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos preenchidos!' });
    }
  });
  next();
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
};
