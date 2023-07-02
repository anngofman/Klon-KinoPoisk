import React from 'react'
import Input from '../../../ui/input'
import { useForm } from 'react-hook-form'

const ProfileForm = () => {
  const {handleSubmit} = useForm()
const onSubmit =(data: any)=>{
  console.log(data);
  
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input names='name' type='text'/>
      <Input names='email' type='email'/>
    </form>
  )
}

export default ProfileForm