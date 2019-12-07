const { Router } = require("express");
const Movie = require("./model");
const router = new Router();

router.post("/movie", (request, response, next) => {
  Movie.create(request.body)
    .then(result => response.send(result))
    .catch(errors => next(errors));
});

router.get("/movie", (request, response, next) => {
  Movie.findAll()
    .then(result => response.send(result))
    .catch(errors => next(errors));
});

router.get("/movie/:id", (request, respose, next) => {
  Movie.findByPk(request.params.id)
    .then(movie => respose.send(movie))
    .catch(errors => next(errors));
});

router.put("/movie/:id", (request, response, next) =>
  Movie.findByPk(request.params.id)
    .then(movie => movie.update(request.body))
    .then(movie => response.send(movie))
    .catch(next)
);

router.delete("/movie/:id", (request, response, next) =>
  Movie.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
