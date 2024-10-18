import React from "react"

export function VideoPlayer() {
  return (
    <video
      width='320'
      height='240'
      controls
      preload='none'
      loop
      muted
      autoPlay
      className='h-96 mt-5 md:mb-10'
    >
      <source src='/presentation.mp4' type='video/mp4' />
      <track
        src='/path/to/captions.vtt'
        kind='subtitles'
        srcLang='en'
        label='English'
      />
      Your browser does not support the video tag.
    </video>
  )
}
