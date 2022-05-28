import Nav from "../../components/Nav/Nav";
import React, { useState } from "react";
// import { useCookies } from 'react-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";


//TODO: Poner el codigo en estilos o react para que el input de gender_identity y gender_interest se pinten como seleccionados en el signup
//TODO: SOLUCIONAR PROBLEMA DE COOKIES URGENTE PARA PODER DAR USO DEL USERID EN EL FORMDATA


const Signup = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [formData, setFormData] = useState({
    // user_id: cookies.UserId,
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    gender_identity: "",
    gender_interest: "",
    imageURL: "",
    about: "",
    matches: [],
  });

  let navigate = useNavigate()

   

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      //TODO: LLAMAR AL CUSTOM HOOK DE USEUSER.JSX PARA EDIT 
      const response = await axios.put('http://localhost:3001/users/edit', { formData })
      if (response.status === 200) navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }

  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="signUp">
        <h2>CREAR CUENTA</h2>

        <form onSubmit={handleSubmit} className="signUpForm">
          <section className="signUpForm__section">
            <label htmlFor="first_name">
              Nombre
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="Nombre"
                  required={true}
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label htmlFor="dob_day">
              Cumpleaños
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="dd"
                  required={true}
                  value={formData.dob_day}
                  onChange={handleChange}
                />
                <input
                  className="signUpForm__input"
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="mm"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                />
                <input
                  className="signUpForm__input"
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="aaaa"
                  required={true}
                  value={formData.dob_year}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label htmlFor="gender_identity">
              Género
              <div className="signUpForm__multipleInput">
                <label
                  htmlFor="man-gender_identity"
                  className="signUpForm__label"
                >
                  Gato
                </label>
                <input
                  className="signUpForm__input"
                  id="man-gender_identity"
                  type="radio"
                  name="gender_identity"
                  required={true}
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender_identity === "male"}
                />
                <label
                  htmlFor="woman-gender_identity"
                  className="signUpForm__label"
                >
                  Gata
                </label>
                <input
                  className="signUpForm__input"
                  id="woman-gender_identity"
                  type="radio"
                  name="gender_identity"
                  required={true}
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_identity === "female"}
                />
                <label
                  htmlFor="other-gender_identity"
                  className="signUpForm__label"
                >
                  Otros
                </label>
                <input
                  className="signUpForm__input"
                  id="more-gender_identity"
                  type="radio"
                  name="gender_identity"
                  required={true}
                  value="other"
                  onChange={handleChange}
                  checked={formData.gender_identity === "other"}
                />
              </div>
            </label>

            <label htmlFor="show_me">
              Muéstrame
              <div className="signUpForm__multipleInput">
                <label
                  htmlFor="man-gender_interest"
                  className="signUpForm__label"
                >
                  Gato
                </label>
                <input
                  className="signUpForm__input"
                  id="man-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender_interest === "male"}
                />
                <label
                  htmlFor="woman-gender_interest"
                  className="signUpForm__label"
                >
                  Gata
                </label>
                <input
                  className="signUpForm__input"
                  id="woman-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender_interest === "female"}
                />
                <label
                  htmlFor="everyone-gender_interest"
                  className="signUpForm__label"
                >
                  Todos
                </label>
                <input
                  className="signUpForm__input"
                  id="everyone-gender_interest"
                  type="radio"
                  name="gender_interest"
                  required={true}
                  value="everyone"
                  onChange={handleChange}
                  checked={formData.gender_interest === "everyone"}
                />
              </div>
            </label>

            <label htmlFor="about">
              Sobre mí
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input"
                  id="about"
                  type="text"
                  name="about"
                  required={true}
                  placeholder="Me gusta la música"
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
            </label>

            <input className="signUpForm__input" type="submit" value="Enviar" />
          </section>

          <section className="signUpForm__section">
            <label htmlFor="imageURL">
              Profile Image Url
              <div className="signUpForm__multipleInput">
                <input
                  className="signUpForm__input--profile"
                  id="imageURL"
                  type="url"
                  name="imageURL"
                  required={true}
                  onChange={handleChange}
                />
              </div>
            </label>

            <div className="signUpForm__photo-container">
              {formData.imageURL && <img 
                src={formData.imageURL}
                alt="profile pic preview"
                className="signUpForm__photo-container"
              />}
            </div>
          </section>
        </form> 
      </div>
    </>
  );
};

export default Signup;
