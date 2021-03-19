import { Repo } from 'typings'
import {
  CardContentStyled,
  CardFooterStyled,
  CardHeaderStyled,
  CardStatsStyled,
  CardStyled,
} from './styles'

type OwnProps = {
  repo: Repo
}

const Card: React.FC<OwnProps> = ({ repo }) => {
  return (
    <CardStyled key={repo.id}>
      <CardHeaderStyled>
        <a href={repo.html_url} rel='noreferrer' target='_blank'>
          {repo.full_name}
        </a>
      </CardHeaderStyled>
      <CardContentStyled>{repo.description}</CardContentStyled>
      <CardFooterStyled>
        <CardStatsStyled>
          <span>Stargazers</span> {repo.stargazers_count}
        </CardStatsStyled>
        <CardStatsStyled>
          <span>Watchers</span> {repo.watchers_count}
        </CardStatsStyled>
      </CardFooterStyled>
    </CardStyled>
  )
}

export default Card
