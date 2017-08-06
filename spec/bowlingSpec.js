describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
    DEFAULT_SCORE = 0;
  });


  it('starts with a score of 0', function() {
    expect(game.score()).toEqual(DEFAULT_SCORE);
  });
});
