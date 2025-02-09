import { useDrag } from "react-dnd";

const Card = ({isDragging, text}) => {

  const [dragRef] = useDrag(() => ({
    item: {text}
  }));

return (
  <>
    <div className="h-[527px] w-[300px] bg-neutral-500 rounded-2xl" ref={dragRef}>
      Card
    </div>
  </>
)
};

export default Card;