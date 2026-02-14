import Image from 'next/image';

import coin from '@/data/icons/coin.svg';
import discord from '@/data/icons/discord.svg';
import facebook from '@/data/icons/facebook.svg';
import github from '@/data/icons/github.svg';
import globe from '@/data/icons/globe.svg';
import instagram from '@/data/icons/instagram.svg';
import linkedin from '@/data/icons/linkedin.svg';
import onlyfans from '@/data/icons/onlyfans.svg';
import tiktok from '@/data/icons/tiktok.svg';
import twitch from '@/data/icons/twitch.svg';
import x from '@/data/icons/x.svg';
import youtube from '@/data/icons/youtube.svg';

export const iconRepository: Record<string, React.ReactNode> = {
  coin: <Image src={coin} alt="Coin" width={24} height={24} />,
  discord: <Image src={discord} alt="Discord" width={24} height={24} />,
  facebook: <Image src={facebook} alt="Facebook" width={24} height={24} />,
  github: <Image src={github} alt="GitHub" width={24} height={24} />,
  globe: <Image src={globe} alt="Globe" width={24} height={24} />,
  instagram: <Image src={instagram} alt="Instagram" width={24} height={24} />,
  linkedin: <Image src={linkedin} alt="LinkedIn" width={24} height={24} />,
  onlyfans: <Image src={onlyfans} alt="OnlyFans" width={24} height={24} />,
  tiktok: <Image src={tiktok} alt="TikTok" width={24} height={24} />,
  twitch: <Image src={twitch} alt="Twitch" width={24} height={24} />,
  x: <Image src={x} alt="X" width={24} height={24} />,
  youtube: <Image src={youtube} alt="YouTube" width={24} height={24} />,
};