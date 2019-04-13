(function () {
  var p = document.getElementById('text');

  var questions = [
    'Hello world.',
    'Get out of the building.',
    'We are what we choose.',
    'Good code is its own best documentation.'
  ];

  var checker = [];
  var nextQuestion = function () {
    p.textContent = '';

    var rnd = Math.floor(Math.random() * questions.length);
    checker = questions[rnd].split('').map(function (q) {
      var span = document.createElement('span');
      span.textContent = q;

      p.appendChild(span);

      return span;
    });
  };
  nextQuestion();

  document.addEventListener('keydown', function (e) {
    if (e.key === checker[0].textContent) {
      checker[0].className = 'valid';
      checker.shift();

      if (checker.length === 0) {
        nextQuestion();
      }
    }
  })

})();