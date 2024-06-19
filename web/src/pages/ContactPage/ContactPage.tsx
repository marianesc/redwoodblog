import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" />

        <label htmlFor="email">Email</label>
        <TextField name="email" />

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
