import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="text-center flex flex-col gap-3 justify-center items-center py-4">
      <Typography variant="h1" color="gray">404</Typography>
      <Typography variant="h2" color="blue-gray">Page Not Found</Typography>
      <Typography variant="lead" color="blue"><Link to='/home'>Click here to go Home</Link></Typography>
    </div>
  )
}

export default NotFound
