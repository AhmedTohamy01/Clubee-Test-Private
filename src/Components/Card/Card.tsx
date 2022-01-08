import styled from 'styled-components'
import { Trash } from '@styled-icons/ionicons-outline'
import { Edit } from '@styled-icons/boxicons-solid'
import { useRandomAvatar } from '../../CustomHooks/useRandomAvatar'
import { PropsType } from './Card.interfaces'

/*---> Components <---*/
const Card = ({
  name,
  description,
  handleEditIconClick,
  handleDeleteIconClick,
}: PropsType) => {
  return (
    <CardWrapper data-cy='card-item'>
      <HeaderWrapper>
        <DeleteIcon onClick={handleDeleteIconClick} data-cy='delete-icon' />
        <EditIcon onClick={handleEditIconClick} data-cy='edit-icon' />
      </HeaderWrapper>
      <ContentWrapper>
        <AvatarWrapper>
          <Avatar
            src={useRandomAvatar() || '/avatar2.jpg'}
            alt='avatar'
            data-cy='card-avatar'
          />
          <Name data-cy='card-name'>{name}</Name>
          <Email>ahmed-tohamy@outlook.com</Email>
        </AvatarWrapper>
        <PostWrapper>
          <Date>January 7, 2022</Date>
          <PostTitle>
            What can United States do for Ukrania in the current situation ?
          </PostTitle>
          <Description data-cy='card-desc'>
            The US has said it would send reinforcements to Nato’s eastern flank
            in response to a Russian invasion of Ukraine, as well as imposing
            severe new economic measures, in a warning to Moscow on the eve of
            talks between Joe Biden and Vladimir Putin. Biden will also make
            clear to Putin on Tuesday that the US will not rule out future
            Ukrainian membership of Nato, as the Russian leader has demanded, a
            senior US official said. On Monday, Biden spoke to European leaders
            in preparation for the Putin summit.
          </Description>
        </PostWrapper>
      </ContentWrapper>
    </CardWrapper>
  )
}

/*---> Styles <---*/
const CardWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 336px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 64px;
  padding: 18px 32px 40px 32px;

  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
`

const DeleteIcon = styled(Trash)<{ onClick: any }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #979797;
`

const EditIcon = styled(Edit)<{ onClick: any }>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: #979797;
  margin-left: 10px;
`

const ContentWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
`

const AvatarWrapper = styled.div`
  /* border: 1px solid red; */
  min-width: 20%;
  text-align: center;
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`

const PostWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  margin-top: 8px;
  margin-left: 20px;
  height: 250px;
  flex-direction: column;
`

const Name = styled.p`
  font-size: 21px;
  line-height: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`

const Email = styled.p``

const Date = styled.p``

const PostTitle = styled.h2`
  /* border: 1px solid red; */
  margin-top: 10px;
  margin-bottom: 20px;
`

const Description = styled.p`
  /* border: 1px solid red; */
  line-height: 30px;
  font-size: 20px;
  height: 100%;
  overflow: hidden;
`

export default Card
