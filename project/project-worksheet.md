# Project Overview


## Project Description

This application will be about stocks. The user can do 2 things. 1) they can view the 10 most active stocks of the day and respective key metrics and 2) they can search any company name to see their stock price and other metrics

## Wireframes

- Photo 1: https://res.cloudinary.com/jeslan/image/upload/v1566572529/Project%201/IMG_5078_eivlqx.jpg
- Photo 2: https://res.cloudinary.com/jeslan/image/upload/v1566572526/Project%201/IMG_5079_bxvqhv.jpg

## API

I am using 2 Apis
  - 10 most active stocks: https://financialmodelingprep.com/developer/docs/most-actives-stock-market-data-free-api/
          - link to returned data: https://res.cloudinary.com/jeslan/image/upload/v1566571371/Project%201/Screen_Shot_2019-08-23_at_10.41.57_AM_ywmr9e.png
  - All stocks: https://financialmodelingprep.com/developer/docs/stock-market-quote-free-api/
          - link to returned data: https://res.cloudinary.com/jeslan/image/upload/v1566571381/Project%201/Screen_Shot_2019-08-23_at_10.42.17_AM_fs3ng2.png


### MVP/PostMVP

#### MVP EXAMPLE
- Call both Apis
- render data and style data on 10 most active stocks
- render data on all stocks
- search functionality by name for all stocks
- Allow user to favorite any stocks from the all stocks list

#### PostMVP EXAMPLE

- responsive design
- for all stocks, return matching results in search bar list vs on the page
- elevated styling

## React Component Hierarchy

- architectural design: https://res.cloudinary.com/jeslan/image/upload/v1566572530/Project%201/IMG_5075_x9k30n.jpg

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | :---: |  
| App | This will make the initial data pull and include React Router|
| Header | This will render the header include the nav |
| Footer | This will render the header include the nav |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
