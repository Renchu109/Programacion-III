import { useEffect, useState } from "react"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"
import { heroesData } from "../../../data/heroes"
import { IHeroes } from "../../../types/IHeroes"

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([])

  const handleGetHeroesDC = () => {
    const result = heroesData.filter((hero) => hero.publisher == 'Marvel Comics')

    setHeroes(result)
  }

  useEffect(() => {
    handleGetHeroesDC()
  },[])

  return (
    <ListHeroes heroes={heroes} title="Heroes Marvel Comics"/>
  )
}
