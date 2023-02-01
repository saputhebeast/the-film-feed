import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='font-Inter mx-32 my-12'>
        {children}
      </body>
    </html>
  )
}
