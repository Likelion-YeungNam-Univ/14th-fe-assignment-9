import Navbar from './Navbar'
import Category from './Category'
import LongForm from './LongForm'
import ShortForm from './ShortForm'

const App = () => {
  return (
    <div className="flex flex-col">
      
      <Navbar />
      <Category />

      {/* Shorts 영역 */}
      <section className="mt-4">
        <h2 className="px-4 font-bold text-lg mb-2">
          Shorts
        </h2>
        <ShortForm />
      </section>

      {/* LongForm 영역 */}
      <section className="mt-6">
        <h2 className="px-4 font-bold text-lg mb-2">
          Videos
        </h2>
        <LongForm />
      </section>

    </div>
  )
}

export default App