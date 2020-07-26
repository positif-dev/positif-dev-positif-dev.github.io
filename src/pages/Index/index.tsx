import React, { FC, useEffect, useState } from 'react'
import Style from './style.module.scss'
import { Card, Page } from '../../components'
import { Episode } from '../../types'

export const Index: FC<{}> = () => {
  // state
  const [episodeList, setEpisodeList] = useState<Episode[]>([])

  // componentDidMount, do not remove [] in the second argument.
  useEffect(() => {
    const $  = (root: any, el: string) => root.querySelector(el)
    const $$ = (root: any, el: string) => root.querySelectorAll(el)
    const RSS_URL = 'https://anchor.fm/s/2a147024/podcast/rss'
    // fetching from RSS_URL
    fetch(RSS_URL, { cache: 'force-cache' })
      .then(resp => resp.text())
      .then(str => str.replace(/<!\[CDATA\[|\]\]>/g, ''))
      .then(str => str.replace(/itunes:image/g, "itunes_image"))
      .then(str => new DOMParser().parseFromString(str, "text/xml"))
      .then(data => $$(data, 'item'))
      .then(items => {
        items.forEach((item: any) => {
          const title: string = $(item, 'title').innerHTML
          const link: string = $(item, 'link').innerHTML
          const description: string = $(item, 'description').innerHTML
          const image: string = $(item, 'itunes_image').getAttribute('href')
          const date: Date = new Date($(item, 'pubDate').innerHTML)
          const formattedDate: string = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })

          const episode: Episode = {
            title: title,
            link: link,
            description: description,
            image: image,
            date: formattedDate
          }
          
          episodeList.push(episode)

          setEpisodeList([
            ...episodeList
          ])
        })
      })

  // eslint-disable-next-line
  }, [])

  // early return should be better-rendered
  if ( episodeList.length === 0 ) {
    return <div>Loading...</div>
  }

  const [ latestEpisode, ...restEpisodeList ] = episodeList

  // true return
  return (
    <Page ClassName={Style.Index}>
      <div className={Style.Left}>
        <h1>Latest Episode</h1>
        <Card Episode={latestEpisode} Max/>
      </div>

        <div className={Style.Right}>
          <h1 className={Style.AllEpisodeTitle}>All Episode</h1>
          {
            restEpisodeList.map((episode: Episode, index: number) => {
              return <Card key={index} Episode={episode}/>
            })
          }
        </div>
    </Page>
  )
}
