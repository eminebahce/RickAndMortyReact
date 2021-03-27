interface Info {
  next: number
}

interface Location {
  name: String
}

interface Episode {
  id: number
  name: String
  air_date: String
  episode: String
  created: String
}

interface Character {
  id: number
  name: String
  location: Location
  status: String
  origin: Location
  image: String
  gender: String
  species: String
  episode: Episode[]
}

interface Characters {
  info: Info
  results: Character[]
}

interface CharactersData {
  characters: Characters
}

interface CharacterVars {
  page: number
  name: String
}

export type {
  Info,
  Location,
  Episode,
  Character,
  Characters,
  CharactersData,
  CharacterVars
}