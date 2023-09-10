import { Search } from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets_input">
            <Search className="widgets_searchIcon" />
            <input placeholder="キーワード検索" type="text" />
        </div>

        <div className="widgets_widgetsContainer">
            <h2>今どうしてる？</h2>

            {/* ライブラリを追加・追記 */}
            <TwitterTweetEmbed tweetId={"1698543760555335871"} />

            <TwitterTimelineEmbed sourceType="profile" screenName='rizin_PR' options={{height: 400}} />
        </div>
    </div>
  )
}

export default Widgets