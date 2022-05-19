const INITIAL_STATE={
  articles:[
      
   {id:"0", title:'how to fetch data in react',url:'https://www.robinwieruch.de/react-fetching-data/'},
   {id:"1", title: 'React Ecosystem as a flexible framework',url:'https://www.spiria.com/en/blog/web-applications/react-ecosystem/'},
   {id:"2", title: 'What new in React 16?',url:'https://medium.com/netscape/whats-new-in-react-16-1608390ffe39'},
   {id:"3", title: '8 things to learn in React before using Redux',url:'https://www.robinwieruch.de/learn-react-before-using-redux/'},
   {id:"4", title: 'Accept Stripe Payments with React and Express',url:'https://www.robinwieruch.de/react-express-stripe-payment/'},
   {id:"5", title: 'Tips to learn React+Redux',url:'https://medium.com/netscape/beginners-guide-to-react-redux-how-to-start-learning-and-not-be-overwhelmed-af04353101e'},
   {id:"6", title: '10 Reasons why I moved from Angular to React',url:'https://www.robinwieruch.de/reasons-why-i-moved-from-angular-to-react/'},
   {id:"7", title: 'All the Conditional Renderings in React',url:'https://reactjs.org/docs/conditional-rendering.html'},
   {id:"8", title: 'Redux or Mobx:An attempt to dissolve the Confusion',url:'https://developpaper.com/redux-or-mobx-let-me-solve-your-confusion/'},
   {id:"9", title: 'Tips to learn React+Redux',url:'https://medium.com/netscape/beginners-guide-to-react-redux-how-to-start-learning-and-not-be-overwhelmed-af04353101e'},
   {id:"10", title: 'A gentle Introduction to Reacts Higher order components',url:'https://code.tutsplus.com/tutorials/a-gentle-introduction-to-higher-order-components-in-react--cms-30094'},
   {id:"11", title: 'Complete Course to learn Redux and MobX',url:'https://redux.js.org/introduction/learning-resources'},

  ]  
};
function articleReducer(state= INITIAL_STATE,action){
    
            return state;
    
}

export default articleReducer;