import { useState, useEffect } from 'react';
import { ecgList } from './quizData.js';
import ImageGraph from './ImageGraph.jsx';
import QuizOption from './QuizOptions.jsx';


export default function Quiz() {
  const [ecgIndex, setEcgIndex] = useState(0);
  const [seed, setSeed] = useState(1);
  let choices = [0, 1, 2];

  const [state, setState] = useState(0);

  const hasNext = ecgIndex < ecgList.length - 1;
  const hasPrevious = ecgIndex > 0;

  let offset = ecgIndex + 5 < ecgList.length - 1 ? 0 : -10;
  choices = [ecgIndex, ecgIndex + offset + 1, ecgIndex + offset + 2]

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
    rightAnswer = "Oikea vastaus: " + ecg.name;
  }

  function handleNextEcgClick(selected) {

    // if (selected == 0) {
    //   wrongAnswers.push(ecgList[ecgIndex]);
    // }

    if (state == 0) {
      setState(1);
    }
    else {
      shuffleArray(choices);
      resetGraph();
      let target;
      target = hasNext ? ecgIndex + 1 : 0;
      setState(0);
      setEcgIndex(target);
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
  }, []);

  const listItems = wrongAnswers.map(entry =>
    <li>
      <p>
        {entry.name}
      </p>
    </li>
  );

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

      
      <QuizOption state={state} callback={handleNextEcgClick} ecgList={ecgList} choices={choices}></QuizOption>
      
      <p/>

      {ecgIndex + 1} / {ecgList.length}
    </>
  );

  
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}