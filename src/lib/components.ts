import { ComponentExample, categories as categoryList } from './types';

// Import component examples from their respective files
import { buttonExample } from './components/forms/button';
import { buttonSecondaryExample } from './components/forms/button-secondary';
import { buttonOutlineExample } from './components/forms/button-outline';
import { buttonGhostExample } from './components/forms/button-ghost';
import { buttonLinkExample } from './components/forms/button-link';
import { formExample } from './components/forms/form';
import { checkboxExample } from './components/forms/checkbox';
import { switchExample } from './components/forms/switch';
import { sliderExample } from './components/forms/slider';
import { radioGroupExample } from './components/forms/radio-group';
import { selectExample } from './components/forms/select';
import { calendarExample } from './components/forms/calendar';

import { tabsExample } from './components/navigation/tabs';

import { cardExample } from './components/layout/card';
import { separatorExample } from './components/layout/separator';

import { badgeDefaultExample } from './components/data-display/badge-default';
import { badgeSecondaryExample } from './components/data-display/badge-secondary';
import { badgeOutlineExample } from './components/data-display/badge-outline';
import { badgeDestructiveExample } from './components/data-display/badge-destructive';
import { avatarExample } from './components/data-display/avatar';
import { accordionExample } from './components/data-display/accordion';

import { progressExample } from './components/feedback/progress';

import { alertDialogExample } from './components/overlays/alert-dialog';

import {breadcrumbExample} from './components/navigation/breadcrumb'

import {carouselExample} from './components/carousel/carousel'

// Combine all component examples
export const components: ComponentExample[] = [
  // Forms
  buttonExample,
  buttonSecondaryExample,
  buttonOutlineExample,
  buttonGhostExample,
  buttonLinkExample,
  formExample,
  checkboxExample,
  switchExample,
  sliderExample,
  radioGroupExample,
  selectExample,
  calendarExample,
  
  // Navigation
  tabsExample,
  breadcrumbExample, // Added the new breadcrumb component
  
  // Layout
  cardExample,
  separatorExample,
  
  // Data Display
  badgeDefaultExample,
  badgeSecondaryExample,
  badgeOutlineExample,
  badgeDestructiveExample,
  avatarExample,
  accordionExample,
  
  // Feedback
  progressExample,
  
  // Overlays
  alertDialogExample,

  //Breadcrumbs
  breadcrumbExample,

  //Carousel
  carouselExample
];

export const categories = categoryList;