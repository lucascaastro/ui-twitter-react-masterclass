interface TweetProps{
   user: string
   children: string
   likes?: string
}

export default function Tweet(props: TweetProps) {

  return(
    <div>
      Tweet
      <h1>
        {props.user}
      </h1>

      <h2>
       {props.children}
      </h2>
      <button>
        Likes
      </button>
    </div>
  )
}