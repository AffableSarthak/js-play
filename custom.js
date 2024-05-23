// Imports

 const useDateLib = () => {
    const [date, setDate] = useState()

    // Useffect
    useEffect(() => {
      (() => {
        setInterval(() => {
            let date = new Date()
            setDate(date)
  
        }, 100)
      })()
    
      return () => {
        // 

      }
    }, [])

    return date
 }
const App = () => {
    
    const date = useDateLib()

    return (
        <div>{JSON.stringify(date)}</div>
    )
}