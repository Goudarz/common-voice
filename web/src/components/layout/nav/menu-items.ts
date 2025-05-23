import {
  ChatBubbleIcon,
  CheckCircle,
  EditIcon,
  FilePlus,
  FilledStarIcon,
  Globe,
  MarsSolo,
  MicIcon,
  Play,
  ReviewIcon,
  ShareLinkIcon,
  TranscribeIcon,
} from '../../ui/icons'
import URLS from '../../../urls'
import { NavItem } from './nav'
import { MenuConfig } from './contribute-menu'

export const menuItems: Record<NavItem, MenuConfig> = {
  speak: {
    items: [
      {
        icon: MicIcon,
        internalHref: URLS.SPEAK,
        localizedId: 'read-sentences',
        menuItemTooltip: 'read-sentences-menu-item-tooltip',
        menuItemAriaLabel: 'read-sentences-menu-item-aria-label',
        type: 'scripted',
      },
      {
        icon: ChatBubbleIcon,
        localizedId: 'answer-questions-coming-soon',
        menuItemTooltip: 'answer-questions-menu-item-tooltip',
        menuItemAriaLabel: 'answer-questions-menu-item-aria-label',
        type: 'spontaneous',
      },
    ],
    menuTooltip: 'speak-contribute-menu-tooltip',
    menuAriaLabel: 'speak-contribute-menu-aria-label',
  },
  listen: {
    items: [
      {
        icon: Play,
        internalHref: URLS.LISTEN,
        localizedId: 'validate-readings',
        menuItemTooltip: 'validate-readings-menu-item-tooltip',
        menuItemAriaLabel: 'validate-readings-menu-item-aria-label',
        type: 'scripted',
      },
      {
        icon: CheckCircle,
        localizedId: 'review-transcriptions-coming-soon',
        requiresAuth: true,
        menuItemTooltip: 'review-transcriptions-menu-item-tooltip',
        menuItemAriaLabel: 'review-transcriptions-menu-item-aria-label',
        type: 'spontaneous',
      },
    ],
    menuTooltip: 'listen-contribute-menu-tooltip',
    menuAriaLabel: 'listen-contribute-menu-aria-label',
  },
  write: {
    items: [
      {
        icon: EditIcon,
        internalHref: URLS.WRITE,
        localizedId: 'add-sentences',
        menuItemTooltip: 'add-sentences-menu-item-tooltip',
        menuItemAriaLabel: 'add-sentences-menu-item-aria-label',
        type: 'scripted',
      },
      {
        icon: ReviewIcon,
        internalHref: URLS.REVIEW,
        localizedId: 'review-sentences',
        requiresAuth: true,
        menuItemTooltip: 'review-sentences-menu-item-tooltip',
        menuItemAriaLabel: 'review-sentences-menu-item-aria-label',
        type: 'scripted',
      },
      {
        icon: FilePlus,
        localizedId: 'add-questions-coming-soon',
        requiresAuth: true,
        menuItemTooltip: 'add-questions-menu-item-tooltip',
        menuItemAriaLabel: 'add-questions-menu-item-aria-label',
        type: 'spontaneous',
      },
      {
        icon: TranscribeIcon,
        localizedId: 'transcribe-audio-coming-soon',
        menuItemTooltip: 'transcribe-audio-menu-item-tooltip',
        menuItemAriaLabel: 'transcribe-audio-menu-item-aria-label',
        type: 'spontaneous',
      },
    ],
    menuTooltip: 'write-contribute-menu-tooltip',
    menuAriaLabel: 'write-contribute-menu-aria-label',
  },
  download: {
    menuTooltip: 'download-contribute-menu-tooltip',
    menuAriaLabel: 'download-contribute-menu-aria-label',
  },
  about: {
    items: [
      {
        icon: MarsSolo,
        localizedId: 'about-us',
        internalHref: URLS.ABOUT,
        menuItemTooltip: 'about-us-menu-item-tooltip',
        menuItemAriaLabel: 'about-us-menu-item-aria-label',
        type: 'general',
      },
      {
        icon: FilledStarIcon,
        localizedId: 'partners',
        internalHref: URLS.PARTNER,
        menuItemTooltip: 'partnerships-menu-item-tooltip',
        menuItemAriaLabel: 'partnerships-menu-item-aria-label',
        type: 'general',
      },
      {
        icon: ShareLinkIcon,
        localizedId: 'press-and-stories',
        externalHref: 'https://foundation.mozilla.org/blog/topic/common-voice/',
        menuItemTooltip: 'press-and-stories-menu-item-tooltip',
        menuItemAriaLabel: 'press-and-stories-menu-item-aria-label',
        type: 'general',
      },
      {
        icon: Globe,
        internalHref: URLS.LANGUAGES,
        localizedId: 'community-and-languages',
        menuItemTooltip: 'community-and-languages-menu-item-tooltip',
        menuItemAriaLabel: 'community-and-languages-menu-item-aria-label',
        type: 'general',
      },
    ],
    menuTooltip: 'about-menu-tooltip',
    menuAriaLabel: 'about-menu-aria-label',
  },
}
