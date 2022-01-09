import { CardType } from '../../utils/Shared.interfaces'

export interface PropsType {
  name: string
  email: string
  title: string
  description: string
  handleEditIconClick: (arg0: CardType) => void
  handleDeleteIconClick: (arg0: CardType) => void
}
