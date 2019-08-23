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

#### MVP
- Call both Apis
- render data and style data on 10 most active stocks
- render data on all stocks
- search functionality by name for all stocks
- Allow user to favorite any stocks from the all stocks list

#### PostMVP

- responsive design
- for all stocks, return matching results in search bar list vs on the page
- elevated styling

## React Component Hierarchy

- architectural design: https://res.cloudinary.com/jeslan/image/upload/v1566572530/Project%201/IMG_5075_x9k30n.jpg

- There are 9 Components
  1) App
  2) Nav (links to Home, Most active, All stocks)
  3) Footer
  4) Main (API call)
    5) Home (links to Most active and All stocks)
    6) Most active
      8) row
    7) All Stocks
      9) Single stock info

## Components

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating the skeleton of the application with dummy headers in each component and proper linking | H | 3hrs| X | 1hrs |
| Calling the API data and passing it to the necessary component | H | 2hrs| X | 1hr|
| Formatting Nav, Main, Home, Footer | H | 3hrs| X | X |
| Rendering the API data on the most active and All stock pages looping through objects | H | 2hrs| X | X |
| Formatting Most Active | M | 2hrs| X | X |
| Applying search functionality on All stock | H | 2hrs| X | X |
| Applying favorite functionality on All stock | M | 2hrs| X | X |
| Formatting All stock | M | 2hrs| X | X |
| Responsive Design | M | 3hrs| X | X |


| Total | H | X| X | X |

## Additional Libraries
TBD - Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

TBD- Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 TBD- Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
