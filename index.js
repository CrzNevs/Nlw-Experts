const perguntas = [
    {
      pergunta: "Quem é o protagonista principal da série Devil May Cry?",
      respostas: [
        "A) Dante",
        "B) Vergil",
        "C) Nero",
      ],
      correta: 0 // Resposta correta é A) Dante
    },
    {
      pergunta: "Qual é o nome da arma característica de Dante em Devil May Cry?",
      respostas: [
        "A) Rebellion",
        "B) Yamato",
        "C) Red Queen",
      ],
      correta: 0 // Resposta correta é A) Rebellion
    },
    {
      pergunta: "Qual é o nome da loja administrada por Dante em Devil May Cry?",
      respostas: [
        "A) Devil May Cry",
        "B) Devil's Lair",
        "C) Devil's Workshop",
      ],
      correta: 0 // Resposta correta é A) Devil May Cry
    },
    {
      pergunta: "Qual é o nome do irmão gêmeo de Dante em Devil May Cry?",
      respostas: [
        "A) Vergil",
        "B) Nero",
        "C) Sparda",
      ],
      correta: 0 // Resposta correta é A) Vergil
    },
    {
      pergunta: "Qual é o nome da organização demoníaca que Dante enfrenta em Devil May Cry?",
      respostas: [
        "A) The Order of the Sword",
        "B) The Brotherhood of Blood",
        "C) The Order of the Sword",
      ],
      correta: 2 // Resposta correta é C) The Order of the Sword
    },
    {
      pergunta: "Qual é a arma inicial de Nero em Devil May Cry 4?",
      respostas: [
        "A) Red Queen",
        "B) Yamato",
        "C) Blue Rose",
      ],
      correta: 2 // Resposta correta é C) Blue Rose
    },
    {
      pergunta: "Quem é o pai de Dante e Vergil em Devil May Cry?",
      respostas: [
        "A) Arkham",
        "B) Sparda",
        "C) Mundus",
      ],
      correta: 1 // Resposta correta é B) Sparda
    },
    {
      pergunta: "Qual é o nome da cidade principal em Devil May Cry?",
      respostas: [
        "A) Fortuna",
        "B) Red Grave City",
        "C) Temen-ni-gru",
      ],
      correta: 1 // Resposta correta é B) Red Grave City
    },
    {
      pergunta: "Qual é a forma demoníaca alternativa de Dante em Devil May Cry?",
      respostas: [
        "A) Devil Trigger",
        "B) Dark Slayer",
        "C) Sin Devil Trigger",
      ],
      correta: 0 // Resposta correta é A) Devil Trigger
    },
    {
      pergunta: "Qual é o nome da motocicleta de Dante em Devil May Cry 5?",
      respostas: [
        "A) Devil May Ride",
        "B) Red Queen",
        "C) Cavaliere",
      ],
      correta: 2 // Resposta correta é C) Cavaliere
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  // loop ou laço de repetição
  for(const item of perguntas) {
     const quizItem = template.content.cloneNode(true)
     quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }

      quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }