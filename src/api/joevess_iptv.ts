import { filter } from "../utils"
import type { TSources } from "../types"

export const joevess_iptv_sources: TSources = [
  {
    name: "joevess/IPTV home",
    f_name: "j_home",
    url: "https://raw.githubusercontent.com/joevess/IPTV/main/home.m3u8",
    filter: filter,
  },
  {
    name: "joevess/IPTV iptv",
    f_name: "j_iptv",
    url: "https://raw.githubusercontent.com/joevess/IPTV/main/iptv.m3u8",
    filter: filter,
  },
]
