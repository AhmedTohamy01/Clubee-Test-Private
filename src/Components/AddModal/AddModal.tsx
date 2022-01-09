import { useState } from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import MainTitle from '../MainTitle/MainTitle'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import { PropsType } from './AddModal.interfaces'
import { ADD_POST, GET_ALL_POSTS } from '../../GraphQLQueries/GraphQLQueries'
import { useRandomAvatar } from '../../CustomHooks/useRandomAvatar'

/*---> Components <---*/
const AddModal = ({ setShowAddModal, limit, filterTerm }: PropsType) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [
      { query: GET_ALL_POSTS, variables: { filter: filterTerm, limit } },
    ],
  })

  const handleSave = () => {
    addPost({
      variables: {
        name,
        email,
        title,
        description,
      },
    })
    setShowAddModal(false)
  }

  const handleCancel = () => {
    setShowAddModal(false)
  }

  return (
    <ModalWrapper data-cy='add-modal'>
      <MainTitle>
        <span data-cy='add-modal-title'>New Post</span>
      </MainTitle>
      <DataWrapper>
        <UserInfoWrapper>
          <AvatarWrapper>
            <Avatar
              src={useRandomAvatar() || '/avatar2.jpg'}
              alt='avatar'
              data-cy='card-avatar'
            />
          </AvatarWrapper>
          <FieldWrapper>
            <StyledInput
              variant='outlined'
              label='Author Name'
              size='medium'
              type='text'
              color='primary'
              autoComplete='off'
              onChange={(event) => setName(event.target.value)}
              inputProps={{
                style: { fontSize: 18 },
                maxlength: '30',
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledInput
              variant='outlined'
              label='Author Email'
              size='medium'
              type='email'
              color='primary'
              autoComplete='off'
              onChange={(event) => setEmail(event.target.value)}
              inputProps={{
                style: { fontSize: 18 },
                maxlength: '40',
              }}
            />
          </FieldWrapper>
        </UserInfoWrapper>
        <PostInfoWrapper data-cy='add-map-image'>
          <FieldWrapper>
            <StyledInput
              variant='outlined'
              label='Post Title'
              size='medium'
              type='text'
              color='primary'
              autoComplete='off'
              onChange={(event) => setTitle(event.target.value)}
              inputProps={{
                style: { fontSize: 18 },
                maxlength: '80',
              }}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledInputMultiline
              label='Post Description'
              multiline
              rows={11}
              variant='outlined'
              autoComplete='off'
              onChange={(event) => setDescription(event.target.value)}
              inputProps={{
                style: { fontSize: 18, lineHeight: 1.3 },
                maxlength: '510',
              }}
            />
          </FieldWrapper>
        </PostInfoWrapper>
      </DataWrapper>
      <ButtonsWrapper>
        <PrimaryButton
          data-cy='add-save-button'
          onClick={handleSave}
          disabled={
            name === '' || email === '' || title === '' || description === ''
          }
        >
          SAVE
        </PrimaryButton>
        <SecondaryButton data-cy='add-cancel-button' onClick={handleCancel}>
          CANCEL
        </SecondaryButton>
      </ButtonsWrapper>
    </ModalWrapper>
  )
}

/*---> Styles <---*/
const ModalWrapper = styled.div`
  width: 1328px;
  height: 725px;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 64px;

  animation: pop-swirl 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes pop-swirl {
    0% {
      transform: scale(0) rotate(360deg);
    }
    60% {
      transform: scale(0.8) rotate(-10deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`

const DataWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`

const UserInfoWrapper = styled.div`
  width: 35%;
`

const AvatarWrapper = styled.div`
  min-width: 20%;
  text-align: center;
  margin-bottom: 30px;
`

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`

const PostInfoWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FieldWrapper = styled.div`
  margin-bottom: 26px;
`

const StyledInput = styled(TextField)`
  width: 100%;
  background-color: white;
`

const StyledInputMultiline = styled(TextField)`
  width: 100%;
  background-color: white;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

export default AddModal
