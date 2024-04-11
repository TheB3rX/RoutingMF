export async function getCharacters() {
  const response = await fetch(
    'https://rickandmortyapi.com/api/character'
  )
  const data = await response.json()
  return data
}

export async function getCharacter(id: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const data = await response.json()
  return data
}
