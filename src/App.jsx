
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Auth/Signup'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import ConfirmEmail from './pages/Auth/ConfirmEmail'
import Login from './pages/Auth/Login/Login'
import ForgetPass from './pages/Auth/ForgetPassword/ForgetPass'
import ConfirmPass from './pages/Auth/ConfirmPass/ConfirmPass'
import SetNewPass from './pages/Auth/SetNewPass/SetNewPass'
import Reminders from './pages/reminder'
import RequierAuth from './pages/Auth/RequireAuth'
import Mainprofile from './pages/mamyprofile/Mainprofile'
import Mybabies from './pages/mamyprofile/my babies/Mybabies'
import NameBaby from './pages/mamyprofile/NameBaby/NameBaby'
import Babydetails from './pages/mamyprofile/my babies/updatebaby'
// import Mybabies from './pages/mamyprofile/my babies/Mybabies'
import AddMedicine from './pages/mamyprofile/reminders/Addmedicine/Addmedicine'
import MedicinePage from './pages/mamyprofile/reminders/MedicinePage/MedicinePage'
import Myaccount from './pages/mamyprofile/Myaccount/Myacoount'
import Updatemedicine from './pages/mamyprofile/reminders/Addmedicine/Updatemedicine'
import { useEffect, useState } from 'react'
import { generatetoken  , messaging} from './Notification/firebase-config'

import { onMessage } from 'firebase/messaging'
import Cookies from 'universal-cookie';
import axios from 'axios'
import NextNavbar from './Componets/NextNavbar/NextNavbar'
import ProfileNav from './Componets/profilenav/ProfileNav'
import Vaccines from './pages/mamyprofile/vaccine/Vaccines'

function App() {
  if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
      console.log('Service Worker registered:', registration);
  
      // تحقق من حالة التفعيل
      if (registration.active) {
          console.log('Service Worker is active');
        generatetoken();

      } else {
          registration.addEventListener('statechange', (event) => {
              if (event.target.state === 'activated') {
                  console.log('Service Worker is activated');
                generatetoken(); // استدعاء التوكن بعد التفعيل
              
              }
          });
      }
  }).catch((error) => {
      console.error('Service Worker registration failed:', error);
  });
  
  }
  
  const cookie = new Cookies();
  const gettoken = cookie.get('Bearer');
  const[allnotification,setallnotication]=useState(null)


  useEffect(() => {
    generatetoken()
    onMessage(messaging, (payload) => {
      console.log(payload)
      
    })
    
  }, [])
  
  // to get the notfication
  useEffect(() => {
   

    async function getallnotication() {
      try {
        let res = await axios.get('https://carenest-serverside.vercel.app/user/notifications/all', {
          headers: {
            Authorization:`${gettoken}`
          }
          
        })
        setallnotication(res.data.data)
        
        
      }
      catch (error) {
        console.log(error)
      }
    }
    getallnotication()
  }, [gettoken])
  console.log(allnotification)


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<RequierAuth />}>
        <Route path='/reminders' element={<Reminders/>}>

          </Route>

        </Route>
    
        <Route path='/Auth' element={<Auth />}>
          <Route path='Signup' element={<Signup />} />
          <Route path='Confirmemail' element={<ConfirmEmail />} />
          <Route path ='Login' element={<Login />} />
          <Route path='ForgetPassword' element={<ForgetPass />} />
          <Route path='ConfirmPassword' element={<ConfirmPass />} />
          <Route path='SetNewPass' element={<SetNewPass />} />
        
        </Route>
  
        <Route path='/myprofile' element={<Mainprofile />}>
     
          <Route index element={<>   <ProfileNav  /> <Mybabies /> </> } />
          <Route path='myaccount' element={ <> <ProfileNav/>  <Myaccount/> </>}/>
          <Route path='mybabies' element={  <><ProfileNav/> <Mybabies/> </>} />
          <Route path='NameBaby' element={ <> <ProfileNav/> <NameBaby /> </>} />
          <Route path=":id" element={ <> <ProfileNav/> <Babydetails /> </>} />
          <Route path='addmedicine' element={ <> <ProfileNav/> <AddMedicine/></>}></Route>
          <Route path='reminders' element={<> <ProfileNav/> <MedicinePage /></>} />  
          <Route path='medicine/:scheduleId' element={<> <ProfileNav /> <Updatemedicine /></>} />
          <Route path='vaccines/:nameid' element={ <Vaccines/>} />
          
        </Route>
       
      </Routes>
    </>
  )
}

export default App;


