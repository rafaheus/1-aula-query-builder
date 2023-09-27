// app.get('/', async (req, res) => {
    //     const quantidadeDeMedicamentos = await knex('farmacia').count();
    //     return res.json(quantidadeDeMedicamentos);
    //  });
    
    //  app.get('/', async (req, res) => {
    //      const usuarioMaisNovo = await knex('usuarios').min('idade').debug();
    //      return res.json(usuarioMaisNovo);
    //   });
    
    //  app.get('/', async (req, res) => {
    //      const somaCategoria = await knex('farmacia').select('categoria').whereNotNull('categoria').sum('estoque').groupBy('categoria');
    //      return res.json(somaCategoria);
    //   });
    
    //  app.get('/', async (req, res) => {
    //     //  const quantidadeDeMedicamentosNull = await knex('farmacia').select('medicamento').whereNull('categoria').count().groupBy('medicamento');
    //      const quantidadeDeMedicamentosNull = await knex('farmacia').whereNull('categoria').count()
    //      return res.json(quantidadeDeMedicamentosNull);
    //   });
    
    //  app.get('/', async (req, res) => {
    //      const quantidadeCategoria = await knex('farmacia').select('categoria').whereNotNull('categoria').count('estoque').groupBy('categoria');
    //      return res.json(quantidadeCategoria);
    //   });
    