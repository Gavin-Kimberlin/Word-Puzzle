$(document).ready(function () {
  $('form.sentence').submit(function (event) {
    event.preventDefault();
    vowels = ['a', 'e', 'i', 'o', 'u'];
    var userInput = [];
    $('#result').empty();
    var userInput = ($('#sentenceInput').val()).split('');
    for (index = 0; index < userInput.length; index++) {
      console.log(userInput[index]);

      if (vowels.includes(userInput[index])) {
        userInput.splice(index, 1, '-');
      }
    };

    var output = userInput.join('');
    $('h1#result').append(output);
  });
});
