import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import backArrowIcon from "../assets/back-arrow.svg"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function BookCard({
  book: { title, author, rating, description, category, image },
}) {
  return (
    <Card variant='gradient' className='my-2 bg-opacity-80'>
      <CardHeader floated={false} color='blue-gray'>
        <Typography
          variant='h3'
          className='text-center text-balance capitalize'>
          {title}
        </Typography>
      </CardHeader>
      <CardBody className='flex flex-col md:flex-row justify-around items-stretch'>
        <div className='md:w-1/4'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='md:w-2/5 flex flex-col gap-2 justify-around'>
          <Typography variant='h4' className='book-info' title='Author'>
            <span>Author : </span>
            <span>{author}</span>
          </Typography>
          <Typography variant='h6' className='book-info'>
            <span>Ratings :</span> <span>{rating} / 5</span>
          </Typography>
          <Typography variant='h6' className='book-info'>
            <span>Description :</span>
            <hr />
            <span>{description}</span>
          </Typography>

          <Typography variant='h6' className='book-info'>
            <span>Categories : </span>
            <hr />
            <div className='mt-1'>
              {category.map((ele) => (
                <p key={`categ-${ele}`} className='categ-span'>
                  {ele}
                </p>
              ))}
            </div>
          </Typography>
        </div>
      </CardBody>
    </Card>
  )
}

function BookDetails() {
  const { allBooks } = useSelector((store) => store.library)
  const { category, id } = useParams()
  const [currBook, setCurrBook] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (allBooks[id] && currBook != allBooks[id]) {
      setCurrBook(allBooks[id])
    }
  }, [allBooks, currBook, id, setCurrBook])

  return (
    <div className='p-4'>
      <Button
        variant='outlined'
        color='indigo'
        className='flex items-center justify-around p-2'
        onClick={() => {
          navigate(`/books/${category}`)
        }}>
        <img src={backArrowIcon} alt='' className='w-8 mr-2' />
        <span className='text-[1rem] capitalize'>Back to Browse</span>
      </Button>
      {currBook && <BookCard book={currBook} />}
    </div>
  )
}

export default BookDetails
