import { useState, useEffect } from 'react';
import { ecgList } from './quizData.js';
import ImageGraph from './ImageGraph.jsx';
import QuizOption from './QuizOptions.jsx';


export default function Quiz() {
  const [ecgIndex, setEcgIndex] = useState(0);
  const [seed, setSeed] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  let choices = [0, 1, 2];

  const [state, setState] = useState(0);

  const hasNext = ecgIndex < ecgList.length - 1;
  const hasPrevious = ecgIndex > 0;
  const isLastAnswered = state == 1 && !hasNext;

  let offset = ecgIndex + 5 < ecgList.length - 1 ? 0 : -10;
  choices = [ecgIndex, ecgIndex + offset + 1, ecgIndex + offset + 2]
  shuffleArray(choices);

  let wrongAnswers = [{}];
  
  const resetGraph = () => {
    setSeed(Math.random());
  };

  let ecg = ecgList[ecgIndex];

  function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }

  let rightAnswer = "";

  if (state == 1) {
    rightAnswer = isCorrect ? "Vastasit oikein." : "Vastauksesi on väärä. Oikea vastaus on: " + ecg.name;
  }

  function handleNextEcgClick(selected) {

    if (state == 0) {
      const correct = selected == ecgIndex;
      setIsCorrect(correct);
      if (correct) {
        setScore(score + 1);
      }
      setState(1);
    }
    else if (hasNext) {
      resetGraph();
      setState(0);
      setEcgIndex(ecgIndex + 1);
    }
    else if (!showResults) {
      setShowResults(true);
    }
    else {
      // restart the quiz
      shuffleArray(ecgList);
      resetGraph();
      setScore(0);
      setIsCorrect(false);
      setState(0);
      setEcgIndex(0);
      setShowResults(false);
    }
  }

  // function handlePreviousEcgClick() {
  //   resetGraph();

  //   let target;
  //   target = hasPrevious ? ecgIndex - 1 : ecgList.length - 1;
  //   setEcgIndex(target);
  // }

  useEffect(() => {
    shuffleArray(ecgList);
    resetGraph();
  }, []);

  const listItems = wrongAnswers.map(entry =>
    <li>
      <p>
        {entry.name}
      </p>
    </li>
  );

  if (showResults) {
    return (
      <>
        <div class="galleryDiv">

          <a href="/ecg-app/" class="button">
            <span class="material-symbols-rounded">chevron_backward</span> Aloitussivulle
          </a>

          <br/>
          <br/>

          <h2>Testi suoritettu!</h2>

          <p>{score}/{ecgList.length} p.</p>

          <p>Kiitos osallistumisesta.</p>

          <p/>
        </div>

        <p/>

        <QuizOption state={state} callback={handleNextEcgClick} ecgList={ecgList} choices={choices} label="Aloita alusta"></QuizOption>
      </>
    );
  }

  return (
    <>
      <div class="galleryDiv">

        <a href="/ecg-app/" class="button">
          <span class="material-symbols-rounded">chevron_backward</span> Aloitussivulle
        </a>

        <br/>
        <br/>

        <div class="graphDiv">
          <ImageGraph data={ecg.pages[ecg.pages.length - 1]} key={seed} client:only="react" />
        </div>

        <p/>

        <p>{rightAnswer}</p>

        <p/>
      </div>

      <p/>


      <QuizOption state={state} callback={handleNextEcgClick} ecgList={ecgList} choices={choices} label={isLastAnswered ? 'Näytä tulokset' : 'Seuraava'}></QuizOption>

      <p/>

      {ecgIndex + 1} / {ecgList.length}
    </>
  );

  
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}