$(document).ready(function () {
  let currentRandomDate
  let gameCount = 0
  let choiceSubmited = false
  let answer_provided = false
  const games_played = []

  $("#start").click(function () {
    $.ajax({
      type: "GET",
      url: "random.php",
      dataType: "json",
      success: function (data) {
        const randomDate = `<p>${data.dateString}</p>`
        currentRandomDate = data
        $("#date").html(randomDate)
        $("#answer_container").html(renderChoice())

        choiceSubmited = false
        gameCount++
        if (gameCount > 0) {
          $("#start").html("Play again")
          $("#control_end").html(
            '<button type="button" class="btn btn-primary" id="end_game"> End Game</button>'
          )
        }
      },
    })
  })

  $("body").on("click", "#select_choice", function (event) {
    if (choiceSubmited) {
      alert(
        "You have submitted your choice for this date. Please click Play again to generate another date"
      )
      return
    }

    const userAnswer = event.currentTarget.firstChild.nodeValue
    const formData = {
      answer: userAnswer,
      gameCount: gameCount,
      date: currentRandomDate.dateString,
      correctAnswer: currentRandomDate.dayOfWeek,
    }
    $.ajax({
      url: "results.php",
      type: "POST",
      data: formData,
      async: false,
      success: function (response, textStatus, jqXHR) {
        games_played.unshift(JSON.parse(response))
        answer_provided = true
        choiceSubmited = true
        $("#game_results").html(renderGamesResults(games_played))
        $("#total_results").html(
          calculateAndRenderTotalResults(games_played, gameCount)
        )
      },
    })
  })

  $("body").on("click", "#end_game", function (event) {
    const end_game = confirm("Are you sure you want to end this game")

    if (!end_game) return

    const save_game_data = confirm("Do you want us to save this game data")

    if (save_game_data) {
      const formData = {
        score: games_played.filter((game) => game.is_answer_correct).length,
        total_games: gameCount,
      }

      $.ajax({
        type: "POST",
        url: "save_results.php",
        data: formData,
        success: function (response) {
          if (response === "success") {
            endGame()
          }
        },
      })
    } else {
      endGame()
    }
  })

  const getRecentGameResults = () => {
    $.ajax({
      type: "GET",
      url: "recent_games.php",
      async: false,
      success: function (response) {
        $("#recent_results").html(response)
      },
    })
  }

  getRecentGameResults()

  const endGame = () => {
    if (games_played.length === 0) {
      alert("You have not played any game to save")
    }
    location.reload()
  }
})
