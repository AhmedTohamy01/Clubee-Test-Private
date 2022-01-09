import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { AddCircle } from '@styled-icons/ionicons-outline'
import { CircularProgress } from '@material-ui/core'
import MainTitle from '../src/Components/MainTitle/MainTitle'
import SearchBox from '../src/Components/SearchBox/SearchBox'
import Card from '../src/Components/Card/Card'
import PrimaryButton from '../src/Components/PrimaryButton/PrimaryButton'
import ModalOverlay from '../src/Components/ModalOverlay/ModalOverlay'
import EditModal from '../src/Components/EditModal/EditModal'
import DeleteModal from '../src/Components/DeleteModal/DeleteModal'
import AddModal from '../src/Components/AddModal/AddModal'
import { CardType } from '../src/utils/Shared.interfaces'
import { GET_ALL_POSTS } from '../src/GraphQLQueries/GraphQLQueries'

/*---> Components <---*/
const MainPage: NextPage = () => {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [limit, setLimit] = useState(5)

  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: { filter: filterTerm, limit: limit },
  })

  const handleEditIconClick = (item: CardType) => {
    setActiveCard(item)
    setShowEditModal(true)
  }

  const handleDeleteIconClick = (item: CardType) => {
    setActiveCard(item)
    setShowDeleteModal(true)
  }

  const handleLoadMore = () => {
    setLimit(limit + 5)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const handleFilterTerm = () => {
        setFilterTerm(searchTerm)
      }
      handleFilterTerm()
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  if (loading)
    return (
      <SpinnerWrapper>
        <CircularProgress variant='indeterminate' size={90} />
      </SpinnerWrapper>
    )

  if (error)
    return (
      <SpinnerWrapper>
        <SorryImage src='/sorry.png' alt='shy girl' />I don't know how to say
        this to you ... <br />
        But, we couldn't contact the server to get data, please try again later
        !
      </SpinnerWrapper>
    )

  if (data.posts.length === 0)
    return (
      <PageWrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <MainTitle>
              <span data-cy='main-title'>News list</span>{' '}
              <AddIcon
                onClick={() => setShowAddModal(true)}
                data-cy='add-icon'
              />
            </MainTitle>
            <SearchBox
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterTerm={filterTerm}
            />
          </HeaderWrapper>
          <CardsWrapper>
            <NoDataWrapper>
              <SorryImage
                src='/sorry.png'
                alt='shy girl'
                data-cy='no-data-image'
              />{' '}
              <span data-cy='no-data-title'>
                Sorry, We did not find any data !
              </span>
            </NoDataWrapper>
          </CardsWrapper>
          {showAddModal ? (
            <ModalOverlay>
              <AddModal
                setShowAddModal={setShowAddModal}
                limit={limit}
                filterTerm={filterTerm}
              />
            </ModalOverlay>
          ) : null}
        </ContentWrapper>
      </PageWrapper>
    )

  return (
    <PageWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <MainTitle>
            <span data-cy='main-title'>News list</span>{' '}
            <AddIcon onClick={() => setShowAddModal(true)} data-cy='add-icon' />
          </MainTitle>
          <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterTerm={filterTerm}
          />
        </HeaderWrapper>
        <CardsWrapper>
          {data?.posts.map((item: CardType) => (
            <Card
              key={item.id}
              name={item.name}
              email={item.email}
              title={item.title}
              description={item.description}
              handleEditIconClick={() => handleEditIconClick(item)}
              handleDeleteIconClick={() => handleDeleteIconClick(item)}
            />
          ))}
        </CardsWrapper>
        {limit > data.posts.length ? null : (
          <PrimaryButton onClick={handleLoadMore} data-cy='loadmore-button'>
            LOAD MORE
          </PrimaryButton>
        )}
        {showAddModal ? (
          <ModalOverlay>
            <AddModal
              setShowAddModal={setShowAddModal}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
        {showEditModal ? (
          <ModalOverlay>
            <EditModal
              setShowEditModal={setShowEditModal}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
        {showDeleteModal ? (
          <ModalOverlay>
            <DeleteModal
              setShowDeleteModal={setShowDeleteModal}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              limit={limit}
              filterTerm={filterTerm}
            />
          </ModalOverlay>
        ) : null}
      </ContentWrapper>
    </PageWrapper>
  )
}

/*---> Styles <---*/
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  padding: 193px 236px;
  width: 1800px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardsWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 37px;
`

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 37px;
`

const SorryImage = styled.img`
  width: 240px;
`

const AddIcon = styled(AddCircle)`
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: #979797;
  margin-left: 10px;
`

export default MainPage
