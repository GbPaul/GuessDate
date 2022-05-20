const renderChoice = () => {
  const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  let choiceOutPut = ""

  dayOfWeek.forEach((choice) => {
    choiceOutPut += `
                  <button  type="button" class="btn btn-light ml-8 btn-sm" id='select_choice' choice-id=${choice}>${choice}</button>
             `
  })

  let content = `<h3>Please select day of the week of the year display</h3>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
            id="choice"
          >
          ${choiceOutPut}
          </div>`

  return content
}

const renderGamesResults = (data) => {
  let output = ""

  data.forEach((result) => {
    output += `
               <tr>
              <th scope="row">${result.date}</th>
              <td>${result.correct_answer}</td>
              <td>${result.user_answer}</td>
              <td class="bg-${result.is_answer_correct ? "primary" : "danger"}">
                ${result.is_answer_correct ? "Correct" : "Incorrect"}
                 
              </td>
            </tr>
              `
  })

  return output
}

const calculateAndRenderTotalResults = (data, gameCount) => {
  const correct_answers = data.filter((game) => game.is_answer_correct).length
  return `
     <div class='mx-2'><h3>Total Results</h3></div>
            <div> <h4>Scored ${correct_answers} out of ${gameCount}</h4></div>`
}
