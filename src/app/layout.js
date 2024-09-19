import { ToastContainer } from "react-toastify"
import "./globals.css"
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: "Foreningen for dyrevelfærd",
  description: "Vi specialiserer os i at hjælpe dyr i nød",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
