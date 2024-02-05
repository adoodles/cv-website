
function CarouselDots({content, currentIndex}) {
    function renderDots (length) {
      return [...Array(length).keys()].map((index) => (
       <span className={"dot" + (index === currentIndex ? " active" : "")} key={index} />
      ))
    }
    return (  
      <div>  
        {renderDots(content.length)}
      </div>
    )
}


export default CarouselDots;