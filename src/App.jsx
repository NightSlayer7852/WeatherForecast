
import Input from './components/Input.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import { useWeather } from './contexts/weatherContext.jsx'
function App() {
  const { fetchData, searchQuery, setSearchQuery, loading} = useWeather();
  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center space-y-10 bg-zinc-950'>
      <h1 className="text-3xl font-bold text-zinc-400">Weatherly</h1>
      <div className="flex justify-around w-full max-w-md space-x-3">
        <Input placeholder="Enter city name ..." onEnter={() => { fetchData(searchQuery); setSearchQuery(''); }} />
        <Button onClick={() => { fetchData(searchQuery); setSearchQuery(''); }} value={loading ? "Loading..." : "Search"} disabled={loading || !searchQuery} />
      </div>
      <Card />

    </main>
  )
}

export default App
