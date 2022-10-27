import styles from '../styles/ContactForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
  return (
    <Form id={styles.contact_form}>
      <Form.Group className={styles.client_info}>
        <Form.Label>What type of photos do you need?</Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="1">Wedding</option>
          <option value="2">Portraits</option>
          <option value="3">Family</option>
          <option value="4">General Inquiry</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>First & Last Name</Form.Label>
        <Form.Control type="input" />
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Tell us more about what you are looking for</Form.Label>
        <Form.Control type="textarea" />
      </Form.Group>
      <Button className={styles.client_info} id={styles.submit_button} variant="secondary" type="submit">Submit</Button>
    </Form>
  )
}