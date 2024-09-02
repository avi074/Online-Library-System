import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
/** @import {BookDetails, BookCollection} from "../utils/mockdata" */

/**
 *
 * @param {object} prop
 * @param {BookDetails} prop.book
 * @returns
 */
export function BookCard({
  bookId,
  book: { title, author, rating, image, description, category },
}) {
  const navigate = useNavigate()
  const { currCateg } = useSelector((store) => store.library)
  return (
    <Card shadow className='w-72 border-2'>
      <CardHeader
        floated={false}
        className='mx-auto w-52 aspect-[9/16] text-center'>
        <img
          src={image}
          alt={title}
          style={{
            imageResolution: "from-image 300dpi",
          }}
          className='mix-blend-multiply w-full h-full object-cover hover:object-contain'
        />
      </CardHeader>
      <CardBody className='flex flex-col justify-around flex-1'>
        <Typography
          variant='h6'
          title={title}
          className='text-center text-pretty text-blue-800'>
          {title}
        </Typography>
        <Typography
          variant='h6'
          title={author}
          className='text-balance text-right text-gray-800'>
          {author}
        </Typography>
        <Typography variant='small' color='white' title='Ratings'>
          <span className='inline-block py-2 w-[10ch] text-center font-semibold bg-blue-gray-900 rounded-full'>
            {rating} / 5
          </span>
        </Typography>
        <p className='py-1 line-clamp-2' title='Book Description'>
          {description}
        </p>
      </CardBody>
      <CardFooter className='pt-0'>
        <div className='flex flex-wrap gap-2 mb-4' title='Categories'>
          {category.length &&
            category.map((ele, index) => (
              <Typography variant='small' key={`${index}-categ-${ele}`}>
                <span className='p-2 tracking-wider font-semibold uppercase text-[#f5eeee] bg-blue-gray-900 rounded-lg'>
                  {ele}
                </span>
              </Typography>
            ))}
        </div>
        <Button
          variant='gradient'
          color='indigo'
          className='block ml-auto'
          onClick={() => {
            navigate(`/books/${currCateg}/${bookId}`)
          }}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

function BookList({ bookArr }) {
  const { allBooks } = useSelector((store) => store.library)
  return (
    <div className='p-4 my-4 flex flex-wrap justify-center gap-4 items-stretch'>
      {bookArr.map((ele) => (
        <BookCard key={`book-${ele}`} bookId={ele} book={allBooks[ele]} />
      ))}
    </div>
  )
}

export default BookList
