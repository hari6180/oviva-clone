import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
