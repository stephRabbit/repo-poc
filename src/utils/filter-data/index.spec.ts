import { Repo } from 'typings'
import { filterData } from 'utils'

describe('filllData', () => {
  const data: Repo[] = [
    {
      description: 'desc',
      full_name: 'preact',
      html_url: 'url1',
      id: 1,
      stargazers_count: 1,
      watchers_count: 1,
    },
    {
      description: 'desc',
      full_name: 'vercel',
      html_url: 'url1',
      id: 1,
      stargazers_count: 2,
      watchers_count: 2,
    },
    {
      description: 'desc',
      full_name: 'react',
      html_url: 'url1',
      id: 1,
      stargazers_count: 3,
      watchers_count: 3,
    },
  ]

  it('should sort by stargazers in desc order', () => {
    expect(data.sort(filterData('stargazers_count'))).toStrictEqual([
      {
        description: 'desc',
        full_name: 'react',
        html_url: 'url1',
        id: 1,
        stargazers_count: 3,
        watchers_count: 3,
      },
      {
        description: 'desc',
        full_name: 'vercel',
        html_url: 'url1',
        id: 1,
        stargazers_count: 2,
        watchers_count: 2,
      },
      {
        description: 'desc',
        full_name: 'preact',
        html_url: 'url1',
        id: 1,
        stargazers_count: 1,
        watchers_count: 1,
      },
    ])
  })

  it('should sort by full_name in desc order', () => {
    expect(data.sort(filterData('full_name'))).toStrictEqual([
      {
        description: 'desc',
        full_name: 'vercel',
        html_url: 'url1',
        id: 1,
        stargazers_count: 2,
        watchers_count: 2,
      },
      {
        description: 'desc',
        full_name: 'react',
        html_url: 'url1',
        id: 1,
        stargazers_count: 3,
        watchers_count: 3,
      },
      {
        description: 'desc',
        full_name: 'preact',
        html_url: 'url1',
        id: 1,
        stargazers_count: 1,
        watchers_count: 1,
      },
    ])
  })
})
