import { redirect } from 'next/navigation'
const Home = (): React.ReactElement => {
  redirect('/todo');

  return (
    <div></div>
  )
}

export default Home;