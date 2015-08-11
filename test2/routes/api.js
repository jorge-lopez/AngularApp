/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.products = function (req, res) {
  res.json(
    {
        products: [{
            id: 0,
            img: 'img/img-1.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 1,
            img: 'img/img-2.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 2,
            img: 'img/img-3.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 3,
            img: 'img/img-4.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 4,
            img: 'img/img-5.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 5,
            img: 'img/img-6.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 6,
            img: 'img/img-7.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 7,
            img: 'img/img-8.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 8,
            img: 'img/img-9.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 9,
            img: 'img/img-10.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 10,
            img: 'img/img-11.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 11,
            img: 'img/img-12.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          },
          {
            id: 12,
            img: 'img/img-13.jpg',
            title: 'Markers',
            description: 'Best Markers in the world they have this and that',
            price: 2.99
          },
          {
            id: 13,
            img: 'img/img-14.jpg',
            title: 'Plumones',
            description: 'Los mejores plumones del mundo mundial en el globo terraqueo',
            price: 1.99
          }
      ]});
};
