import React, { useEffect } from "react";
import {
  ProfilePanelContainer,
  ProfileBanner,
  ProfileHeader,
  ProfileContent,
  ProfileFooter,
} from "./styles";
import IconLabel from "../../Shared/IconLabel";
import {
  HeartOutlineIcon,
  VerifiedIcon,
  ItemsIcon,
  UserListIcon,
  CommentIcon,
} from "../../Shared/SvgIcons";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function ViewCollectionPanel(props) {
  const { ownerInfo } = props;
  const { t } = useTranslation();
  return (
    <ProfilePanelContainer>
      <ProfileBanner>
        <img
          src={
            ownerInfo.bannerURI && ownerInfo.bannerURI !== ""
              ? ownerInfo.bannerURI
              : "/images/on1force.png"
          }
          alt="profile_cover"
          className="cover-image"
        />
        <img
          src={
            ownerInfo.logoURI && ownerInfo.logoURI !== ""
              ? ownerInfo.logoURI
              : "/images/profile-user-1.png"
          }
          alt="profile_logo"
          className="logo-image"
        />
      </ProfileBanner>
      <ProfileHeader>
        <div className="header-title">
          <div>
            <IconLabel icon={<VerifiedIcon />} label={""} />
            {ownerInfo.name}
          </div>
        </div>
        <div className="header-link">
          {moment(ownerInfo.timestamp).format("YYYY/MM/DD")}
        </div>
        <ProfileContent>{ownerInfo.description}</ProfileContent>
        <div className="header-review">
          <IconLabel
            icon={<ItemsIcon />}
            label={`${ownerInfo.items || 0} items`}
          />
          <IconLabel
            icon={<UserListIcon />}
            label={`${ownerInfo.holders || 0} owners`}
          />
        </div>
        <div className="header-review">
          <IconLabel
            icon={<HeartOutlineIcon />}
            label={`${ownerInfo.favoriteCount || 0} favorites`}
          />
          <IconLabel
            icon={<CommentIcon />}
            label={`${ownerInfo.commentCount || 0} comments`}
          />
        </div>
      </ProfileHeader>
      <ProfileFooter>
        <div className="footer-item">
          <div className="item-value-flex">
            {/* <img src={chainLogo} alt='chain-logo' /> */}
            <div className="item-value">
              {ownerInfo.floorPrice?.toFixed(3)}$
            </div>
          </div>
          <div className="item-name">{t("floor price")}</div>
        </div>
        <div className="footer-item">
          <div className="item-value-flex">
            {/* <img src={chainLogo} alt='chain-logo' /> */}
            <div className="item-value">
              {ownerInfo.volumeTrade?.toFixed(3)}$
            </div>
          </div>
          <div className="item-name">{t("volume trade")}</div>
        </div>
      </ProfileFooter>
    </ProfilePanelContainer>
  );
}
