# Rick and Morty Characters

## Project Content

The Netflix serie Rick and Morty's characters information can
be accessed with this React.js project. [The Rick and Morty API](https://rickandmortyapi.com/) was used to retrieve all the information.
On the home page, the characters and their information can be seen as cards. By clicking on each character card,
more detailed content of the character can be seen with the other data such as the number of episodes the character is seen and the details of the first episode of the character on a separate page. Any character can be found by using the search bar, just type the character name and then press the enter key. Empty search returns all the characters without filtering. For more character, just scroll the window to the bottom.  

## Tech Stack

```
React.js
React Router Dom
React Hooks
Typescript
Apollo / GraphQl
Styled Components
```

## More Improvement Points
```
Unit tests can be added by using the Jest library
Search bar can be improved by putting a remove button to delete the keyword
Navigation could be improved such as a home button
Mobile design can be improved for each spesific platform and device
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Project URLs

```
Characters: http://localhost:3000/
More character detail: http://localhost:3000/CardDetails/:id
```