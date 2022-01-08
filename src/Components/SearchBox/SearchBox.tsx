import styled from 'styled-components'
import { PropsType } from './SearchBox.interfaces'
import { TextField } from '@material-ui/core'

/*---> Components <---*/
const SearchBox = ({ searchTerm, setSearchTerm, filterTerm }: PropsType) => {
  return (
    <SearchBoxWrapper>
      <Input
        data-cy='search-box'
        id='search-box'
        defaultValue={filterTerm}
        value={searchTerm || ''}
        onChange={(event) => setSearchTerm(event.target.value)}
        variant='outlined'
        label='Search here ...'
        size='medium'
        type='search'
        color='primary'
        autoComplete='off'
      />
    </SearchBoxWrapper>
  )
}

/*---> Styles <---*/
const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled(TextField)`
  width: 400px;
  background-color: white;
`

export default SearchBox
