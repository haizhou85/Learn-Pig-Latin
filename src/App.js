import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code
// create a array for vowels a,e,i,o,u
    let vowels = ["a","e","i","o","u"]
    let yVowels = ["a","e","i","o","u","y"]
// declare a function that seperates the letters before the first vowel and switches it to the end and add a "ay" at the end
    const contFunction = (string, index) =>{
    return string.slice(index) + string.slice(0,index) +"ay"
    }
// declaring a funtion to add "way" to the end of the string that start with a vowel
    const vowelFunction = (string) => {
        return string + "way"
    }
// declareing a function to cut after "u" and swicth the slices and returns the string an additional of "ay"
    const quFunction = (string, index) =>{
        return string.slice(index+1) + string.slice(0, index+1) +"ay"
    }
    // 2. check the string for first letter being a vowel if true deal it with vowel-way
    if (vowels.includes(currentWord.charAt(0))) {
        return translatedWordsArray.push(vowelFunction(currentWord))

    // 3. check the string for the first vowel if not "u", deal it with cont way
        }else if (!vowels.includes(currentWord.charAt(0))) {
            for (let i = 1; i < currentWord.length; i++){
                if (yVowels.includes(currentWord.charAt(i))){
// 4. check the first vowel with "u" word                                   if the letter  before the first vowel is q if true deal it with qu-way, if not deal with cont way
                    if (currentWord.charAt(i) === "u" && currentWord.charAt(i-1) === "q") {
                            return translatedWordsArray.push(quFunction(currentWord,i))
                        }else {
                            return translatedWordsArray.push(contFunction(currentWord,i))
                            }
                    }

            }
      // your code here!

      // Remember: console.log is your friend :)

      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(currentWord)
        }
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">

          </div>
          <div className="box">
          <img id = "boximage" src = "https://cdn.pixabay.com/photo/2016/06/29/09/34/pork-1486384_960_720.png" alt = "pig image"/>
          <img id = "boximage" src = "https://cdn.pixabay.com/photo/2016/06/29/09/34/pork-1486384_960_720.png" alt = "pig image"/>
          <img id = "boximage" src = "https://cdn.pixabay.com/photo/2016/06/29/09/34/pork-1486384_960_720.png" alt = "pig image"/>
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p id = "result">{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by Alejandro, Joe, and Tsz
        </footer>
      </div>
    );
  }
}

export default App;
