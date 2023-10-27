import '@/styles/globals.css'
import Header from '@/components/header'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '@/components/footer'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return (
    <div>
  <Header />
  <Component {...pageProps} />
  <Footer />
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
  </div>
  )
}
