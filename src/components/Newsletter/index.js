import React, { useState } from 'react';
import { postNewsletter } from 'services/postNewsletter';
import * as S from './styles';

// components
import Input from './Input';

const Newsletter = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState()
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!error) {
      if (data) {
        postNewsletter(data).then(resp => {
          console.log("🚀 ~ file: index.js ~ line 47 ~ postNewsletter ~ resp", resp.data)
          setSubmit(true)
        }).catch(err => {
          console.error("🚀 ~ file: index.js ~ line 50 ~ postNewsletter ~ err", err)
        })
      } else {
        setError(true)
      }
    }
  }

  const handleClearStates = () => {
    setSubmit(false)
    setData()
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      {submit ?
        <div className="container">
          <div className="success">
            <strong>Seu e-mail foi cadastrado com sucesso!</strong>
            <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
            <span onClick={handleClearStates}>Cadastrar novo e-mail</span>
          </div>
        </div>
        :
        <div className="container">
          <h3>Participe de nossas news com promoções e novidades!</h3>
          <div className="inputGoup df ">
            <Input
              type="text"
              id="name"
              typeMessage="nome"
              placeholder="Digite seu nome"
              formState={{
                error,
                setError,
                setData,
                data
              }}
            />
            <Input
              type="text"
              id="email"
              typeMessage="e-mail"
              placeholder="Digite seu email"
              formState={{
                error,
                setError,
                setData,
                data
              }}
            />
            <button type="submit" className={`${error ? 'error' : ''}`} >Eu quero!</button>
          </div>
        </div>
      }

    </S.Container>
  )
}

export default Newsletter;