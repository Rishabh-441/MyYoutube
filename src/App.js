
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
// import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watch from './components/Watch';
import SearchPageResults from './components/SearchPageResults';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "watch",
      element: <Watch/>
    },
    {
      path: "searchPage",
      element: <SearchPageResults/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
        <div>
          {/* <Head></Head> */}
          <RouterProvider router={appRouter}/>
      </div>
    </Provider>
    
  );
}

export default App;
