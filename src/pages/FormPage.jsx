import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'

const FormPage = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: ""
   })



   const navigate = useNavigate()

   const handleChange = (e) => {
    const {name, value} = e.target

    setFormData({
        ...formData,
        [name]:value
    })
   }


   const handleSubmit = (e) => {
    e.preventDefault()

    navigate("/thank-you")
   }

  return (
    <div>


        <h1>Submit Your Information</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                 type='text'
                 id='name'
                 name="name"
                 value={formData.name}
                 onChange={handleChange}

                 required
                />
            </div>



            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                 type='email'
                 id='email'
                 name="email"
                 value={formData.email}
                 onChange={handleChange}

                 required
                />
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormPage