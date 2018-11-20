module.exports = function (app) {

  app.get('/tipos', function (req, res, next) {
    var tipoDB = new app.database.Tipos(app.common.database.mysqlFactory());

    tipoDB.lista(function (erro, tipos) {
      if (erro) {
        next(erro);
        return;
      }
      res.format({
        html: function () {
          res.render('tipos/lista', {
            tipos: tipos
          });
        },
        json: function () {
          res.json(tipos);
        }
      });

    });
  });

  app.get('/tipos/form', function (req, res) {
    res.render('tipos/form', { erros: {}, tipo: {} });
  });

  app.post('/tipos/form', function (req, res, next) {
    var tipo = req.body;

    req.assert('name', 'Nome Inválido').notEmpty();
    req.assert('permanent', 'Valor inválido').notEmpty().isInt();

    var errors = req.validationErrors();
    if (errors) {
      res.format({
        html: function () {
          res.status(400).render('tipos/form', {
            erros: errors,
            tipo: tipo
          });
        },
        json: function () {
          res.status(400).json({
            erros: errors,
            tipo: tipo
          });
        }
      });
    }

    var tipoDB = new app.database.Tipos(app.common.database.mysqlFactory());
    tipoDB.salva(tipo, function (err) {
      if(!err) {
        var tipoDB = new app.database.Tipos(app.common.database.mysqlFactory());

        tipoDB.lista(function (erro, tipos) {
          app.get('io').emit('atualizaLista', tipos);
          res.redirect('/tipos');
        });
      } else {
        next(err);
      }

    });


  });
};
