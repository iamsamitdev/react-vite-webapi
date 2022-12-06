import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import Sidebar from "../shared/Sidebar"

const MainLayout = ({children}) => {
  return (
    <>
        <Navbar />

        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>
            <div id="layoutSidenav_content">
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    </>
  )
}

export default MainLayout