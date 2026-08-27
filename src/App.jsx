import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section
          id="home"
          style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Coming soon...</h1>
        </section>
      </main>
    </div>
  );
}

export default App;