import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";
import SignOut from "../Login/SignOut";

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* twitterアイコン */}
        <TwitterIcon className="sidebar_twitterIcon"/>

        {/* sidebarOption */}
        <SidebarOption text="ホーム" Icon={HomeIcon} active={true} />
        <SidebarOption text="話題を検索" Icon={SearchIcon} active={false} />
        <SidebarOption text="通知" Icon={NotificationsNoneIcon} active={false} />
        <SidebarOption text="メッセージ" Icon={MailOutlineIcon} active={false} />
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} active={false} />
        <SidebarOption text="リスト" Icon={ListAltIcon} active={false} />
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon} active={false} />
        <SidebarOption text="もっとみる" Icon={MoreHorizIcon} active={false} />
        <SignOut />

        {/* ツイートボタン */}
        <Button variant="outlined" className="sidebar_tweet" fullWidth>
          ツイートする
        </Button>
    </div>
  )
}

export default Sidebar;
