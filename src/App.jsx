import StatsCard from "./components/StatsCard"

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">ShadowTracker Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <StatsCard icon="💪" attribute="S" value="7"/>
      <StatsCard icon="👁️" attribute="P" value="10"/>
      <StatsCard icon="🛡️" attribute="E" value="239"/>
      <StatsCard icon="🗣️" attribute="C" value="87"/>
      <StatsCard icon="🧠" attribute="I" value="90"/>
      <StatsCard icon="🏃‍♂️" attribute="A" value="10"/>
      <StatsCard icon="🍀" attribute="L" value="11"/>
    </div>
    </div>
  )
}

export default App
