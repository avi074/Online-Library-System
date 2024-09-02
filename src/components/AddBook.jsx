import {
  Button,
  Typography,
  Card,
  CardBody,
  CardHeader,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addBookToLibrary } from "../utils/bookSlice"

function AddBook() {
  const initialData = {
    isbn: "",
    title: "",
    author: "",
    rating: "",
    image: "",
    description: "",
    category: [],
  }

  const [formData, setFormData] = useState(initialData)
  const inputsData = [
    {
      type: "text",
      name: "isbn",
      label: "Book ISBN",
      minLength: 10,
      maxLength: 14,
    },
    {
      type: "text",
      name: "title",
      label: "Book Title",
    },
    {
      type: "text",
      name: "author",
      label: "Book Author",
    },
    {
      type: "number",
      name: "rating",
      min: 0,
      max: 5,
      step: 0.01,
      label: "Book Ratings",
    },
    {
      type: "url",
      name: "image",
      label: "Book Cover Image Link",
      pattern: "https://.*",
      containerProps: {
        className: "xl:col-span-2",
      },
    },
  ]
  const [errorMsg, setErrorMsg] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { category, currCateg } = useSelector((store) => store.library)

  const updateFormData = (name, value) =>
    setFormData((formD) => ({ ...formD, [name]: value }))

  const updateErrorMsg = (name, value) =>
    setErrorMsg((err) => ({ ...err, [name]: value }))

  /**
   *
   * @param {React.FormEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleChange = ({ target: { name, value } }) => {
    updateFormData(name, value)
    if (errorMsg[name]) {
      updateErrorMsg(name, "")
    }
  }

  const handleCheckBoxes = ({ target: { name, value } }) => {
    console.log(name, value)
    let arr = formData[name]
    if (arr.includes(value)) {
      arr = arr.filter((ele) => ele != value)
    } else {
      arr.push(value)
    }
    if (errorMsg[name]) {
      updateErrorMsg(name, "")
    }
    updateFormData(name, arr)
  }

  /**
   *
   * @param {React.FormEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleInvalid = ({ target, currentTarget }) => {
    let err = ""
    let name = target.name

    if (currentTarget.validity.valueMissing) {
      err = `Fill in the ${name.toUpperCase()} field !!!`
    } else if (currentTarget.validity.patternMismatch) {
      err = `Pattern Mismatch!, Follow this : '${currentTarget.pattern}' !!!`
    } else if (
      currentTarget.validity.rangeUnderflow ||
      currentTarget.validity.rangeOverflow
    ) {
      err = `Input range is in between [${currentTarget.min},${currentTarget.max}] !!!`
    } else if (
      currentTarget.validity.tooLong ||
      currentTarget.validity.tooShort
    ) {
      err = `Input's length must be ${currentTarget.minLength} - ${currentTarget.maxLength} chars !!!`
    }

    if (formData.category.length == 0) {
      updateErrorMsg("category", "Choose at least 1 category !!!")
    }
    updateErrorMsg(name, err)
  }

  /**
   *
   * @param {React.FormEvent<HTMLFormEvent>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (e.currentTarget.checkValidity()) {
        console.log("Valid", e.currentTarget)
        dispatch(addBookToLibrary(formData))
        navigate(`/books/${currCateg}`)
      } else {
        console.log("Invalid", e.currentTarget)
      }
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  const handleReset = () => {
    setFormData(initialData)
    setErrorMsg({})
  }

  return (
    <>
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

        <CardBody>
          <form
            method='post'
            onSubmit={handleSubmit}
            onReset={handleReset}
            className='flex flex-col justify-center gap-4 text-black'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
              {inputsData.map((ele, index) => (
                <div key={`input-${index}`} {...ele.containerProps}>
                  <Input
                    {...ele}
                    value={formData[ele.name]}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    required
                  />
                  {errorMsg[ele.name] && (
                    <p className='text-sm font-semibold px-1 line-clamp-1 text-red-700'>
                      {errorMsg[ele.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div>
              <Textarea
                label='Enter the Book Description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                onInvalid={handleInvalid}
                required></Textarea>
              {errorMsg["description"] && (
                <p className='text-sm font-semibold px-1 line-clamp-1 text-red-700'>
                  {errorMsg["description"]}
                </p>
              )}
            </div>
            <fieldset>
              <Typography variant='h6' color='gray'>
                Choose book categories:
                {errorMsg["category"] && (
                  <p className='text-sm font-semibold px-1 line-clamp-1 text-red-700'>
                    {errorMsg["category"]}
                  </p>
                )}
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
            <fieldset className='flex gap-4 items-center justify-evenly pt-0'>
              <Button color='green' type='submit' className='border-2'>
                Submit
              </Button>
              <Button
                variant='text'
                color='red'
                className='border-2 border-red-600'
                type='reset'>
                Reset
              </Button>
            </fieldset>
          </form>
        </CardBody>
      </Card>
    </>
  )
}

export default AddBook
