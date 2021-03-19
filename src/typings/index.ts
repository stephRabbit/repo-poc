export interface Repo {
  description: string
  full_name: string
  html_url: string
  id: number
  stargazers_count: number
  watchers_count: number
}

export type FilterTypes = Pick<Repo, 'full_name' | 'stargazers_count'>
export type FilterTypesOptions = keyof FilterTypes
