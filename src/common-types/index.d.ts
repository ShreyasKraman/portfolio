import React from "react"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

type INavigationItem = {
  icon?: IconDefinition
  link?: string
  text?: string
  nightMode: boolean
  children?: React.ReactNode
  switch: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

type ToolbarType = {
  open: () => void
  switch: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  nightMode: boolean
}

type BackdropType = {
  clicked: () => void
  show: boolean
}

type SidedrawerType = {
  open: boolean
  close: () => void
}
