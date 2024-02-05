function Carousel({content, updateApp, currentIndex, previousIndex, direction}) {
  function showNext(index) {
    let prevIndex =
      index < 0
        ? 0
        : index === content.length
        ? content.length - 1
        : index;
    let currentIndex = index + 1 === content.length ? 0 : index + 1;
    updateApp({ currentIndex: currentIndex, previousIndex: prevIndex, direction: 1 });
  }

  function showPrevious(index) {
    let prevIndex = index < 0 ? 0 : index;
    let currentIndex = index - 1 < 0 ? content.length - 1 : index - 1;
    updateApp({ currentIndex: currentIndex, previousIndex: prevIndex, direction: -1 });
  }

  return (
    <div
      className={"carousel carousel-topic--" + content[currentIndex][0]}
    >
      <div
        onClick={() => showPrevious(currentIndex)}
        className="controls controls--back"
      >
        <span />
      </div>

      <Card currentIndex={currentIndex} previousIndex={previousIndex} content={content} direction={direction}/>

      <div
        onClick={() => showNext(currentIndex)}
        className="controls controls--next"
      >
        <span />
      </div>
    </div>
  );
}

function Card({currentIndex, previousIndex, content, direction}) {
  let back = true
  if(previousIndex < 0){
    back=false
  }
  return (
    <div className={"card-wrapper card-wrapper--" + content[currentIndex][0]}>
      <div
        key={content[currentIndex][0]}
        className={
          "card card--active" +
          (direction < 0 ? " slide-left" : " slide-right")
        }
      >
        <div className="image-container">
          <img src={content[currentIndex][3]} alt={content[currentIndex][0] + " label"}/>
        </div>
        <div className="card-content">
          <h3>
          {content[currentIndex][1]}
          </h3>
          <p>
            {content[currentIndex][2]}
          </p>
          <div className="card-tags">
            {content[currentIndex][4].map((tag, index) => (
        <button
          key={index} 
          className="card-tagbutton">
          {tag}
        </button>
      ))}
          </div>
        </div>
      </div>

      {back && (
        <div
          key={content[previousIndex][0]}
          className={
            "card card--prev" +
            (direction < 0 ? " slide-left" : " slide-right")
          }
        >
        <div className="image-container">
          <img src={content[previousIndex][3]} alt={content[previousIndex][0] + " label"} />
        </div>
        <div className="card-content">
          <h3>
          {content[previousIndex][1]}
          </h3>
          <p>
          {content[previousIndex][2]}
          </p>
          <div className="card-tags">
            {content[previousIndex][4].map((tag, index) => (
            <button
              key={index} 
              className="card-tagbutton">
              {tag}
            </button>
            ))}
          </div>

        </div>
        </div>
      )}
    </div>
  );
}

export default Carousel