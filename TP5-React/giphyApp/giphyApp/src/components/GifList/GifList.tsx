import { CardGif } from "../ui/CardGif/CardGif"
import { useAppSelector } from "../../hooks/redux"

export const GifList = () => {
  const gif = useAppSelector(state => state.gif.gif)

  return (
    <div
    style={{
      display:'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      gap:'2vh',
      margin:'2rem'
    }}>
        {
          gif.map((el, i) => (
            <CardGif gif={el} key={i}/>
          ))
        }
    </div>
  )
}
