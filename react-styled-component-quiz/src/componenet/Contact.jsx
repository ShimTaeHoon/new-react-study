import styled from "styled-components";

const ContactColor = styled.div`
    background-color: yellow;
  `;

const Contact = () => {
  console.log('Contact..');
  
  return (
    <>
      <ContactColor>
        <h2>Contact</h2>
        Contact...
      </ContactColor>
    </>
  );
};

export default Contact;