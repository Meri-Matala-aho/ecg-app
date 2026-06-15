export default function QuizOption({state, callback, ecgList, choices}) {
  if (state == 0) {
    return (
      <>
        <button onClick={() => callback(choices[0])} class="button">
          {ecgList[choices[0]].name}
        </button>
      
        <p/>
      
        <button onClick={() => callback(choices[1])} class="button">
          {ecgList[choices[1]].name}
        </button>
      
        <p/>
            
        <button onClick={() => callback(choices[2])} class="button">
          {ecgList[choices[2]].name}
        </button>
      
      
        <p/>
      </>
    );
  }
  else {
    return (
      <button onClick={() => callback(choices[0])} class="button">
          Seuraava
      </button>
    );
  }

}