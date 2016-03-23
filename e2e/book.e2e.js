var Navigation = require('./navigation.po');
var BooksPage = require('./books.po');

describe('Books', function () {

  var navigation = new Navigation();
  var booksPage = new BooksPage();

  beforeEach(function () {
    browser.get('#/');
  });

  it('should show all books', function () {
    //browser.pause();
    navigation.books.click();

    expect(booksPage.books.count()).toBe(3);

    //browser.pause();

    expect(booksPage.bookTitles.getText())
      .toEqual([
        'JavaScript für Enterprise-Entwickler',
        'Node.js & Co.',
        'Testgetriebene Entwicklung mit JavaScript'
      ]);
  });

});