import React from 'react'
import ReactDOM from 'react-dom/client'
import Tweet from './Components/Tweet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Tweet user="Diego" >
      filho 1
    </Tweet>
    
    <Tweet user="Fred" >
      filho 2
    </Tweet>
    
  </React.StrictMode>,
)
