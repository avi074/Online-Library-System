import {
  Button,
  Typography,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Checkbox,
  Alert,
  Textarea,
} from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function AddBook() {
  const initialData = {
    isbn: "",
    title: "",
    author: "",
    rating: 0,
    image: "",
    description: "",
    category: [],
  }
  const [formData, setFormData] = useState(initialData)
  const [openAlert, setOpenAlert] = useState(true)
  const navigate = useNavigate()
  const { category, currCateg, books } = useSelector((store) => store.library)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpenAlert(false)
    }, 3000)
    if (!openAlert) clearTimeout(timeout)
  }, [openAlert])

  const updateFormData = (name, value) =>
    setFormData({ ...formData, [name]: value })

  const handleChange = ({ target: { name, value } }) =>
    updateFormData(name, value)

  const handleCheckBoxes = ({ target: { name, value } }) => {
    console.log(name, value)
    let arr = formData[name]
    if (arr.includes(value)) {
      arr = arr.filter((ele) => ele != value)
    } else {
      arr.push(value)
    }
    updateFormData(name, arr)
  }

  const handleSubmit = () => {
    console.log(formData, currCateg, category, books)
    // navigate(`/books/${currCateg}`)
  }

  const handleReset = () => setFormData(initialData)

  return (
    <>
      <Alert
        variant='ghost'
        open={openAlert}
        onClose={() => {
          setOpenAlert(false)
        }}
        color='red'
        className='fixed w-1/2 z-10 top-0 left-1/2 -translate-x-1/2'>
        <Typography variant='h6'>Info</Typography>
      </Alert>

      <Card className='md:w-3/4 xl:w-3/5 mx-auto mb-4' color='transparent'>
        <CardHeader
          floated={false}
          color='transparent'
          shadow={false}
          className='px-2'>
          <Typography variant='h4' color='black'>
            Add New Book
          </Typography>
          <Typography variant='small'>
            Enter the book details to add it in the library
          </Typography>
        </CardHeader>

        <CardBody className='flex flex-col justify-center gap-4 text-black'>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <Input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              label='Book Title'
            />
            <Input
              type='text'
              name='author'
              value={formData.author}
              onChange={handleChange}
              label='Book Author'
            />
            <Input
              type='text'
              name='isbn'
              value={formData.isbn}
              onChange={handleChange}
              label='Book ISBN'
            />
            <Input
              type='number'
              name='rating'
              min={0}
              max={5}
              step={0.01}
              value={formData.rating}
              onChange={handleChange}
              label='Book Rating'
            />
            <Input
              type='url'
              name='image'
              value={formData.image}
              onChange={handleChange}
              label='Book Cover Image Link'
              containerProps={{
                className: "xl:col-span-2",
              }}
            />
          </div>
          <Textarea
            label='Enter the Book Description'
            name='description'
            value={formData.description}
            onChange={handleChange}></Textarea>
          <fieldset>
            <Typography variant='h6' color='gray'>
              Choose book categories:
            </Typography>
            <div
              id='categ-options'
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Object.keys(category).map((categ) => (
                <Checkbox
                  key={categ}
                  name='category'
                  checked={formData.category.includes(categ)}
                  onChange={handleCheckBoxes}
                  value={categ}
                  label={categ}
                />
              ))}
            </div>
          </fieldset>
        </CardBody>

        <CardFooter className='flex gap-4 items-center justify-evenly pt-0'>
          <Button color='green' className='border-2' onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            variant='text'
            color='red'
            className='border-2 border-red-600'
            onClick={handleReset}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default AddBook
